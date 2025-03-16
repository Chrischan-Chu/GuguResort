import { Routes } from '@angular/router';
import { GuguHomePageComponent } from './gugu-home-page/gugu-home-page.component';
import { GuguAboutPageComponent } from './gugu-about-page/gugu-about-page.component';
import { GuguGalleryPageComponent } from './gugu-gallery-page/gugu-gallery-page.component';
import { GuguContactPageComponent } from './gugu-contact-page/gugu-contact-page.component';

export const routes: Routes = [
    {path : '', component : GuguHomePageComponent},
    {path : 'about', component : GuguAboutPageComponent},
    {path : 'gallery', component : GuguGalleryPageComponent},
    {path : 'contact', component : GuguContactPageComponent}
];
