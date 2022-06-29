import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // create name
  public inFname:string = '';
  public inLname:string = '';
  public inEmail: string = '';
  public phoneNumber:string = "";
  public inSelary:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addInfo(){
    const userInfo = {
      firstName: this.inFname,
      lastName: this.inLname,
      email: this.inEmail,
      phoneNumber: this.phoneNumber,
      selary: this.inSelary
    }
    console.log(userInfo);
  }

}
