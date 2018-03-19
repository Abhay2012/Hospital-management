import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataEntryComponent } from './dataentry.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [DataEntryComponent],
    imports : [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
           {
                path : '',
                component : DataEntryComponent
            }  
        ])
    ]
})
export class DataEntryModule{

}