import { PartialType } from '@nestjs/mapped-types';
import { CreateEventImageDto } from './create-event-image.dto';

export class UpdateEventImageDto extends PartialType(CreateEventImageDto) {}
