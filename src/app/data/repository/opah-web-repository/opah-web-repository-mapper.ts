import { Mapper } from '../../../core/utils/bases/mapper';
import { OpahWebEntity } from './opah-web-entity';
import { OpahModel } from 'src/app/core/models/opah.model';

export class OpahWebRepositoryMapper extends Mapper<OpahWebEntity, OpahModel> {
  mapFrom(param: OpahWebEntity): OpahModel {
    return {
      calculatedValue: param.calculatedValue,
    };
  }

  mapTo(param: OpahModel): OpahWebEntity {
    return {
      calculatedValue: param.calculatedValue,
    };
  }
}
