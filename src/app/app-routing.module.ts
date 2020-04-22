import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes for  NavBar
const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "gallery", component: GalleryComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
