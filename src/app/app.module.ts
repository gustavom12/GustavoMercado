import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { navbarrComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './components/main-component/app.component';
import { InfoComponent } from './components/portfolio/info/info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProgresscircleComponent } from './components/progresscircle/progresscircle.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    navbarrComponent,
    PortfolioComponent,
    FormComponent,
    InfoComponent,
    SkillsComponent,
    ConocimientosComponent,
    ProgresscircleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
