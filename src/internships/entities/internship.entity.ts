import { Entity, Column, DeleteDateColumn, ManyToOne } from 'typeorm';

import { Base } from '../../common/entities/base.entity';
import { Member } from '../../members/entities/member.entity';

@Entity()
export class Internship extends Base {
  @ManyToOne(() => Member, (member) => member.internships)
  member: Member;

  @Column()
  companyName: string;

  @Column({
    // type: 'longtext',
    type: 'text',
    nullable: true,
  })
  companyDesc: string;

  @Column('date')
  startDate: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  endDate: string;

  @DeleteDateColumn()
  deletedAt: string;
}
