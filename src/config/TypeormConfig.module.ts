import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";

const typeormConfigModule : TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "nest",
    entities: [User],
    synchronize: true,
} 

@Module({
    imports: [
        TypeOrmModule.forRoot({...typeormConfigModule}),
        TypeOrmModule.forFeature([User])
        ]
})
export class TypeOrmModuleMyOptions {

}