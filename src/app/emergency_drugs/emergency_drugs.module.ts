import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { EmergencyDrugsComponent } from './emergency_drugs.component';
import { PatientDetailsModule } from '../patient_details/patient_details.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'resus_drugs',
                pathMatch: 'full'
            },
            {
                path: '',
                component: EmergencyDrugsComponent,
                children: [
                    {
                        path: 'resus_drugs',
                        loadChildren: 'app/emergency_drugs/resus_drugs/resus_drugs.module#ResusDrugsModule'
                    },
                    {
                        path: 'intubation',
                        loadChildren: 'app/emergency_drugs/intubation/intubation.module#IntubationModule'
                    },
                    {
                        path: 'infusion',
                        loadChildren: 'app/emergency_drugs/Infusion/infusion.module#InfusionModule'
                    },
                    {
                        path: 'arrythmias',
                        loadChildren: 'app/emergency_drugs/arrythmias/arrythmias.module#ArrythmiasModule'
                    },
                    {
                        path: 'print',
                        loadChildren: 'app/emergency_drugs/print/print.module#PrintModule'
                    }
                ]
            }
        ]),
        PatientDetailsModule
    ],
    declarations: [EmergencyDrugsComponent]
})
export class EmergencyDrugsModule {

}