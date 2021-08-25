import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ArticlesState, ArticlesStateModel } from './articles.state';
import { ArticlesAction } from './articles.actions';

describe('Articles store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ArticlesState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ArticlesStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ArticlesAction('item-1'));
    const actual = store.selectSnapshot(ArticlesState.getState);
    expect(actual).toEqual(expected);
  });

});
