import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  spinOn = false;
  sendMessage = false;

  async sendMail() {
    let name = this.name.nativeElement;
    let email = this.email.nativeElement;
    let message = this.message.nativeElement;
    let button = this.button.nativeElement;
    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    button.disabled = true;

    this.spinOn = true;

    let fd = new FormData();
    fd.append('name', name.value);
    fd.append('email', email.value);
    fd.append('message', message.value);

    //send
    await fetch('https://dennisgeorgertel.com/send_mail/send_mail.php', {
      method: 'post',
      body: fd,
    });

    setTimeout(() => {
      this.spinOn = false;
      //Text anzeigen Nachricht gesendet
      name.disabled = false;
      email.disabled = false;
      message.disabled = false;
      button.disabled = false;
      name.value = '';
      email.value = '';
      message.value = '';
      button.value = '';

      this.sendMessage = true;
      setTimeout(() => {
        this.sendMessage = false;
      }, 5000);
    }, 1000);
  }
}
