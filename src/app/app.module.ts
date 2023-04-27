import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDirective } from './common/show.directive';
import { ThinhLongComponent } from './components/thinh-long/thinh-long.component';
import { HaNoiComponent } from './components/ha-noi/ha-noi.component';
import { HttpClientModule } from '@angular/common/http';
import { TabBoostrapComponent } from './components/tabs/tab-boostrap.component';
import { TabGeneralComponent } from './components/tabs/tab-general.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDirective,
    ThinhLongComponent,
    HaNoiComponent,
    TabBoostrapComponent,
    TabGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
