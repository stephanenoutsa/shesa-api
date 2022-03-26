import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';
import { Qualification } from './entities/qualification.entity';

@Injectable()
export class QualificationsService {
  constructor(
    @InjectRepository(Qualification)
    private qualificationRepository: Repository<Qualification>
  ) {}

  async create(createQualificationDto: CreateQualificationDto) {
    const savedQualification = await this.qualificationRepository.save(createQualificationDto);

    return savedQualification;
  }

  async findAll() {
    const qualifications = await this.qualificationRepository.find();

    return qualifications;
  }

  async findOne(id: number) {
    const qualification = await this.qualificationRepository.findOne(id);

    return qualification;
  }

  async update(id: number, updateQualificationDto: UpdateQualificationDto) {
    const updatedQualification = await this.qualificationRepository.update(id, updateQualificationDto);

    return updatedQualification;
  }

  async remove(id: number) {
    await this.qualificationRepository.softDelete(id);

    return;
  }
}
