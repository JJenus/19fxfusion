import { IUser } from "./IUser";

export type AuthToken = {
	userId: string;
	user: IUser;
	token: string;
};
