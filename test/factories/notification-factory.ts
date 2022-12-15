import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '@application/entities/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    category: 'email',
    content: new Content('fake-content'),
    recipientId: 'recipient-id-1',
    ...override,
  });
}
