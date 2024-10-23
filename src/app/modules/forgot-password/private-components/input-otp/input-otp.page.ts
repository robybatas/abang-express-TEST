import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-input-otp',
  templateUrl: './input-otp.page.html',
  styleUrls: ['../../forgot-password.page.scss'],
})
export class InputOtpPage {
  otp: string[] = Array(6).fill('');
  otpDigits = Array(6).fill(0);
  timeLeft: number = 30;
  interval: any;
  isTimer: boolean = true;

  constructor(private navCtrl: NavController) { }

  ionViewDidEnter() {
    this.startTimer();
  }

  onInput(event: any, index: number) {
    const value = event.target.value;
    console.log(value, index)

    if (this.isOtpComplete()) {
      this.navigateToNextPage();
    }
  }

  isOtpComplete(): boolean {
    return this.otp.every((digit) => digit.length > 0);
  }

  navigateToNextPage() {
    this.navCtrl.navigateRoot('/forgot-password/new-password', { animated: true });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.isTimer = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 30;
    this.isTimer = true;
    this.startTimer();
  }

}
