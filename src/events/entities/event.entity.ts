import { Entity, Column, DeleteDateColumn, OneToMany } from "typeorm";

import { Base } from '../../common/entities/base.entity';
import { EventImage } from '../../event-images/entities/event-image.entity';

@Entity()
export class Event extends Base {
  @Column()
  title: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ nullable: true })
  thumbnail: string;

  @Column({
    // type: 'longtext',
    type: 'text',
    nullable: true
  })
  description: string;

  @OneToMany(() => EventImage, image => image.event)
  images: EventImage[];

  @DeleteDateColumn()
  deletedAt: Date;
}
