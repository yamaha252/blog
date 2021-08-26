import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AuthorState, AuthorStateModel } from './author.state';
import { AuthorAction } from './author.actions';

describe('Author store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthorState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: AuthorStateModel = {
      items: ['item-1']
    };
    store.dispatch(new AuthorAction('item-1'));
    const actual = store.selectSnapshot(AuthorState.getState);
    expect(actual).toEqual(expected);
  });

});
