import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  
  imports: [MongooseModule.forRoot('mongodb+srv://mongodb:mongodb@cluster0.k4aq2.mongodb.net/shopping-cart?retryWrites=true&w=majority'),ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
