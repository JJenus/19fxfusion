import { IUser } from "./IUser";

export interface Trade {
    id?: number;  // Optional because it's generated
    user?: IUser;
    lots: number;
    tradeType: TradeType;
    entryPrice: number;
    stopLossPrice?: number;
    takeProfitPrice?: number;
    openTime: string;  // Assuming string for ISO date format
    closeTime?: string;  // Optional because it might not be closed yet
    profitLoss: number;
    closedBy?: ClosedBy;  // Optional because it might not be closed yet
    status: TradeStatus;
}

export enum TradeType {
    LONG = 'LONG',
    SHORT = 'SHORT',
}

export enum TradeStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
}

export enum ClosedBy {
    TRADER = 'TRADER',
    STOPLOSS = 'STOPLOSS',
    TAKEPROFIT = 'TAKEPROFIT',
}