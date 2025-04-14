import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { InvoicesService } from './invoices/invoices.service';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().uri().required(),
        SUSPICIOUS_VARIATION_PERCENTAGE: Joi.number(),
        INVOICES_HISTORY_COUNT: Joi.number(),
        SUSPICIOUS_INVOICES_COUNT: Joi.number(),
        SUSPICIOUS_TIMEFRAME_HOURS: Joi.number(),
      }),
    }),
    InvoicesModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [InvoicesService],
})
export class AppModule {}
