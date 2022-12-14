import { Notification } from '@aplication/entities/notification';
import { NotificationRepository } from '@aplication/repository/notifications-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    // console.log(notification);
    this.notifications.push(notification);
  }
}
