import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMarvelComponent } from './table-marvel.component';

describe('TableMarvelComponent', () => {
  let component: TableMarvelComponent;
  let fixture: ComponentFixture<TableMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
