import { Notification } from './notification';
import { Content } from './notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('You received a new message'),
      category: 'email',
      recipientId: 'fake-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
