import { NgModule } from "@angular/core";
import { RouterModule} from "@angular/router";
import { InfusionComponent } from "./infusion.component";
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : '',
                component : InfusionComponent
            }
        ])
    ],
    declarations : [InfusionComponent]
})
export class InfusionModule{

}