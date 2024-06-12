export type AccountLevel = {
	id: string | undefined | null;
	title: string;
	dailyLimit: number;
	maxBalanceLimit: number;
	accountLevel: number;
	createdAt: string | null;
	updatedAt: string | null;
};
