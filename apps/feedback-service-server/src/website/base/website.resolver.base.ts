/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Website } from "./Website";
import { WebsiteCountArgs } from "./WebsiteCountArgs";
import { WebsiteFindManyArgs } from "./WebsiteFindManyArgs";
import { WebsiteFindUniqueArgs } from "./WebsiteFindUniqueArgs";
import { CreateWebsiteArgs } from "./CreateWebsiteArgs";
import { UpdateWebsiteArgs } from "./UpdateWebsiteArgs";
import { DeleteWebsiteArgs } from "./DeleteWebsiteArgs";
import { FeedbackFindManyArgs } from "../../feedback/base/FeedbackFindManyArgs";
import { Feedback } from "../../feedback/base/Feedback";
import { User } from "../../user/base/User";
import { WebsiteService } from "../website.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Website)
export class WebsiteResolverBase {
  constructor(
    protected readonly service: WebsiteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Website",
    action: "read",
    possession: "any",
  })
  async _websitesMeta(
    @graphql.Args() args: WebsiteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Website])
  @nestAccessControl.UseRoles({
    resource: "Website",
    action: "read",
    possession: "any",
  })
  async websites(
    @graphql.Args() args: WebsiteFindManyArgs
  ): Promise<Website[]> {
    return this.service.websites(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Website, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Website",
    action: "read",
    possession: "own",
  })
  async website(
    @graphql.Args() args: WebsiteFindUniqueArgs
  ): Promise<Website | null> {
    const result = await this.service.website(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Website)
  @nestAccessControl.UseRoles({
    resource: "Website",
    action: "create",
    possession: "any",
  })
  async createWebsite(
    @graphql.Args() args: CreateWebsiteArgs
  ): Promise<Website> {
    return await this.service.createWebsite({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Website)
  @nestAccessControl.UseRoles({
    resource: "Website",
    action: "update",
    possession: "any",
  })
  async updateWebsite(
    @graphql.Args() args: UpdateWebsiteArgs
  ): Promise<Website | null> {
    try {
      return await this.service.updateWebsite({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Website)
  @nestAccessControl.UseRoles({
    resource: "Website",
    action: "delete",
    possession: "any",
  })
  async deleteWebsite(
    @graphql.Args() args: DeleteWebsiteArgs
  ): Promise<Website | null> {
    try {
      return await this.service.deleteWebsite(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Feedback], { name: "feedbacks" })
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async findFeedbacks(
    @graphql.Parent() parent: Website,
    @graphql.Args() args: FeedbackFindManyArgs
  ): Promise<Feedback[]> {
    const results = await this.service.findFeedbacks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Website): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}