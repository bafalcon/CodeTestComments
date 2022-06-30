import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontierCommentComponent } from './frontier-comment.component';

describe('FrontierCommentComponent', () => {
  let component: FrontierCommentComponent;
  let fixture: ComponentFixture<FrontierCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontierCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontierCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
