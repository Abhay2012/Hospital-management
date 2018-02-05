import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResusDrugsComponent } from './resus_drugs.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [ 
        CommonModule,
        RouterModule.forChild([
            {
                path : '',
                component : ResusDrugsComponent
            }
        ])
    ],
    declarations : [ResusDrugsComponent]
})
export class ResusDrugsModule{

}