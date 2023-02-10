import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { OpahModel } from '../../models/opah.model';
import { OpahRepository } from '../../repositories/opah.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateOpahUsecase implements UseCase<number, SingleResultModel<OpahModel>> {
  constructor(private opahRepository: OpahRepository) {}

  execute(value: number): Observable<SingleResultModel<OpahModel>> {
    return this.opahRepository.calculateOpahUsecase(value);
  }
}
