import { Beneficiary } from "./Beneficiary";
import { IUser } from "./IUser";

export interface Transaction  {
	id?: number;  // Optional because it's generated
    amount: string;
    status: TransactionStatus;
    transactionType: TransactionType;
    user: IUser;
    transactionId: string;
    transactionRef: string;
    createdAt?: string;  // Optional because it's generated
    updatedAt?: string;  // Optional because it's generated
}

export enum TransactionStatus {
    PROCESSING = 'PROCESSING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    PENDING = 'PENDING',
}

export enum TransactionType {
    DEPOSIT = 'DEPOSIT',
    WITHDRAW = 'WITHDRAW',
}