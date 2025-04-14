import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}
bootstrap();

// await get(FraudService).processInvoice({ invoice_id: '1', account_id: '1', amount: 100 });
