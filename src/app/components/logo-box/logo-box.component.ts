import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'component-logo-box',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logo-box.component.html',
  styles: [
    `:host{display:inline-block}
    /* Ensure the whole brand (including the "CA" text) is white by default */
    a.navbar-brand{display:inline-flex;align-items:center;color:#fff!important}
    /* Ensure the span with .text-primary displays inline-flex and its contents are vertically centered */
    a.navbar-brand .text-primary{display:inline-flex;align-items:center;color:#fff!important}
    /* Ensure the span with .text-white also displays inline-flex and is white */
    a.navbar-brand .text-white{display:inline-flex;align-items:center;color:#fff!important}
    /* Doubled the logo size from 35x32 -> 70x64 */
    a.navbar-brand .logo-img{width:70px!important;height:64px!important;max-width:none!important;display:inline-block;vertical-align:middle;object-fit:contain}`,
  ],
})

// Use LogoBoxComponent to replace Around's logo with your own Branding Logo in whole App
export class LogoBoxComponent {
  @Input() className?: string
}
