import { InMemoryNotificationRepository } from '@test/repositories/in-memory-norifications-repository';
import { CancelNotification } from './cancel-notification';
import { Notification } from '@aplication/entities/notification';
import { NotificationContent } from '@aplication/entities/notification-content';
import { NotificationNotFoud } from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';
import { ReadNotification } from './read-notification';
import { UnreadNotification } from './unread-notification';

describe('Unread Notification', () => {
  it('must be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);
    const notification = makeNotification({
      recipientId: 'example-recipient-id',
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);
    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });
  it('should not be able to unread a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFoud);
  });
});

//1:05:00
