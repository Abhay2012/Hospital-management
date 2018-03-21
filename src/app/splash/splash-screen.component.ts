import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'splash-screen',
    templateUrl : 'splash-screen.component.html',
    styles: [`
    img{
        width:25vw;
    }
    div[icon]{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        text-align:center;
        color: #ed1d24;
    }
    div[splash]{
        width:100vw;
        height:100vh;
        background:white;
    }
    `]
})
export class SplashScreenComponent{
    constructor(private router : Router){
        setTimeout(()=>{
            router.navigate(['data-entry'])
        },2000)
    }
}