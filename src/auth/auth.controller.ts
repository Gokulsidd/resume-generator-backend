import { Controller, Post, Body, UseGuards, UnauthorizedException, Get, Request, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { UserRole } from './user.schema';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      console.log('no user')
    }
    console.log(this.authService.login(user) , 'uj')
    return this.authService.login(user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    try {
      const user = await this.authService.findByEmail(req.user.email);
      if (!user) {
        return { message: 'User not found' };
      }
      return {
        username: user.username,
        email: user.email,
        role: user.role,
      };
    } catch (error) {
      throw new Error(`Failed to fetch profile: ${error.message}`);
    }
  }

  @Post('register')
  async register(@Body() registerDto: { username: string , email: string; password: string; role?: UserRole }) {
    return this.authService.register(registerDto.username ,registerDto.email, registerDto.password, registerDto.role || UserRole.USER);
  }

  @Post('register-admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(UserRole.ADMIN)
  async registerAdmin(@Body() registerDto: { username: string, email: string; password: string }) {
    return this.authService.register(registerDto.username ,registerDto.email, registerDto.password, UserRole.ADMIN);
  }
}