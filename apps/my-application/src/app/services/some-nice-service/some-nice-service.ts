import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

@Injectable()
export class SomeNiceService {
  constructor(private store: Store) {}
}
