import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnotherEntity } from './modules/AnotherEntity/entity';
import { Group, GroupToAnotherEntityTable } from './modules/Group/entity';
import { User } from './modules/User/entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test_db',
      entities: [User, Group, AnotherEntity, GroupToAnotherEntityTable],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
