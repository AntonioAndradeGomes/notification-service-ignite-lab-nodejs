import { Notification } from '@aplication/entities/notification';
import { NotificationContent } from '@aplication/entities/notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'bcabobcpacbalbcoa',
    });
    expect(notification).toBeTruthy();
  });
});
