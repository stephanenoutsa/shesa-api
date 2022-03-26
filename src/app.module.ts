import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './common/exception-filters/all-exceptions.filter';
import { EventsModule } from './events/events.module';
import { MembersModule } from './members/members.module';
import { EventImagesModule } from './event-images/event-images.module';
import { CvsModule } from './cvs/cvs.module';
import { InternshipsModule } from './internships/internships.module';
import { JobsModule } from './jobs/jobs.module';
import { QualificationsModule } from './qualifications/qualifications.module';

@Module({
  imports: [
    MembersModule, EventsModule, EventImagesModule, CvsModule,
    InternshipsModule, JobsModule, QualificationsModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }
  ]
})
export class AppModule {}
