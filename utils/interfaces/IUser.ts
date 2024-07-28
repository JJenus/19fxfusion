import { type Trade } from "./Trade";
import { type Transaction } from "./Transaction";

export interface IUser {
    id?: number;  // Optional because it's generated
    name: string;
    email: string;
    ethAddress: string;
    emailVerified: boolean;
    accountVerified: boolean;
    secret?: string;  // Optional because it's not always set
    password?: string;  // Optional because it's sensitive and might not be needed in all cases
    balance: string;
    status: string;
    imgUrl: string;
    userRole: string;
    trades?: Trade[];  // Optional because it's a list that might not always be populated
    transactions?: Transaction[];  // Optional because it's a list that might not always be populated
    createdAt?: string;  // Optional because it's generated
    updatedAt?: string;  // Optional because it's generated
}
