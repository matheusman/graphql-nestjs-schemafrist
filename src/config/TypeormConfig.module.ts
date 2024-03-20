import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeormConfigModule : TypeOrmModuleOptions = {
    type: "postgres",
    host: "db",
    port: 5432,
    username: "root",
    password: "root",
    database: "nest",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
} 

@Module({
    imports: [TypeOrmModule.forRoot({...typeormConfigModule})]
})
export class TypeOrmModuleMyOptions {

}