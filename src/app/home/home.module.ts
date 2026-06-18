import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaBandComponent } from './components/cta-band/cta-band.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BenefitsComponent,
    HowItWorksComponent,
    RecipesComponent,
    PricingComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaBandComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
