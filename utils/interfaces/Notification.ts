export enum NotificationStatus {
	READ = "read",
	UNREAD = "unread",
}

export enum NotificationType {
	DEBIT = "credit",
	CREDIT = "debit",
	ACCOUNT_UPDATE = "account update",
	FAILED = "failed",
	INFO = "info",
}

export interface INotification {
	id: string | null;
	userId: string;
	title: string;
	status: NotificationStatus;
	message: string;
	type: NotificationType;
	createdAt: string;
}
