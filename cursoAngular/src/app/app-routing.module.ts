import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [

  { path: '', component: NgIfForComponent},
  { path: 'lazy', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(m => m.LazyloadingModule)},

  { path: 'primeiro-componente', component: DataBindingComponent },
  { path: 'segundo-componente', component: SegundoComponenteComponent },
  { path: 'terceiro-componente', component: TerceiroComponenteComponent },
  { path: 'ng-if-for', component: NgIfForComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
