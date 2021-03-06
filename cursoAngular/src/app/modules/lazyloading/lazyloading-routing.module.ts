import { HomelazyComponent } from './../../componentes/homelazy/homelazy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './../../componentes/header/header.component';
import { FooterComponent } from './../../componentes/footer/footer.component';

const routes: Routes = [

  { path: '',
    component: HomelazyComponent
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
