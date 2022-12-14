import { Injectable } from '@nestjs/common';
import { Notification } from '@aplication/entities/notification';
import { NotificationContent } from '@aplication/entities/notification-content';
import { NotificationRepository } from '@aplication/repository/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;
    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    await this.notificationRepository.create(notification);
    return {
      notification,
    };
  }
}
