import { Component } from "@angular/core";
import * as jsPDF from 'jspdf';
declare let html2canvas: any;
// declare let jsPDF: any;
@Component({
  selector: 'emergency_drugs',
  templateUrl: 'emergency_drugs.component.html'
})
export class EmergencyDrugsComponent {
  print1() {
    html2canvas(document.body, {
      onrendered: function (canvas) {
        var img = canvas.toDataURL("image/png");
        var doc = new jsPDF({
          unit: 'px',
          format: 'a4'
        });
        doc.addImage(img, 'JPEG', 20, 20, 400, 550);
        doc.autoPrint();
        window.open(doc.output('bloburl'), '_self');
      }
    })
  }
  print() {
    window.print();
  }
}