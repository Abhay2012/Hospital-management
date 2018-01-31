import { Component } from '@angular/core';

@Component({
    selector : 'patient_details',
    templateUrl : 'patient_details.component.html',
    styleUrls : [ 'patient_details.component.css' ]
})
export class PatientDetailsComponent{
    local;
    constructor(){
        this.local = localStorage;
    }
}