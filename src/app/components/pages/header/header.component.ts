import { Component, OnInit } from '@angular/core';
import { IUserCreate } from 'src/app/interfaces/Auth.interface';
import { UsersformService } from 'src/app/services/usersform.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // create name

  public name:string = '';
  public email: string = '';
  public inIssue:string = "";
  public message:string = "";

  public AllUserInfo:IUserCreate[] = [];

  constructor(
    private UserService: UsersformService,
  ) { }

  ngOnInit(): void {
  }

  addInfo(){
    const message: IUserCreate = {
      uuid: 'e4179c6c-5776-49d8-892f-4c8ec048e9d3',
      name: this.name,
      email: this.email,
      issue: this.inIssue,
      message: this.message
    }

    this.UserService.postMessage(message)
    .subscribe({
      next: (data) =>{
        console.log(data);
        this.AllUserInfo.push(data)
      },
      error:(error) =>{
        console.log(error);
      }
    })

  }

}
