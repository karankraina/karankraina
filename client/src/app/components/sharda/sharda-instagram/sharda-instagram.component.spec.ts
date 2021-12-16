import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardaInstagramComponent } from './sharda-instagram.component';

describe('ShardaInstagramComponent', () => {
  let component: ShardaInstagramComponent;
  let fixture: ComponentFixture<ShardaInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShardaInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardaInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
