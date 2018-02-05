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
        this.data['Epinephrine'] = this.roundWt*10 < 1001 ? this.roundWt*10 : 1000;
        this.data['Adrenaline'] = this.roundWt*100 > 5000 ? 5000 : this.roundWt*100 ;
        this.data['Sodium'] = this.roundWt*1 < 201 ? this.roundWt*1 : 200;
        this.data['Calcium'] = this.roundWt*0.2 > 10 ? 10 : this.roundWt*0.2;
        this.data['Chloride'] = this.roundWt*20 < 1001 ? this.roundWt*20 : 1000 ;
        this.data['Albumin'] = this.roundWt*20 < 1001 ? this.roundWt*20 : 1000;
        this.data['Adenosine'] = this.roundWt*0.1 < 6.1 ? this.roundWt*0.1 : 6 ;
        this.data['Adenosine2nd'] = this.roundWt*0.2 < 12.1 ? this.roundWt*0.2 : 12 ;
        this.data['Amiodarone'] = this.roundWt*5 < 301 ? this.roundWt*5 : 300 ;
        this.data['Dextrose'] = this.roundWt*5 < 501 ? this.roundWt*5 : 500;
    }


    
    
}