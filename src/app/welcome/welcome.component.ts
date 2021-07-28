import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Registration } from '../registration';
import { GroupService } from '../group.service';
import { GroupType } from '../group-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  @Input() registration!: Registration;
  @Output() startPressed: EventEmitter<boolean> =   new EventEmitter();
  constructor(private groupService: GroupService) {
    
  }
  groups:GroupType[]=[];
  ngOnInit(): void {
   
    this.loadGroupTypes();
  }

  loadGroupTypes()
  {
    this.groupService.getGroups().subscribe(x => this.groups = x);
  }

  start(){
    let invalid:string = '';
    if (this.registration.teamType === null || this.registration.teamType === undefined)
      invalid += 'Group type required\n';
    if(!this.registration.numPlayers)
      invalid += 'Number of players required\n';
    if (!this.registration.teamName)
      invalid += 'Team Name required\n';

    if(invalid)
      alert(invalid);
    else
      this.startPressed.emit(true);
  }

}
