import { Module } from '@nestjs/common';
import { QuoteModule } from './quotes/quotes.module';

@Module({
  imports: [QuoteModule],
})
export class AppModule {}
