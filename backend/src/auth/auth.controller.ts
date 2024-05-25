import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('validate/:correo/:password')
  async validate(@Param('correo') correo: string, @Param('password') password: string) {
    return await this.authService.validateUser(correo, password);
  }
}
