import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRemoveDialogComponent } from './comment-remove-dialog.component';

describe('CommentRemoveDialogComponent', () => {
  let component: CommentRemoveDialogComponent;
  let fixture: ComponentFixture<CommentRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentRemoveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
