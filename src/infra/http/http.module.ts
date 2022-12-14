import { Module } from '@nestjs/common';
import { SendNotification } from '@aplication/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
