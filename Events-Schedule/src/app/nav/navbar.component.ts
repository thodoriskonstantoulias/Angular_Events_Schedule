import {Component} from '@angular/core';
import { AuthService } from '../events/login/auth.service';

@Component({
    selector : 'nav-bar',
    templateUrl : "./navbar.component.html",
    styleUrls : ['./navbar.component.css']
})


export class NavbarComponent{
    constructor(private authService : AuthService){}
}