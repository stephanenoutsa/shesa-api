import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';
import { Internship } from './entities/internship.entity';

@Injectable()
export class InternshipsService {
  constructor(
    @InjectRepository(Internship)
    private internshipRepository: Repository<Internship>,
  ) {}

  async create(createInternshipDto: CreateInternshipDto) {
    const savedInternship = await this.internshipRepository.save(
      createInternshipDto,
    );

    return savedInternship;
  }

  async findAll() {
    const internships = await this.internshipRepository.find();

    return internships;
  }

  async findOne(id: number) {
    const internship = await this.internshipRepository.findOne(id);

    return internship;
  }

  async update(id: number, updateInternshipDto: UpdateInternshipDto) {
    const updatedInternship = await this.internshipRepository.update(
      id,
      updateInternshipDto,
    );

    return updatedInternship;
  }

  async remove(id: number) {
    await this.internshipRepository.softDelete(id);

    return;
  }
}
