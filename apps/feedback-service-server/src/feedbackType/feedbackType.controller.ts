import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeedbackTypeService } from "./feedbackType.service";
import { FeedbackTypeControllerBase } from "./base/feedbackType.controller.base";

@swagger.ApiTags("feedbackTypes")
@common.Controller("feedbackTypes")
export class FeedbackTypeController extends FeedbackTypeControllerBase {
  constructor(
    protected readonly service: FeedbackTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
