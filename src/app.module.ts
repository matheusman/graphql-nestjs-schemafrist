import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModuleMyOptions } from './config/TypeormConfig.module';
import { GraphQLModuleMyOptions } from './config/GraphqlConfig.module';

@Module({
  imports: [GraphQLModuleMyOptions ,TypeOrmModuleMyOptions  ,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
