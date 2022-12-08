import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path:"About",component:AboutComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Team",component:TeamComponent},
  {path:"faq",component:FaqComponent},
  {path:"Service",component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
