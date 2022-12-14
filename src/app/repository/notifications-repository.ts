import { Notification } from '@aplication/entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
