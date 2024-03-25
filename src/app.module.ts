import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModuleMyOptions } from './config/GraphqlConfig.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModuleMyOptions, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
