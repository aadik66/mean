import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  authService = inject(AuthService);
  router = inject(Router);
  userArray: any[] = [];

  constructor(private http: HttpClient)
  {
    this.getAllUsers();
  }
  getAllUsers(){
    this.http.get('http://localhost:5000/api/user/getAll')
    .subscribe((resData: any) => {
      this.userArray = resData.data;
    })
  }

  userDelete(user: any){
    console.log('new id test', user);
    this.http.delete('http://localhost:5000/api/user/deleteUser'+ '/'+ user)
    .subscribe((resData: any) => {
      alert('Are You Sure to delete User');
      this.getAllUsers();
    })
  }

 // UserList = this.authService.getAllUsers();
  // getAll(){
  //   this.authService.getAllUsers()
  //   .subscribe({
  //     next: (UserList) =>{
  //       console.log(UserList);
  //       alert('List Success!');
  //       this.userArray = UserList.data;
        
  //     },
  //     error:(err) =>{
  //       console.log(err);
  //     }
  //   })
  // }
}