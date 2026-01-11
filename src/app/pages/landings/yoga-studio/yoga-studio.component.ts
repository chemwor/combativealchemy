import { Component } from '@angular/core'
import { YogaStudioNavigationComponent } from './components/navigation/navigation.component'
import { HeroComponent } from './components/hero/hero.component'
import { FeturesComponent } from './components/fetures/fetures.component'
import { ClassesComponent } from './components/classes/classes.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'landings-yoga-studio',
  standalone: true,
  imports: [
    YogaStudioNavigationComponent,
    HeroComponent,
    FeturesComponent,
    ClassesComponent,
    PricingComponent,
    FooterComponent,
  ],
  templateUrl: './yoga-studio.component.html',
  styles: ``,
})
export class YogaStudioComponent {}
