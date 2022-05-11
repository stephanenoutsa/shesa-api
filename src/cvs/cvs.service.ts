import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvsService {
  constructor(
    @InjectRepository(Cv)
    private cvRepository: Repository<Cv>,
  ) {}

  async create(createCvDto: CreateCvDto) {
    const savedCv = await this.cvRepository.save(createCvDto);

    return savedCv;
  }

  async findAll() {
    const cvs = await this.cvRepository.find();

    return cvs;
  }

  async findOne(id: number) {
    const cv = await this.cvRepository.findOne(id);

    return cv;
  }

  async update(id: number, updateCvDto: UpdateCvDto) {
    const updatedCv = await this.cvRepository.update(id, updateCvDto);

    return updatedCv;
  }

  async remove(id: number) {
    await this.cvRepository.softDelete(id);

    return;
  }
}
