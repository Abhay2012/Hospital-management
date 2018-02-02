import { NgModule } from '@angular/core';
import { ArrythmiasComponent } from './arrythmias.component';
import { RouterModule } from '@angular/router';
import { PatientDetailsModule } from '../../patient_details/patient_details.module';

@NgModule({
    imports : [ RouterModule.forChild([
        {
            path : '',
            component : ArrythmiasComponent
        }
    ]),
    PatientDetailsModule
    ],
    declarations : [ArrythmiasComponent]
})
export class ArrythmiasModule{

}