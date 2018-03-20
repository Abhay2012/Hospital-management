import { Component, OnInit  } from "@angular/core";
declare var $ :any;
@Component({
    selector : 'infusion',
    templateUrl : "infusion.component.html"
})
export class InfusionComponent implements OnInit{
    
    local;
    roundWt;
    data={};

    currentTable:string;
    ngOnInit(){
        this.currentTable = 'opiates';
        $('a:first').tab('show')
        this.local = localStorage;
        this.roundWt = parseInt(localStorage.getItem('roundWeight'));
        this.data['Fentanyl'] = this.roundWt*0.125;
        this.data['ETT'] = {
            size : (parseInt(this.local.patientAge)/4)+4,
            oral : (parseInt(this.local.patientAge)/2)+12,
            nasal : (parseInt(this.local.patientAge)/2)+15
        }
    }
    showTable(a){
           this.currentTable = a; 
    }
}