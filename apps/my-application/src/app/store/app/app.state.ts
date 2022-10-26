import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { AppStateModel } from './app-state.model';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    name: 'MyApplication',
  },
})
@Injectable()
export class AppState {}
