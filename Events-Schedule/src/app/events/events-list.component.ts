import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';

@Component({
    templateUrl : './events-list.component.html',
    styleUrls : ['./events-list.component.css']
})

export class EventsListComponent implements OnInit{
    events :IEvent[]

    constructor(private eventService : EventService){
      
    }

    ngOnInit(){
      this.events = this.eventService.getEvents()
    }

}