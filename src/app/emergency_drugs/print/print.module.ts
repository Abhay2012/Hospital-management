import { NgModule } from "@angular/core";
import { PrintComponent } from "./print.component";
import { RouterModule } from "@angular/router";
import { ArrythmiasSharedModule } from "../arrythmias/arrythmias-shared.module";
import { IntubationSharedModule } from "../intubation/intubation-shared.module";
import { InfusionSharedModule } from "../Infusion/infusion-shared.module";
import { ResusDrugsSharedModule } from "../resus_drugs/resus_drugs-shared.module";


@NgModule({
    imports : [ 
        ArrythmiasSharedModule,
        IntubationSharedModule,
        InfusionSharedModule,
        ResusDrugsSharedModule,
        RouterModule.forChild([
        {
            path : '',
            component : PrintComponent    
        }
    ]) ],
    declarations : [PrintComponent]
})
export class PrintModule{

}