import { NgModule } from '@angular/core';
import { ArrythmiasComponent } from './arrythmias.component';
import { RouterModule } from '@angular/router';
import { PatientDetailsModule } from '../../patient_details/patient_details.module';
import { ArrythmiasSharedModule } from "./arrythmias-shared.module"

@NgModule({
    imports : [ RouterModule.forChild([
        {
            path : '',
            component : ArrythmiasComponent
        }
    ]),
    PatientDetailsModule,
    ArrythmiasSharedModule
    ]
})
export class ArrythmiasModule{

}