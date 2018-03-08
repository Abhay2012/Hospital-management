import { NgModule } from "@angular/core";
import { ResusDrugsComponent } from "./resus_drugs.component";
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [CommonModule],
    declarations : [ ResusDrugsComponent ],
    exports : [ ResusDrugsComponent ]
})
export class ResusDrugsSharedModule{
    
}