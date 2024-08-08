import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedbackTypeModuleBase } from "./base/feedbackType.module.base";
import { FeedbackTypeService } from "./feedbackType.service";
import { FeedbackTypeController } from "./feedbackType.controller";
import { FeedbackTypeResolver } from "./feedbackType.resolver";

@Module({
  imports: [FeedbackTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeedbackTypeController],
  providers: [FeedbackTypeService, FeedbackTypeResolver],
  exports: [FeedbackTypeService],
})
export class FeedbackTypeModule {}
