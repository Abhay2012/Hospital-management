import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

declare let html2canvas: any;
declare let jsPDF: any;
declare let $ : any;
@Component({
    selector: "print",
    templateUrl: "print.component.html",
    styleUrls : [ "print.component.css" ]
})
export class PrintComponent {

    constructor(private router: Router) {

    }

    ngAfterViewInit() {
        window.print();
        // html2canvas(document.body, {
        //     onrendered: (canvas) => {
        //         var img = canvas.toDataURL("image/png");
        //         var doc = new jsPDF({
        //             unit: 'px',
        //             format: 'a4'
        //         });
        //         doc.addHTML($(".print"), {pagesplit : true}, function () {
        //             doc.save("test.pdf");
        //         });
        //         doc.autoPrint();
        //         this.router.navigate(['emergency_drugs', 'resus_drugs']);
        //         // window.open(doc.output('bloburl'), '_self');
        //     }
        // })
                this.router.navigate(['emergency_drugs', 'resus_drugs']);
        
    }

}