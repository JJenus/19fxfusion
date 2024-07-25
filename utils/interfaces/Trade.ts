import { IUser } from "./IUser";

export interface Trade {
	id?: number; // Optional because it's generated
	user?: {id: number};
	lots: number;
	tradeType: TradeType;
	entryPrice: number;
	stopLossPrice?: number;
	takeProfitPrice?: number;
	openTime?: string; // Assuming string for ISO date format
	closeTime?: string; // Optional because it might not be closed yet
	profitLoss: number;
	closedBy?: ClosedBy; // Optional because it might not be closed yet
	status: TradeStatus;
	currencyPair?: string;
}

export enum TradeType {
	LONG = "LONG",
	SHORT = "SHORT",
}

export enum TradeStatus {
	OPEN = "OPEN",
	CLOSED = "CLOSED",
    ALL = "ALL"
}

export enum ClosedBy {
	TRADER = "TRADER",
	STOPLOSS = "STOPLOSS",
	TAKEPROFIT = "TAKEPROFIT",
	OPEN = "OPEN",
}
