import { Module } from '@nestjs/common';
import { RunsModule } from './runs/runs.module';

@Module({
  imports: [RunsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
