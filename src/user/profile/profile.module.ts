import { Module } from '@nestjs/common';
import { UserService } from './profile.service';
import { UserController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entitity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController]
})
export class ProfileModule {}
