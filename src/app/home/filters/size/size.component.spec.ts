import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeComponent } from './size.component';

describe('SizeComponent', () => {
  let component: SizeComponent;
  let fixture: ComponentFixture<SizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
