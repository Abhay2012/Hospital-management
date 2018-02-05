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
        this.data['ETT'] = {
            size : (parseInt(this.local.patientAge)/4)+4,
            oral : (parseInt(this.local.patientAge)/2)+12,
            nasal : (parseInt(this.local.patientAge)/2)+15
        }
    }
}