import { Component, OnInit  } from "@angular/core";

@Component({
    selector : 'infusion',
    templateUrl : "infusion.component.html"
})
export class InfusionComponent implements OnInit{
    
    local;
    roundWt;
    data={};
    ngOnInit(){
        this.local = localStorage;
        this.roundWt = parseInt(localStorage.getItem('roundWeight'));
        this.data['Fentanyl'] = this.roundWt*0.125;
    }
}