import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto) {
    const savedJob = await this.jobRepository.save(createJobDto);

    return savedJob;
  }

  async findAll() {
    const jobs = await this.jobRepository.find();

    return jobs;
  }

  async findOne(id: number) {
    const job = await this.jobRepository.findOne(id);

    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    const updatedJob = await this.jobRepository.update(id, updateJobDto);

    return updatedJob;
  }

  async remove(id: number) {
    await this.jobRepository.softDelete(id);

    return;
  }
}
