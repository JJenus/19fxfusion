import { Account } from "./Account";

export interface IUser {
	id: string;
	name: string;
	email: string;
	phone: string;
	imgUrl: string;
	idUrl: string | null | undefined;
	address: string;
	city: string;
	country: string;
	dob: string | undefined;
	verified: boolean;
	emailVerified: boolean;
	userRole: string;
	account: Account;
	createdAt: string;
}
