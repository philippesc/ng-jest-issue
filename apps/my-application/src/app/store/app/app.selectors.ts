import { Selector } from '@ngxs/store';
import { AppStateModel } from './app-state.model';
import { AppState } from './app.state';

export class AppSelectors {
  @Selector([AppState])
  static appName(state: AppStateModel): string {
    return state.name;
  }
}
