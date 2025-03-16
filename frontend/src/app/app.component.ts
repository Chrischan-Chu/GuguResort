import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { GuguHomePageComponent } from './gugu-home-page/gugu-home-page.component';
import { GuguAboutPageComponent } from './gugu-about-page/gugu-about-page.component';
import { GuguGalleryPageComponent } from './gugu-gallery-page/gugu-gallery-page.component';
import { GuguContactPageComponent } from './gugu-contact-page/gugu-contact-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, GuguHomePageComponent, GuguAboutPageComponent, GuguGalleryPageComponent, GuguContactPageComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gugu-resort-website';
}
