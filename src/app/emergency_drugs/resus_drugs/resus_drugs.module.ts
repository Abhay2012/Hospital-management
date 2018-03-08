import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResusDrugsComponent } from './resus_drugs.component';
import { ResusDrugsSharedModule } from './resus_drugs-shared.module'

@NgModule({
    imports : [ 
        ResusDrugsSharedModule,
        RouterModule.forChild([
            {
                path : '',
                component : ResusDrugsComponent
            }
        ])
    ]
})
export class ResusDrugsModule{

}