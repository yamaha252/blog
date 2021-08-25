import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ArticleState, ArticleStateModel } from './article.state';
import { ArticleAction } from './article.actions';

describe('Article store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ArticleState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ArticleStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ArticleAction('item-1'));
    const actual = store.selectSnapshot(ArticleState.getState);
    expect(actual).toEqual(expected);
  });

});
