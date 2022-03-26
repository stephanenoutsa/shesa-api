import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventImageDto } from './dto/create-event-image.dto';
import { UpdateEventImageDto } from './dto/update-event-image.dto';
import { EventImage } from './entities/event-image.entity';

@Injectable()
export class EventImagesService {
  constructor(
    @InjectRepository(EventImage)
    private eventImageRepository: Repository<EventImage>
  ) {}

  async create(createEventImageDto: CreateEventImageDto) {
    const savedImage = await this.eventImageRepository.save(createEventImageDto);

    return savedImage;
  }

  async findAll() {
    const eventImages = await this.eventImageRepository.find();

    return eventImages;
  }

  async findOne(id: number) {
    const eventImage = await this.eventImageRepository.findOne(id);

    return eventImage;
  }

  async update(id: number, updateEventImageDto: UpdateEventImageDto) {
    const updatedImage = await this.eventImageRepository.update(id, updateEventImageDto);

    return updatedImage;
  }

  async remove(id: number) {
    await this.eventImageRepository.softDelete(id);

    return;
  }
}
