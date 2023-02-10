import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpahWebRepositoryMapper as OpahWebRepositoryMapper } from './opah-web-repository-mapper';
import { OpahWebEntity } from './opah-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { OpahRepository } from 'src/app/core/repositories/opah.repository';
import { OpahModel } from 'src/app/core/models/opah.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class OpahWebRepository extends OpahRepository {
  mapper = new OpahWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  calculateOpahUsecase(value: number): Observable<SingleResultModel<OpahModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<OpahWebEntity>>(`${environment.OPAH}opah`, value.toString())
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }
}
