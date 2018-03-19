import { NgModule } from '@angular/core';
import { FluidsComponent } from './fluids.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { PatientDetailsModule } from '../patient_details/patient_details.module';

@NgModule({
    imports : [ CommonModule,
        PatientDetailsModule,
        RouterModule.forChild([
        {
            path : '',
            component : FluidsComponent
        }
    ]) ],
    declarations : [ FluidsComponent ]
})
export class FluidsModule{

}