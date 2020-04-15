import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    body: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.contactForm.controls;
  }
  
  submit(){
    console.log(this.contactForm.value);
  }
  ngOnInit(){}
}
