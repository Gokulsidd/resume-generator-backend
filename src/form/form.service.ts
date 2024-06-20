import { Injectable, NotFoundException  } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Form, FormDocument } from './entities/form.entity';
import { Model } from 'mongoose';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form.name) private readonly formModel: Model<FormDocument>
  ){}

  async create(createFormDto: CreateFormDto): Promise<any> {
    const createdForm = new this.formModel(createFormDto);
    console.log(createdForm)
    return createdForm.save();
  }

  async findAll(): Promise<Form[]> {
    return this.formModel.find().exec();
  }

  async findOne(id: string): Promise<Form> {
    const form = await this.formModel.findById(id).exec();
    if (!form) {
      throw new NotFoundException(`Form with ID "${id}" not found`);
    }
    return form;
  }

  async update(id: string, updateFormDto: UpdateFormDto): Promise<Form> {
    const existingForm = await this.formModel.findByIdAndUpdate(id, updateFormDto, { new: true }).exec();
    if (!existingForm) {
      throw new NotFoundException(`Form with ID "${id}" not found`);
    }
    return existingForm;
  }

  async remove(id: string): Promise<void> {
    const result = await this.formModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Form with ID "${id}" not found`);
    }
  }
}
