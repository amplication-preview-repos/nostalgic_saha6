import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackTypeServiceBase } from "./base/feedbackType.service.base";

@Injectable()
export class FeedbackTypeService extends FeedbackTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
