import { Observable } from 'rxjs';
import { OpahModel } from '../models/opah.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class OpahRepository {
  abstract calculateOpahUsecase(value: number): Observable<SingleResultModel<OpahModel>>;
}
