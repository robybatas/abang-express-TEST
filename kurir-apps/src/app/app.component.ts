import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kurir-apps';
  isVisible = false;

  ngOnInit(): void {
    this.showSplash()
  }

  showSplash() {
    setTimeout(() => {
      this.isVisible = true;
    }, 300);
    setTimeout(() => {
      this.isVisible = false;
    }, 1500);
  }
}
