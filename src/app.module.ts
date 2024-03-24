import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModuleMyOptions } from './config/TypeormConfig.module';
import { GraphQLModuleMyOptions } from './config/GraphqlConfig.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModuleMyOptions, 
    TypeOrmModuleMyOptions,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
