import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeormConfigModule : TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "nest",
    entities: [],
    synchronize: true,
} 

@Module({
    imports: [
        TypeOrmModule.forRoot({...typeormConfigModule}),
        TypeOrmModule.forFeature([])
        ]
})
export class TypeOrmModuleMyOptions {

}