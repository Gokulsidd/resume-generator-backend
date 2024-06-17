import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import forFeatureDb from 'src/db/for-feature.db';

@Module({
  controllers: [FormController],
  providers: [FormService],
  imports: [MongooseModule.forFeature(forFeatureDb)],
  exports: [FormService]
})
export class FormModule {}
