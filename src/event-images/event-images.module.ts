import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventImagesService } from './event-images.service';
import { EventImagesController } from './event-images.controller';
import { EventImage } from './entities/event-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventImage])],
  controllers: [EventImagesController],
  providers: [EventImagesService]
})
export class EventImagesModule {}
