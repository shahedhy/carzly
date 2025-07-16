import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;
  
   @Column()
    password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true, type: 'text' })
  carInfo: string;

  @Column({ default: false })
  isVIP: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
