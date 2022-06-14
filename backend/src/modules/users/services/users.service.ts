/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { TenantsService } from 'src/modules/tenants/services/tenants.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { FindUserDocumentDto } from '../dto/find-user-document.dto';
import { FindUserEmailDto } from '../dto/find-user-email.dto';
import { QueryUserDto } from '../dto/query-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import IUsersRepository, {
  USERS_REPOSITORY_SERVICE,
} from '../repositories/users.repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY_SERVICE)
    private readonly repository: IUsersRepository,
    private readonly tenantService: TenantsService,
  ) {}

  private async validateCreateLocalUser(data: CreateUserDto) {
    const { email, document } = data;

    const userEmail = await this.findByEmail({
      email,
    });

    if (userEmail) {
      throw new BadRequestException('User with email already informed');
    }

    const userDocument = await this.findByDocument({
      document: document,
    });

    if (userDocument) {
      throw new BadRequestException('User with document already informed');
    }
  }

  private async validateUpdateLocalUser(
    id: string,
    data: UpdateUserDto,
    updateUser: User,
  ) {
    if (!updateUser) {
      throw new NotFoundException('User not found');
    }

    const company = await this.tenantService.tenant();
    if (updateUser.company_id !== company.id) {
      throw new BadRequestException('Invalid User');
    }

    const { email, document } = data;
    if (email === null) {
      throw new BadRequestException('Invalid email');
    }

    if (document === null) {
      throw new BadRequestException('Invalid document');
    }

    if (email) {
      const userEmail = await this.findByEmail({
        email,
      });

      if (userEmail && userEmail.id !== updateUser.id) {
        throw new BadRequestException('User with email already informed');
      }
    }

    if (document) {
      const userDocument = await this.findByDocument({
        document: document,
      });

      if (userDocument && userDocument.id !== updateUser.id) {
        throw new BadRequestException('User with document already informed');
      }
    }
  }

  async create(data: CreateUserDto) {
    await Promise.all([this.validateCreateLocalUser(data)]);

    const company = await this.tenantService.tenant();

    try {
      data.user_name = data.email;
      data.company_id = company.id;
      delete data.password;

      return await this.repository.create(data);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(query: QueryUserDto) {
    return await this.repository.findAll(query);
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async findByEmail(data: FindUserEmailDto): Promise<User | undefined> {
    return await this.repository.findByEmail(data);
  }

  async findByDocument(data: FindUserDocumentDto): Promise<User | undefined> {
    return await this.repository.findByDocument(data);
  }

  async update(id: string, data: UpdateUserDto) {
    const updateUser = await this.findOne(id);

    await Promise.all([this.validateUpdateLocalUser(id, data, updateUser)]);

    return await this.repository.update(id, data);
  }

  async remove(id: string) {
    const deleteUser = await this.findOne(id);

    if (!deleteUser) {
      throw new NotFoundException('User not found');
    }

    const company = await this.tenantService.tenant();
    if (deleteUser.company_id !== company.id) {
      throw new BadRequestException('Invalid User');
    }

    await this.repository.remove(id);

    return;
  }
}
