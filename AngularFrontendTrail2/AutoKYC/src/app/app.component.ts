import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {

  UserData=[{First_name:'test'}]
  // First_name=models.CharField(max_length=60)
  // Last_name=models.CharField(max_length=60)
  // Address=models.CharField(max_length=60)
  // Aadhaar_Number=models.CharField(max_length=12)

  constructor(private api : ApiService){
    // this.getUserData();
  }

  getUserData = () =>{
    this.api.getAllUserData().subscribe(
      data=>{
        this.UserData=data;
        console.log("fetching");
      },
      error=>{
        console.log(error);
      }
    )
  }
}
