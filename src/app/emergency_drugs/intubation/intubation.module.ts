import { NgModule } from '@angular/core';
import { IntubationComponent } from './intubation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : '',
                component : IntubationComponent
            }
        ])
    ],
    declarations : [IntubationComponent]
})
export class IntubationModule{

}