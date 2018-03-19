import { NgModule } from "@angular/core";
import { RouterModule} from "@angular/router";
import { InfusionComponent } from "./infusion.component";
import { InfusionSharedModule } from './infusion-shared.module'

@NgModule({
    imports : [
        InfusionSharedModule,
        RouterModule.forChild([
            {
                path : '',
                component : InfusionComponent
            }
        ])
    ]
})
export class InfusionModule{

}