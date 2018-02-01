import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : '',
        loadChildren : 'app/data entry/dataentry.module#DataEntryModule',
      },
      {
        path : 'emergency_drugs',
        loadChildren : 'app/emergency_drugs/emergency_drugs.module#EmergencyDrugsModule',
      },
      {
        path : 'fluids',
        loadChildren : 'app/fluids/fluids.module#FluidsModule',
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
