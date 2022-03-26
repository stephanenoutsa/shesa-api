import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ) {}

  async create(createEventDto: CreateEventDto) {
    const savedEvent = await this.eventRepository.save(createEventDto);

    return savedEvent;
  }

  async findAll() {
    const events = await this.eventRepository.find();

    return events;
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOne(id);

    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    await this.eventRepository.update(id, updateEventDto);

    return;
  }

  async remove(id: number) {
    await this.eventRepository.softDelete(id);

    return;
  }
}
