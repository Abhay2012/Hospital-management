import { NgModule } from '@angular/core';
import { IntubationComponent } from './intubation.component';
import { RouterModule } from '@angular/router';
import { IntubationSharedModule } from './intubation-shared.module'

@NgModule({
    imports : [
        IntubationSharedModule,
        RouterModule.forChild([
            {
                path : '',
                component : IntubationComponent
            }
        ])
    ]
})
export class IntubationModule{

}