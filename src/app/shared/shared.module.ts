import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RevealDirective } from './reveal.directive';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, RevealDirective],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, RevealDirective]
})
export class SharedModule {}
