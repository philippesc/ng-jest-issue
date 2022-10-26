import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppSelectors } from '../../store/app/app.selectors';
import { AppState } from '../../store/app/app.state';
import { SomeNiceService } from './some-nice-service';

describe('SomeNiceService', () => {
  let service: SomeNiceService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])],
      providers: [SomeNiceService],
    });

    service = TestBed.inject(SomeNiceService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(store).toBeTruthy();

    const test = store.selectSnapshot(AppSelectors.appName);
    expect(test).toBe('MyApplication');
  });
});
