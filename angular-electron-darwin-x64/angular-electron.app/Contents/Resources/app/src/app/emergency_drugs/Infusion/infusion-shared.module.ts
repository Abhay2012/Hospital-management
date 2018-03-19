import { NgModule } from "@angular/core";
import { InfusionComponent } from "./infusion.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [CommonModule],
    declarations : [ InfusionComponent ],
    exports : [ InfusionComponent ]
})
export class InfusionSharedModule{
    
}