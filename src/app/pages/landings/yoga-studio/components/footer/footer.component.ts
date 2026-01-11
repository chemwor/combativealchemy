import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LogoBoxComponent } from '@components/logo-box/logo-box.component'
import { createdBy, developedByLink } from 'src/app/states/constants'

@Component({
  selector: 'yoga-studio-footer',
  standalone: true,
  imports: [RouterModule, LogoBoxComponent],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  author = createdBy
  developBy = developedByLink
  about = [
    { name: 'Home', link: '#home' },
    { name: 'Why Us', link: '#features' },
    { name: 'Classes', link: '#classes' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'Contact', link: 'https://app.acuityscheduling.com/schedule/54daf7b5' }
  ]
}
