import { IUser } from "./IUser";

export type AuthToken = {
	userId: string;
	user: any | IUser;
	token: string;
};
