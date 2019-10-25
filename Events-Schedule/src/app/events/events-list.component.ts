import {Component} from '@angular/core';

@Component({
    selector : 'events-list',
    templateUrl : './events-list.component.html',
    styleUrls : ['./events-list.component.css']
})

export class EventsListComponent{
    events = {
        id : 1,
        name : "Athens Conference",
        date : "20/07/2019",
        price : 199.45,
        location : {
            city : "Athens",
            country : "Greece"
        } 
    }

}