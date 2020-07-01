import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';


import { HeaderComponent } from './component/header/header.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { SettingsComponent } from './component/settings/settings.component';
import { CommunityComponent } from './component/community/community.component';
import { PieComponent } from './component/charts/pie/pie.component';
import { DoughnutComponent } from './component/charts/doughnut/doughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    SettingsComponent,
    CommunityComponent,
    PieComponent,
    DoughnutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
