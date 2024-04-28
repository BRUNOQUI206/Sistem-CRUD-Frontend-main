import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCostumersComponent } from './get-all-costumers.component';

describe('GetAllCostumersComponent', () => {
  let component: GetAllCostumersComponent;
  let fixture: ComponentFixture<GetAllCostumersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllCostumersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllCostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
