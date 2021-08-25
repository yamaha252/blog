import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDeleteDialogComponent } from './comment-delete-dialog.component';

describe('CommentRemoveDialogComponent', () => {
  let component: CommentDeleteDialogComponent;
  let fixture: ComponentFixture<CommentDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
