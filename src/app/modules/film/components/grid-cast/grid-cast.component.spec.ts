import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCastComponent } from './grid-cast.component';

describe('GridCastComponent', () => {
  let component: GridCastComponent;
  let fixture: ComponentFixture<GridCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
