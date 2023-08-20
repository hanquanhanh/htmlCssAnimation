import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WaterMelonComponent } from './water-melon/water-melon.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterMelonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'waterMelon', component: WaterMelonComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
