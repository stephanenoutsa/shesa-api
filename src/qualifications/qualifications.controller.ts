import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes } from '@nestjs/common';
import { AuthGuard } from './../common/guards/auth.guard';
import { JoiValidationPipe } from './../common/pipes/joi-validation.pipe';
import { QualificationsService } from './qualifications.service';
import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';
import { createQualificationSchema } from './schemas/create-qualification.schema';
import { updateQualificationSchema } from './schemas/update-qualification.schema';

@Controller('qualifications')
export class QualificationsController {
  constructor(private readonly qualificationsService: QualificationsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(createQualificationSchema))
  create(@Body() createQualificationDto: CreateQualificationDto) {
    return this.qualificationsService.create(createQualificationDto);
  }

  @Get()
  findAll() {
    return this.qualificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qualificationsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(updateQualificationSchema))
  update(@Param('id') id: string, @Body() updateQualificationDto: UpdateQualificationDto) {
    return this.qualificationsService.update(+id, updateQualificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qualificationsService.remove(+id);
  }
}
