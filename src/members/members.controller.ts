import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from './../common/guards/auth.guard';
import { JoiValidationPipe } from './../common/pipes/joi-validation.pipe';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { createMemberSchema } from './schemas/create-member.schema';
import { updateMemberSchema } from './schemas/update-member.schema';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(createMemberSchema))
  @UseInterceptors(FileInterceptor('avatar'))
  create(
    @Body() createMemberDto: CreateMemberDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    const path = avatar.path;
    return this.membersService.create(createMemberDto);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UsePipes(new JoiValidationPipe(updateMemberSchema))
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
