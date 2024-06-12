import { AuthToken } from "./interfaces/AuthToken";

export const storage = () => {
	const authKey = "zipayauthkey";
	const passphrase = "7)uhgyf#$322";

	const remember = async (auth: AuthToken) => {
		await encryptAndStore(authKey, JSON.stringify(auth), passphrase);
	};

	const getAuth = async () => {
		const auth = await retrieveAndDecrypt(authKey, passphrase);
		if (auth != null) {
			const token: AuthToken = JSON.parse(auth);
			return token;
		}
		return false;
	};

	const remove = () => {
		try {
			if (process.client) localStorage.removeItem(authKey);
		} catch (error) {
			// console.log(error);
		}
	};

	return {
		remember,
		getAuth,
		remove,
	};
};

function generateSalt(): Uint8Array {
	const array = new Uint8Array(16);
	window.crypto.getRandomValues(array);
	return array;
}

// Function to derive a key from a passphrase
async function deriveKey(
	passphrase: string,
	salt: Uint8Array
): Promise<CryptoKey> {
	const encoder = new TextEncoder();
	const passphraseKey = await crypto.subtle.importKey(
		"raw",
		encoder.encode(passphrase),
		{ name: "PBKDF2" },
		false,
		["deriveBits"]
	);

	const keyMaterial = await crypto.subtle.deriveBits(
		{
			name: "PBKDF2",
			salt: salt,
			iterations: 100000,
			hash: "SHA-256",
		},
		passphraseKey,
		256
	);

	return crypto.subtle.importKey(
		"raw",
		keyMaterial,
		{ name: "AES-GCM" },
		false,
		["encrypt", "decrypt"]
	);
}

// Function to encrypt and store data
async function encryptAndStore(
	key: string,
	data: string,
	passphrase: string
): Promise<void> {
	try {
		const salt = generateSalt();
		const encryptionKey = await deriveKey(passphrase, salt);
		const iv = crypto.getRandomValues(new Uint8Array(12));
		const encodedData = new TextEncoder().encode(data);

		const encryptedData = await crypto.subtle.encrypt(
			{ name: "AES-GCM", iv: iv },
			encryptionKey,
			encodedData
		);

		const encryptedObject = {
			alts: Array.from(salt),
			_s4: Array.from(iv),
			data: Array.from(new Uint8Array(encryptedData)),
		};

		// this.$cookies.set('thing', data, {
		// 	path: '/',
		// 	maxAge: 60 * 60 * 24 * 7
		// });
		if (process.client) {
			localStorage.setItem(key, JSON.stringify(encryptedObject));
		}
	} catch (error) {
		console.log(error);
	}
}

// Function to retrieve and decrypt data
async function retrieveAndDecrypt(key: string, passphrase: string) {
	let encryptedData;
	try {
		if (process.client) encryptedData = localStorage.getItem(key);
	} catch (error) {
		// console.log(error);
	}

	if (!encryptedData) {
		return null;
	}

	console.log("Yes")

	const encryptedObject = JSON.parse(encryptedData);

	const salt = new Uint8Array(encryptedObject.alts);
	const iv = new Uint8Array(encryptedObject._s4);
	const data = new Uint8Array(encryptedObject.data);

	const encryptionKey = await deriveKey(passphrase, salt);

	try {
		const decryptedData = await crypto.subtle.decrypt(
			{ name: "AES-GCM", iv: iv },
			encryptionKey,
			data
		);

		return new TextDecoder().decode(decryptedData);
	} catch (error) {
		console.error("Decryption failed:", error);
		return null; // Decryption failed
	}
}
