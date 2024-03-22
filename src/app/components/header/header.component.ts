import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 
  authService = inject(AuthService);
  isLoggedIn:boolean = false;
   

   ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res =>{
      this.isLoggedIn =this.authService.isLoggedIn();
    })
  }
   

   logout(){
    alert('Logged Out');
    localStorage.removeItem('user_id');
    this.authService.isLoggedIn$.next(false);
   }
   
}
