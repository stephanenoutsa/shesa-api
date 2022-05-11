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
import { InternshipsService } from './internships.service';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';
import { createInternshipSchema } from './schemas/create-internship.schema';
import { updateInternshipSchema } from './schemas/update-internship.schema';

@Controller('internships')
export class InternshipsController {
  constructor(private readonly internshipsService: InternshipsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(createInternshipSchema))
  create(@Body() createInternshipDto: CreateInternshipDto) {
    return this.internshipsService.create(createInternshipDto);
  }

  @Get()
  findAll() {
    return this.internshipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internshipsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(updateInternshipSchema))
  update(
    @Param('id') id: string,
    @Body() updateInternshipDto: UpdateInternshipDto,
  ) {
    return this.internshipsService.update(+id, updateInternshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internshipsService.remove(+id);
  }
}
