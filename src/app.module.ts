import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './user/profile/profile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/profile/user.entitity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'redone',
    database: 'test_redone',
    entities: [User],
    synchronize: true,
  }), 
  ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
