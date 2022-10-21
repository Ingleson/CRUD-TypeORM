import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity()

export class User {
  @PrimaryColumn("uuid")
  readonly id: string

  @Column()
  name: string

  @Column({unique: true})
  email: string

  @Column()
  @Exclude()
  password: string

  @Column()
  isAdm: boolean

  @Column({default: true})
  isActive: boolean

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date

  constructor() {
    if(!this.id) {
      this.id = uuid();
    };
  };
};