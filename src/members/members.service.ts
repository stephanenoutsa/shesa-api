import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const savedMember = await this.memberRepository.save(createMemberDto);

    return savedMember;
  }

  async findAll() {
    const members = await this.memberRepository.find();

    return members;
  }

  async findOne(id: number) {
    const member = await this.memberRepository.findOne(id);

    return member;
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    const updatedMember = await this.memberRepository.update(
      id,
      updateMemberDto,
    );

    return updateMemberDto;
  }

  async remove(id: number) {
    await this.memberRepository.delete(id);

    return;
  }
}
