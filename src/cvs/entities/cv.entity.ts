import { Entity, Column, DeleteDateColumn, ManyToOne } from "typeorm";

import { Base } from '../../common/entities/base.entity';
import { Member } from '../../members/entities/member.entity';

@Entity()
export class Cv extends Base {
  @ManyToOne(() => Member, member => member.cvs)
  member: Member;

  @Column({ nullable: true })
  title: string;

  @Column()
  url: string;
  
  @DeleteDateColumn()
  deletedAt: Date;
}
