import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserRole } from 'src/auth/user.schema';
import { Roles } from 'src/auth/roles.decorator';

@Controller('form')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
     return {
      data: this.formService.create(createFormDto),
      message: 'Submitted Successfully !',
     }
  }

  @Get()
  @Roles(UserRole.ADMIN)
  findAll() {
    return this.formService.findAll();
  }
  
  @Get('email/:email')
  @Roles(UserRole.ADMIN, UserRole.USER)
  findOneByEmail(@Param('email') email: string) {
    return this.formService.findOneByEmail(email);
  }



  @Get('id/:id')
  @Roles(UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.formService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formService.update(id, updateFormDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.formService.remove(id);
  }
}
