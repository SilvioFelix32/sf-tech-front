import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users.service';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async login(user: User): Promise<UserToken> {
    const { user_id, email, name }: Partial<User> =
      await this.userService.findByEmail(user.email);

    const payload: UserPayload = {
      sub: user_id,
      email: email,
      name: name,
    };

    return {
      access_token: this.jwtService.sign(payload),
      email,
      name,
    };
  }

  async validateUser(email: string, dbPassword: string): Promise<User> {
    const user: any = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = bcrypt.compare(user.password, dbPassword);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
