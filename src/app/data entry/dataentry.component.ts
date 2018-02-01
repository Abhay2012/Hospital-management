import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'data-entry',
    templateUrl : 'dataentry.component.html',
    styleUrls : ['dataentry.component.css']
})
export class DataEntryComponent{
    tab:number = 1;
    constructor(private router : Router){

    }

    dataEntered(entryForm){
        console.log(entryForm.value);
        for(let key of Object.keys(entryForm.value)){
            localStorage.setItem(key,entryForm.value[key]);
        }
        localStorage.setItem('roundWeight', (Math.round(entryForm.value.patientWeight)).toString());
        if(this.tab == 1){
            this.router.navigate(['emergency_drugs']);
        }else if(this.tab == 3){
            this.router.navigate(['fluids']);
        }

    }
}