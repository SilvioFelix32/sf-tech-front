/* eslint-disable prettier/prettier */
// This will be our injection token.
export const USERS_REPOSITORY_SERVICE = 'USERS_REPOSITORY_SERVICE';

import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { QueryUserDto } from '../dto/query-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export default interface IUsersRepository {
  create(data: CreateUserDto): Promise<User>;
  findAll(query: QueryUserDto): Promise<IRespFindAllPaginateDto | undefined>;
  findOne(id: string): Promise<User | undefined>;
  update(id: string, data: UpdateUserDto): Promise<User | undefined>;
  remove(id: string): Promise<void>;
}
