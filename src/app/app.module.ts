import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WaterMelonComponent } from './water-melon/water-melon.component';
import { SuperSpinderComponent } from './super-spinder/super-spinder.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterMelonComponent,
    SuperSpinderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'waterMelon', component: WaterMelonComponent},
      {path: 'superSpinder', component: SuperSpinderComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
