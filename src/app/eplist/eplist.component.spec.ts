import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EplistComponent } from './eplist.component';

describe('EplistComponent', () => {
  let component: EplistComponent;
  let fixture: ComponentFixture<EplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
