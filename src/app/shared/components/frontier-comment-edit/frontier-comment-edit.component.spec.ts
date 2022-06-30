import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontierCommentEditComponent } from './frontier-comment-edit.component';

describe('FrontierCommentEditComponent', () => {
  let component: FrontierCommentEditComponent;
  let fixture: ComponentFixture<FrontierCommentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontierCommentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontierCommentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
