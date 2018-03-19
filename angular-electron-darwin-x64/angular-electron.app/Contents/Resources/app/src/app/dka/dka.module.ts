import { NgModule } from '@angular/core';
import { DkaComponent } from './dka.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { PatientDetailsModule } from '../patient_details/patient_details.module';

@NgModule({
    imports : [
        CommonModule,
        PatientDetailsModule,
        RouterModule.forChild([
            {
                path : '',
                component : DkaComponent
            }
        ])
    ],
    declarations : [DkaComponent]
})
export class DkaModule{

}