import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualificationsService } from './qualifications.service';
import { QualificationsController } from './qualifications.controller';
import { Qualification } from './entities/qualification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Qualification])],
  controllers: [QualificationsController],
  providers: [QualificationsService],
})
export class QualificationsModule {}
