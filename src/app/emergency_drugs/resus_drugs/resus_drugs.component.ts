import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'resus_drugs',
    templateUrl : 'resus_drugs.component.html',
    styleUrls : ['resus_drugs.component.css']
})
export class ResusDrugsComponent implements OnInit{

    data : any = {};
    roundWt;
    local;
    ngOnInit(){
        this.local = localStorage;
        this.roundWt = parseInt(localStorage.getItem('roundWeight'));
        this.data['Epinephrine'] = this.roundWt*10;
        this.data['Adrenaline'] = this.roundWt*100;
        this.data['Sodium'] = this.roundWt*1;
        this.data['Calcium'] = this.roundWt*0.2;
        this.data['Chloride'] = this.roundWt*20;
        this.data['Albumin'] = this.roundWt*20;
        this.data['Adenosine'] = this.roundWt*0.1;
        this.data['Adenosine2nd'] = this.roundWt*0.2;
        this.data['Amiodarone'] = this.roundWt*5;
        this.data['Dextrose'] = this.roundWt*5;
    }
    
}