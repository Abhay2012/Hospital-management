import { NgModule } from '@angular/core';
import { FluidsComponent } from './fluids.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { PatientDetailsComponent } from '../patient_details/patient_details.component';

@NgModule({
    imports : [ CommonModule,
        RouterModule.forChild([
        {
            path : '',
            component : FluidsComponent
        }
    ]) ],
    declarations : [ FluidsComponent, PatientDetailsComponent ]
})
export class FluidsModule{

}