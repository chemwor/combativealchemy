import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  TemplateRef,
  inject,
} from '@angular/core'
import { LogoBoxComponent } from '@components/logo-box/logo-box.component'
import { NgbCollapseModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { ThemeSwitcherComponent } from '@components/navigation-bars/components/theme-switcher/theme-switcher.component'
import { ThemeModeService } from '@core/services/theme-mode.service'
import { Subscription } from 'rxjs'
import { buyLink } from 'src/app/states/constants'

@Component({
  selector: 'yoga-studio-navigation',
  standalone: true,
  imports: [
    LogoBoxComponent,
    ThemeSwitcherComponent,
    NgbCollapseModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class YogaStudioNavigationComponent implements OnInit, OnDestroy {
  @Input() mode: 'light' | 'dark' = 'light'

  buyLink = buyLink
  isMenuCollapsed = true
  isSticky = false
  currentTheme: 'light' | 'dark' = 'light'

  private elementRef = inject(ElementRef)
  private renderer = inject(Renderer2)
  private offcanvasService = inject(NgbOffcanvas)
  private themeSubscription!: Subscription

  isOffcanvasOpen: boolean = false

  navigationItems = [
    { name: 'Home', link: '#home' },
    { name: 'Why Us', link: '#features' },
    { name: 'Classes', link: '#classes' },
    { name: 'Pricing', link: '#pricing' }
  ]

  constructor(private themeModeService: ThemeModeService) {
    // Subscribe to theme changes
    this.themeSubscription = this.themeModeService.isDarkMode$.subscribe(
      (isDark) => {
        this.currentTheme = isDark ? 'dark' : 'light'
        this.updateThemeAttribute()
      }
    )
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY;
      const navbar = this.elementRef.nativeElement.querySelector('#navbar');

      if (scrollPosition > 100) {
        this.renderer.addClass(navbar, 'navbar-stuck');
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
    // Set initial theme
    this.updateThemeAttribute();
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  private updateThemeAttribute(): void {
    const navbar = this.elementRef.nativeElement.querySelector('#navbar');
    if (navbar) {
      this.renderer.setAttribute(navbar, 'data-bs-theme', this.currentTheme);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY;
      const navbar = this.elementRef.nativeElement.querySelector('#navbar');

      if (scrollPosition > 100) {
        this.renderer.addClass(navbar, 'navbar-stuck');
        this.isSticky = true;
      } else {
        this.renderer.removeClass(navbar, 'navbar-stuck');
        this.isSticky = false;
      }
    }
  }

  /**
   * Open mobile offcanvas menu
   */
  openOffcanvas(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end', backdrop: false });
    this.isOffcanvasOpen = true;
  }

  /**
   * Close mobile offcanvas menu
   */
  closeOffcanvas() {
    this.offcanvasService.dismiss();
    this.isOffcanvasOpen = false;
  }

  /**
   * Toggle navbar
   */
  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    // This can be used for highlighting active navigation items
  }
}
