import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuguHomePageComponent } from './gugu-home-page.component';

describe('GuguHomePageComponent', () => {
  let component: GuguHomePageComponent;
  let fixture: ComponentFixture<GuguHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuguHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuguHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
