import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Student } from '@/student/entities/student.entity';

@ObjectType('certificates')
@Entity()
export class Certificate {
  @Field(() => ID)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Column()
  certificate_name: string;

  @ManyToOne(() => Student)
  @Field(() => Student)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: Student;
}

@ObjectType()
export class GetCertificateType {
  @Field(() => [Certificate], { nullable: true })
  data?: Certificate[];

  @Field(() => Number, { nullable: true })
  count?: number;
}