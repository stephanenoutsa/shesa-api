import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './entities/event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    MulterModule.register({ dest: './uploads/events/thumbnails' })
  ],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
