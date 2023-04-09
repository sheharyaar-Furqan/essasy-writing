import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from "./header";
import { FooterComponent} from './footer'
import { FeaturesComponent } from "./features";
import { ServicesComponent } from "./services";


const routes: Routes = [
  {
    path : '' ,
    pathMatch : 'full',
    redirectTo :'home'

  },
  {
    path : 'home',
    component : HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routedComponents = [
  HeaderComponent,
  FooterComponent,
  FeaturesComponent,
  ServicesComponent
];
