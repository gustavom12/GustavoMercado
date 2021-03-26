import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { SwiperModule } from 'swiper/angular';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { navbarrComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './components/main-component/app.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProgresscircleComponent } from './components/progresscircle/progresscircle.component';
import { LatestComponent } from './components/portfolio/latest/latest.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    navbarrComponent,
    PortfolioComponent,
    FormComponent,
    ConocimientosComponent,
    ProgresscircleComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
