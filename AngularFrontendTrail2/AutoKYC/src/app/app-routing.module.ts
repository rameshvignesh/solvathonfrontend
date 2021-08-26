import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { UploaddetailsComponent } from './uploaddetails/uploaddetails.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'uploaddetails',component:UploaddetailsComponent},
{path:'status',component:StatusComponent},
{path:'register',component:RegisterComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
