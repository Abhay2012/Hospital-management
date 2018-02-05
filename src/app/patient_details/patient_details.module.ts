import { NgModule } from '@angular/core';
import { PatientDetailsComponent } from './patient_details.component'; 
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [CommonModule],
    declarations : [PatientDetailsComponent],
    exports : [PatientDetailsComponent]
})
export class PatientDetailsModule{

}