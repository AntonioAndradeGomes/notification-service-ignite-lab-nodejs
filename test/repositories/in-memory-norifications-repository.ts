import { Notification } from '../../src/app/entities/notification';
import { NotificationRepository } from '../../src/app/repository/notifications-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    // console.log(notification);
    this.notifications.push(notification);
  }
}
