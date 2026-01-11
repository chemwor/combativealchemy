import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BackToTopComponent } from '@components/back-to-top/back-to-top.component'
import { PreloaderComponent } from '@components/preloader/preloader.component'
import { TitleService } from '@core/services/title.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PreloaderComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.init()
  }
}
