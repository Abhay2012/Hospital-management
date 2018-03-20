import { NgModule } from "@angular/core";
import { ArrythmiasComponent } from "./arrythmias.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [ CommonModule],
    declarations : [ ArrythmiasComponent ],
    exports : [ ArrythmiasComponent ]
})
export class ArrythmiasSharedModule{
    
}