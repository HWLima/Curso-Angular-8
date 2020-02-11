import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    TerceiroComponenteComponent,
    NgIfForComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
