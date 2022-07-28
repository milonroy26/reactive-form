import { Component, OnInit } from '@angular/core';
import { UsersformService } from 'src/app/services/usersform.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public allUser:{uuid: string, name: string, email:string, issue:string, message:string}[] = [];
  // create name
  public inuuid:string = '';
  public inname:string = '';
  public inemail: string = '';
  public inissue:string = "";
  public inmessage:string = "";

  constructor(
    private UsersService: UsersformService,
  ) { }

  ngOnInit(): void {
  }

  postEmployeeDetils(){
    const userData ={
      uuid: this.inuuid,
      name: this.inname,
      email: this.inemail,
      issue: this.inissue,
      message: this.inmessage
    }
  
  }
  

}
