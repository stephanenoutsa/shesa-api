import { Entity, Column, DeleteDateColumn, ManyToOne } from 'typeorm';

import { Base } from '../../common/entities/base.entity';
import { Member } from '../../members/entities/member.entity';

@Entity()
export class Qualification extends Base {
  @ManyToOne(() => Member, (member) => member.qualifications)
  member: Member;

  @Column({
    // type: 'longtext',
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column()
  url: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
