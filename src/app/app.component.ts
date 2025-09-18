import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { TrustedComponent } from './sections/trusted/trusted.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { SpecsComponent } from './sections/specs/specs.component';
import { HowtoComponent } from './sections/howto/howto.component';
import { CtaComponent } from './sections/cta/cta.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeroComponent,
        TrustedComponent,
        BenefitsComponent,
        SpecsComponent,
        HowtoComponent,
        CtaComponent,
        FooterComponent
    ],
    template: `
  <main>
    <app-hero></app-hero>
    <app-trusted></app-trusted>
    <app-benefits></app-benefits>
    <app-specs></app-specs>
    <app-howto></app-howto>
    <app-cta></app-cta>
    <app-footer></app-footer>
  </main>
  `,
})
export class AppComponent {}
