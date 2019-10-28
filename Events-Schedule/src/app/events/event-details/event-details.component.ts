import { Component, OnChanges } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute} from '@angular/router';
import { IEvent } from '../shared/event.model';
import { ISession } from '../shared/event.model';

@Component({
    templateUrl : "./event-details.component.html",
    styleUrls : ["./event-details.component.css"]
})


export class EventDetailsComponent{

    event : IEvent  
    filterBy : string = 'all'
    visibleSession : ISession[] = []

    constructor(private eventService : EventService,private route : ActivatedRoute){}

    ngOnInit(){
        console.log("In onInit")
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
        console.log(this.event.sessions)
        if (this.event.sessions){
            this.filterByFunc(this.filterBy)
        }
    }

    filterByFunc(filter){
        if (filter === 'all'){
            this.visibleSession = this.event.sessions.slice(0)
        }
        else {
            this.visibleSession = this.event.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })
        }
    }
}