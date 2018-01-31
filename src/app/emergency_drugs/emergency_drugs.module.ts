import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { EmergencyDrugsComponent } from './emergency_drugs.component';
import { PatientDetailsComponent } from '../patient_details/patient_details.component';

@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : '',
                redirectTo : 'resus_drugs',
                pathMatch : 'full'
            },
            {
                path : '',
                component : EmergencyDrugsComponent,
                children : [
                    {
                        path : 'resus_drugs',
                        loadChildren : 'app/emergency_drugs/resus_drugs/resus_drugs.module#ResusDrugsModule'
                    },
                    {
                        path : 'intubation',
                        loadChildren : 'app/emergency_drugs/intubation/intubation.module#IntubationModule'
                    },
                    {
                        path : 'infusion',
                        loadChildren : 'app/emergency_drugs/Infusion/infusion.module#InfusionModule'
                    }
                ]
            }
        ])
    ],
    declarations : [EmergencyDrugsComponent, PatientDetailsComponent]
})
export class EmergencyDrugsModule{

}