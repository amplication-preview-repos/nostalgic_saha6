import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FeedbackTypeResolverBase } from "./base/feedbackType.resolver.base";
import { FeedbackType } from "./base/FeedbackType";
import { FeedbackTypeService } from "./feedbackType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FeedbackType)
export class FeedbackTypeResolver extends FeedbackTypeResolverBase {
  constructor(
    protected readonly service: FeedbackTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
