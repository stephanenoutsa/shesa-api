import { Entity, Column, DeleteDateColumn, ManyToOne } from "typeorm";

import { Base } from '../../common/entities/base.entity';
import { Event } from '../../events/entities/event.entity';

@Entity()
export class EventImage extends Base {
  @ManyToOne(() => Event, event => event.images)
  event: Event;

  @Column({ nullable: true })
  caption: string;

  @Column()
  url: string;

  @DeleteDateColumn()
  deletedAt: Date
}
