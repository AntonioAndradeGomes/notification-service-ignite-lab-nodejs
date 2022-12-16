import { InMemoryNotificationRepository } from '@test/repositories/in-memory-norifications-repository';
import { CancelNotification } from './cancel-notification';
import { Notification } from '@aplication/entities/notification';
import { NotificationContent } from '@aplication/entities/notification-content';
import { NotificationNotFoud } from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel Notification', () => {
  it('must be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);
    const notification = makeNotification({
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(notification);
    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not be able to cancel a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFoud);
  });
});
