import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuguAboutPageComponent } from './gugu-about-page.component';

describe('GuguAboutPageComponent', () => {
  let component: GuguAboutPageComponent;
  let fixture: ComponentFixture<GuguAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuguAboutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuguAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
