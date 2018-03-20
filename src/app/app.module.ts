import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SplashScreenComponent } from "./splash/splash-screen.component";

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : '',
        component : SplashScreenComponent
      },
      {
        path : 'data-entry',
        loadChildren : 'app/data entry/dataentry.module#DataEntryModule',
      },
      {
        path : 'emergency_drugs',
        loadChildren : 'app/emergency_drugs/emergency_drugs.module#EmergencyDrugsModule',
      },
      {
        path : 'fluids',
        loadChildren : 'app/fluids/fluids.module#FluidsModule',
      },
      {
        path : 'dka',
        loadChildren : 'app/dka/dka.module#DkaModule',
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
