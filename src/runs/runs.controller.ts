import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RunsService } from './runs.service';
import { RunType } from 'src/types/run.interface';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}
  @Get()
  getAllRuns(): RunType[] {
    return this.runsService.getListRuns();
  }
  @Get(':id')
  getRun(@Param('id') id: number): RunType {
    return this.runsService.getRun(id);
  }
  @Post()
  createRun(
    @Body('time') time: number,
    @Body('description') description: string,
  ) {
    return this.runsService.createRun(time, description);
  }

  @Delete(':id')
  deleteRun(@Param('id') id: number) {
    return this.runsService.deleteRun(id);
  }

  @Patch(':id')
  updateRun(@Param('id') id: number, run: RunType) {
    return this.runsService.updateRun(id, run);
  }
}
