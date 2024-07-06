export enum NotificationStatus {
	READ = "READ",
	UNREAD = "UNREAD",
}

export enum Priority {
	NORMAL = "NORMAL",
	IMPORTANT = "IMPORTANT",
}

export interface INotification {
	id?: number; // Optional because it's generated
	userId: number;
	message: string;
	title: string;
	status: NotificationStatus;
	priority: Priority;
	createdAt?: string; // Optional because it's generated
}
