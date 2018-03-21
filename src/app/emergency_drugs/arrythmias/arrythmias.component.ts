import { Component, OnInit } from '@angular/core';

declare let flowchart: any;
@Component({
    selector: 'arrythmias',
    templateUrl: 'arrythmias.component.html',
    styles: [`
        .sheet{
            margin-right:3px;
        }
    `]
})
export class ArrythmiasComponent implements OnInit {
    text = 'Working';
    local;
    data={};
    config = {
        'x': 0,
        // 'y': 50,
        'line-width': 2,
        'line-length': 8,
        'text-margin': 10,
        'font-size': 14,
        'font': 'normal',
        'font-family': 'Helvetica',
        'font-weight': 'normal',
        'font-color': 'black',
        'line-color': 'black',
        'element-color': 'black',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block',
        'symbols': {
            'start': {
                'font-color': 'red',
                'element-color': 'green',
                'fill': 'yellow'
            },
            'end': {
                'class': 'end-element'
            },
            'inputoutput' : {
                'element-color': 'transparent',
                'fill' : 'white'
            }
        },
        'flowstate': {
            'past': {
                'fill': '#CCCCCC',
                'font-size': 12
            },
            'current': {
                'element-color': 'transparent',
                'fill': '#ffffff',
                'font-color': 'black',
            },
            'future': {
                'fill': '#FFFF99'
            },
            'request': {
                'fill': 'blue'
            },
            'invalid': {
                'fill': '#444444'
            },
            'approved': {
                'fill': '#58C4A3',
                'font-size': 12,
                'yes-text': 'APPROVED',
                'no-text': 'n/a'
            },
            'rejected': {
                'fill': '#C45879',
                'font-size': 12,
                'yes-text': 'n/a',
                'no-text': 'REJECTED'
            }
        }
    }

    ngOnInit() {
        this.local = localStorage;
        this.data['dcshock'] = parseInt(this.local.roundWeight)*4;
        this.data['syndcshock0.5'] = parseInt(this.local.roundWeight)*0.5;
        this.data['syndcshock1'] = parseInt(this.local.roundWeight)*1;
        this.data['syndcshock2'] = parseInt(this.local.roundWeight)*2;
        this.data['epinephrine'] = parseInt(this.local.roundWeight)*0.01;
        this.data['adenosine100'] = parseInt(this.local.roundWeight)*0.1<3 ? (parseInt(this.local.roundWeight)*0.1).toFixed(2) : 3;
        this.data['adenosine200'] = parseInt(this.local.roundWeight)*0.1<6 ? (parseInt(this.local.roundWeight)*0.2).toFixed(2) : 6;
        this.data['doseToGiven'] = {
            epinephrine : parseInt(this.local.roundWeight)*10,
            amiodarone : parseInt(this.local.roundWeight)*5 < 301 ? 5*parseInt(this.local.roundWeight) : 300
        }
        
        
        let content = `st=>operation: DC SHOCK 4 J/KG\n${this.data['dcshock']}  Estimated Joules|past\n\
                op1=>operation: 2 min CPR\n Check Monitor|current\n\
        op2=>operation: DC SHOCK 4 J/KG\n${this.data['dcshock']}  Estimated Joules|past\n\
        op3=>operation: 2 min CPR\n Check Monitor |current\n\
        op4=>operation: Epinephrine then DC SHOCK 4 J/KG\n${this.data['dcshock']}  Estimated Joules|past\n\
        op5=>operation: 2 min CPR\n Check Monitor|current\n\
        op6=>operation: DC SHOCK 4 J/KG\n${this.data['dcshock']}  Estimated Joules|past\n\
        op7=>operation: 2 min CPR\n Check Monitor|current\n\
        op8=>operation: Epinephrine then DC SHOCK 4 J/KG\n${this.data['dcshock']}  Estimated Joules|past\n\
        op9=>operation: 2 min CPR\n Check Monitor|current\n\
        e=>operation: Amiodarone or Lidocaine then DC SHOCK 4 J KG \n Treat reversible causes|past\n\
        st->op1->op2->op3->op4->op5->op6->op7->e\n\
        e(left)->op4`;

        let chart = flowchart.parse(content);
        chart.drawSVG('canvas', this.config);
        this.config['x'] = 0;

        // Second Canvas

        let content1 = `st=>condition: Shock Present|past\n\
        op1=>operation: Vagal Manoeuvres|past\n\
        op10=>operation: Attempt Vagal Manoeuvres (no attempts)|current\n\
        cond=>condition: IV Access|past\n\
        op2=>operation: Adenosine ${this.data['adenosine100']}mg \n(100microgram/kg) |past\n\
        op3=>operation: Synchronous DC shock 0.5J/k\n ${this.data['syndcshock0.5']} Estimated Joules|past\n\
        op4=>operation: Adenosine ${this.data['adenosine200']}mg \n(200microgram/kg) |past\n\
        op5=>operation: Synchronous DC shock 1J/k \n${this.data['syndcshock1']} Estimated Joules|past/\n\
        op7=>operation: Synchronous DC shock 2J/k\n${this.data['syndcshock2']} Estimated Joules |past\n\
        op8=>operation: Do not exceed adenosine first\n\dose 6mg and maximum second \n dose 12mg\n Use rapid bolus technique |past\n\
        op9=>operation: consider using antiarrhythmics |past\n\
        e=>operation: CONSIDER \nSynchronous DC shock\n(see warning)\nPlease D/W Cardiology\n prior to using:-\n Verapamil Amiadarone\n flacainide propranolol\n Digoxin\n 051-1 J/kg, may increase to\n 2J/kg if initial shock in effective|past\n\
      st(no)->op1->op2->op4->op8->e\n\
      st(yes,right)->op10->cond\n\
      cond(yes)->op2\n\
      cond(no)->op3->op5->op7->op9->op7
      `;

      this.config['x'] = 5;
        let chart1 = flowchart.parse(content1);
        chart1.drawSVG('canvas1', this.config);


        // #3rd Canvas

         let content2 = `st=>operation: Asystole and PEA|past\n\
                op1=>operation: Ventilate with high O2 concentration|past\n\
        op2=>operation: continue CPR    Intubate IV/IO access|current\n\
        op3=>operation: Epinephrine  ${this.data['epinephrine']}\n10mcg/kg IV or IO |past\n\
        op4=>operation: Check monitor every two minutes|current\n\
        e=>operation: Four  minutes  CPR|past\n\
        st->op1->op2->op3->op4->e\n\
        e->op3
        `;
 
         let chart2 = flowchart.parse(content2);
         chart2.drawSVG('canvas2', this.config);
    }

}