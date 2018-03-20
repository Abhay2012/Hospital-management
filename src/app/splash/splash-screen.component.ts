import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'splash-screen',
    templateUrl : 'splash-screen.component.html'
})
export class SplashScreenComponent{
    constructor(private router : Router){
        setTimeout(()=>{
            router.navigate(['data-entry'])
        },2000)
    }
}