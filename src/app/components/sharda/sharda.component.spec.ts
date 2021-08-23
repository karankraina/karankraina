import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardaComponent } from './sharda.component';

describe('ShardaComponent', () => {
  let component: ShardaComponent;
  let fixture: ComponentFixture<ShardaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShardaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
