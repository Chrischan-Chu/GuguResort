import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuguGalleryPageComponent } from './gugu-gallery-page.component';

describe('GuguGalleryPageComponent', () => {
  let component: GuguGalleryPageComponent;
  let fixture: ComponentFixture<GuguGalleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuguGalleryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuguGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
