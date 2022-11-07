import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user_name: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUserName(user_name);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { user_name: user.user_name, sub: user.user_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
