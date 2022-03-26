import { Entity, Column, OneToMany } from "typeorm";

import { Base } from '../../common/entities/base.entity';
import { Cv } from '../../cvs/entities/cv.entity';
import { Internship } from './../../internships/entities/internship.entity';
import { Job } from './../../jobs/entities/job.entity';
import { Qualification } from '../../qualifications/entities/qualification.entity';

@Entity()
export class Member extends Base {
  @Column({ nullable: true })
  firstname: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'date' })
  dob: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  // @Column('year')
  @Column('integer')
  batch: number;

  @Column()
  field: string;

  @OneToMany(() => Qualification, qualification => qualification.member)
  qualifications: Qualification[];

  @OneToMany(() => Cv, cv => cv.member)
  cvs: Cv[];

  @OneToMany(() => Internship, internship => internship.member)
  internships: Internship[];

  @OneToMany(() => Job, job => job.member)
  jobs: Job[];
}
