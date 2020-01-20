import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home" , component: HomeComponent },
  { path: "ourteam" , component: OurteamComponent},
  { path: "gallery" , component: GalleryComponent },
  { path: "contact" , component: ContactComponent },
  { path: "service" , component: ServiceComponent },
  { path: "login" , component: LoginComponent },
  { path: "signup" , component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
