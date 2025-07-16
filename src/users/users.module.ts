import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';

@Module({
imports: [TypeOrmModule.forFeature([User])], 
 providers: [UsersService],  // //   providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // إذا بدك تستخدم UsersService خارج الموديول
})
export class UsersModule {}
