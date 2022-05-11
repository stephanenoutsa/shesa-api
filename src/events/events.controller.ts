import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Query,
  DefaultValuePipe,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { Express, Response } from 'express';
import { AuthGuard } from './../common/guards/auth.guard';
import { JoiValidationPipe } from './../common/pipes/joi-validation.pipe';
import { editedFileName, imageFileFilter } from './../common/utils/utils';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { saveEventSchema } from './schemas/save-event.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('thumbnails')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileInterceptor('thumbnail', {
      storage: diskStorage({
        destination: './uploads/events/thumbnails',
        filename: editedFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  uploadThumbnail(@UploadedFile() thumbnail: Express.Multer.File) {
    return thumbnail;
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(saveEventSchema))
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll(@Query('status', new DefaultValuePipe('')) status: string) {
    return this.eventsService.findAll();
  }

  @Get('images')
  findImageByPath(@Query('path') path: string, @Res() res: Response) {
    return res.sendFile(path, { root: '.' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  // @UsePipes(new JoiValidationPipe(saveEventSchema))
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
