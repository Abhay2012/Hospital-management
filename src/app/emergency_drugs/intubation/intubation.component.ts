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
        this.data['Atropine'] = this.roundWt*0.02;
        this.data['Morphine'] = this.roundWt*0.1;
        this.data['Midazolam'] = this.roundWt*0.1;
        this.data['Fentanyl'] = this.roundWt*0.002;
        this.data['Ketamine'] = this.roundWt*2;
        this.data['Thiopentone'] = this.roundWt*2;
        this.data['Propofol'] = this.roundWt*2.5;
        this.data['Suxamethonium'] = this.roundWt*2;
        this.data['Atracurium'] = this.roundWt*0.5;
    }
}