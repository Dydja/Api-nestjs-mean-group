import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentSchema } from './schemas/continent.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dydja_16:w79zbsihQHCCS5lL@cluster0.li9zjb4.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'continent', schema: ContinentSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
