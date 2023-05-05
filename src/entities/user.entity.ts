import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 90 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 11 })
  telefone: string;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: true })
  contacts: Contact[];
}

export { User };
