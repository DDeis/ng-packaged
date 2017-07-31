import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { serialize } from 'class-transformer';
import * as _ from 'lodash';

@Injectable()
export class BarService {

  get value(): Observable<string> {
    return Observable.of(true)
      .map((val) => `${val}`);
  }

  ctSerialize(foo) {
    return serialize(foo);
  }

  lodashIdentity(bar) {
    return _.identity(bar);
  }

}
