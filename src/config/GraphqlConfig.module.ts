import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

const GraphqlConfig: ApolloDriverConfig = {
    driver: ApolloDriver,
    playground: true,
    typePaths: ['./**/*.graphql'],
}

@Module({
    imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
        ...GraphqlConfig
    })]
})
export class GraphQLModuleMyOptions {

}