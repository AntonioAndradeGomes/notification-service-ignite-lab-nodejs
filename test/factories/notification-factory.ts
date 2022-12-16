import {
  Notification,
  NotificationProps,
} from '@aplication/entities/notification';
import { NotificationContent } from '@aplication/entities/notification-content';
import { type } from 'os';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new NotificationContent('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
