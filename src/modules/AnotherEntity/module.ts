import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnotherEntity } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnotherEntity])],
  exports: [TypeOrmModule],
})
export class UsersModule {}
