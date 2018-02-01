import { Component } from "@angular/core";

@Component({
    selector : 'fluids',
    templateUrl : 'fluids.component.html'
})
export class FluidsComponent{
    local;
    roundWt;
    data={};
    mls = [0,0,0,0];
    totalMls = 0;
    weight;
    ngOnInit(){
        this.local = localStorage;
        this.roundWt = parseInt(localStorage.getItem('roundWeight'));
        this.weight = parseInt(localStorage.getItem('patientWeight'));
        this.mls[0] = this.roundWt<=10? this.roundWt*100 : 0;
        this.mls[1] = this.roundWt>10 && this.roundWt<=20 ? (this.roundWt-10)*50 + 1000 : 0;
        this.mls[2] = this.roundWt>20 && this.roundWt<=70 ? (this.roundWt)*20+1500 : 0;
        this.mls[3] = this.roundWt>70? 2500 : 0;
        for(let ml of this.mls){
            this.totalMls += ml;
        }
    }
}