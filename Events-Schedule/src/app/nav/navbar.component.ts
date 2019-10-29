import {Component} from '@angular/core';
import { AuthService } from '../events/login/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { Observable } from 'rxjs';

@Component({
    selector : 'nav-bar',
    templateUrl : "./navbar.component.html",
    styleUrls : ['./navbar.component.css']
})


export class NavbarComponent{

    searchTerm : string = ""
    foundSessions : ISession[]
    constructor(private authService : AuthService, private eventService : EventService){}

    searchSessions(searchTerm){
        this.eventService.searchSession(searchTerm).subscribe(arg => {
            this.foundSessions = arg
            console.log(this.foundSessions)
        });
        
    }
}