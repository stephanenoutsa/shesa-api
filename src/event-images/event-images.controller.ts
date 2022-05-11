import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from './../common/guards/auth.guard';
import { JoiValidationPipe } from './../common/pipes/joi-validation.pipe';
import { EventImagesService } from './event-images.service';
import { CreateEventImageDto } from './dto/create-event-image.dto';
import { UpdateEventImageDto } from './dto/update-event-image.dto';
import { createEventImageSchema } from './schemas/create-event-image.schema';
import { updateEventImageSchema } from './schemas/update-event-image.schema';

@Controller('event-images')
export class EventImagesController {
  constructor(private readonly eventImagesService: EventImagesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(createEventImageSchema))
  create(@Body() createEventImageDto: CreateEventImageDto) {
    return this.eventImagesService.create(createEventImageDto);
  }

  @Get()
  findAll() {
    return this.eventImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventImagesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(updateEventImageSchema))
  update(
    @Param('id') id: string,
    @Body() updateEventImageDto: UpdateEventImageDto,
  ) {
    return this.eventImagesService.update(+id, updateEventImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventImagesService.remove(+id);
  }
}
