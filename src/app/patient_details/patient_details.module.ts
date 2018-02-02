import { NgModule } from '@angular/core';
import { PatientDetailsComponent } from './patient_details.component'; 

@NgModule({
    declarations : [PatientDetailsComponent],
    exports : [PatientDetailsComponent]
})
export class PatientDetailsModule{

}