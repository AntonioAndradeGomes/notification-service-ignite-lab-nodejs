import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from '@aplication/use-cases/send-notification';
import { CreateNotificationBody } from '@infra/http/dtos/create-notification-body';
import { NotificationViewModel } from '@infra/http/view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
    console.log(notification);
    const raw = NotificationViewModel.toHTTP(notification);
    console.log(raw);

    return { notification: raw };
  }
}
