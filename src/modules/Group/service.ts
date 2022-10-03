import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private usersRepository: Repository<Group>,
  ) {}

  findAll(): Promise<Group[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Group> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
