import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'intubation',
    templateUrl : 'intubation.component.html'
})
export class IntubationComponent implements OnInit{
    
    local;
    roundWt;
    data={};
    ngOnInit(){
        this.local = localStorage;
        this.roundWt = parseInt(localStorage.getItem('roundWeight'));
        this.data['Atropine'] = this.roundWt*0.02 < 0.1 ? 0.1 : ( this.roundWt*0.02 <= 0.6 ? this.roundWt*0.02 : 0.06 );
        this.data['Morphine'] = this.roundWt*0.1 < 10 ? this.roundWt*0.1 : 10;
        this.data['Midazolam'] = this.roundWt*0.1;
        this.data['Fentanyl'] = this.roundWt*0.002;
        this.data['Ketamine'] = this.roundWt*2;
        this.data['Thiopentone'] = this.roundWt*2 < 250 ? this.roundWt*2 : 250;
        this.data['Propofol'] = this.roundWt*2.5;
        this.data['Suxamethonium'] = this.roundWt*2 < 101 ? this.roundWt*2 : 100 ;
        this.data['Atracurium'] = this.roundWt*0.5;
        this.data['ETT'] = {
            size : (parseInt(this.local.patientAge)/4)+4,
            oral : (parseInt(this.local.patientAge)/2)+12,
            nasal : (parseInt(this.local.patientAge)/2)+15
        }
    }
}