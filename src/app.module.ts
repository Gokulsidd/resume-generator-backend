import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'node:process'

@Module({
  imports: [FormModule,
    MongooseModule.forRoot('mongodb+srv://Gokul_Sidharth:PLVUQDFLESpixa46@cluster0.vtgu1hg.mongodb.net/')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
