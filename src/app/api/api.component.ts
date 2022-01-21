import { Component  } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent  {
  public userList: any;
  public userLists : any ;
  searchstring : any;
  datas :any;
  element = "";


  constructor(private details:DetailsService)
  {
    this.details.getFiles().subscribe(data=>{
      this.userList= data;
      // console.log(data);
       this.userLists=this.userList.entries;
      // console.log(this.userList.entries,typeof data,"UserData" );
      

      
    })
  }

// apifilter(){
//   // this.datas = this.userList.entries.include(this.searchstring);
//   // console.log(this.datas);
  
// this.filteredUsers = [...this.userList.filter.includes(this.searchstring)];
// console.log(this.userList.filter);
// }

 
}
