import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  mobileOpen = false;
  isMobile = false;

  ngOnInit() {
    this.checkMobile();
  }

  @HostListener('window:resize')
  checkMobile() {
    this.isMobile = window.innerWidth < 980;
    if (!this.isMobile) this.mobileOpen = false;
  }

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMenu() {
    this.mobileOpen = false;
  }
}
