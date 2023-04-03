import { Injectable, NotFoundException } from '@nestjs/common';
import { RunType } from 'src/types/run.interface';
import { listRunHistory } from 'src/types/variables';
@Injectable()
export class RunsService {
  // Trả về danh sách run
  getListRuns() {
    return listRunHistory;
  }
  // Trả về run theo id
  getRun(id: number) {
    const run = listRunHistory.find((item) => item.id == id);
    if (!run) {
      throw new NotFoundException('Not found run with id = ' + id);
    }
    return run;
  }
  //Tạo run mới + trả về run vừa tạo
  createRun(time: number, description: string) {
    const nextId = listRunHistory.length + 1;
    const newRun: RunType = {
      id: nextId,
      timeRun: time,
      description: description,
    };
    listRunHistory.push(newRun);
    return newRun;
  }
  //xóa run theo id + trả về run vừa xóa
  deleteRun(id: number) {
    const runDelete = listRunHistory.find((run) => run.id == id);
    if (!runDelete) {
      throw new NotFoundException('Not found delete with id = ' + id);
    }
    listRunHistory.splice(id - 1, 1);
    return runDelete;
  }
  //cập nhật run + trả về run vừa cập nhật
  updateRun(id: number, dto: RunType) {
    const check = listRunHistory.find((run) => run.id == id);
    if (!check) {
      throw new NotFoundException('Not found update with id =' + id);
    }
    listRunHistory.forEach((run) => {
      if (run.id == id) {
        if (dto.timeRun) run.timeRun = dto.timeRun;
        if (dto.description) run.description = dto.description;
      }
    });
    const runUpdate = listRunHistory.find((run) => run.id == id);
    return runUpdate;
  }
}
