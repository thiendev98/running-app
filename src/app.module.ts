import { Module } from '@nestjs/common';
import { RunsModule } from './runs/runs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RunsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
