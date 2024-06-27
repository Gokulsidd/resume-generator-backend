import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from './user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, userPassword: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(userPassword, user.password);
    
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const { password, ...result } = user.toObject();
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return {
      userName: user.username,
      userEmail: user.email,
      userRole: user.role,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(username: string ,email: string, password: string, role: UserRole = UserRole.USER) {
    const existingUser = await this.userModel.findOne({ email });
    console.log('created1')
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('created2')
    const newUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    return this.login(newUser);
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec()
  }
}