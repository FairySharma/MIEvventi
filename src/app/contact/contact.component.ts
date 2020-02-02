import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  submitted = false;

  get FirstName(){
    return this.feedbackForm.get('FirstName');
  }
  

  get emails(){
    return this.feedbackForm.get('emails');
  }

  get message(){
    return this.feedbackForm.get('message');
  }

  constructor(private fb: FormBuilder, public router:Router) { }

  ngOnInit() {
    this.feedbackForm= this.fb.group({
      FirstName: ['', [Validators.required] ],
      
      emails: ['',[Validators.required , Validators.email]],
      message:['',[Validators.required , Validators.minLength(10) ,Validators.maxLength(150)]]
    })
    
  }

  onSubmit() {
    this.submitted = true;

    if (this.feedbackForm.invalid) {
      this.router.navigate(
      ['getintouch']);
      return;
      }else{
        sessionStorage.setItem('FirstName',this.feedbackForm.value.FirstName);
        
        sessionStorage.setItem('emails',this.feedbackForm.value.emails);
        sessionStorage.setItem('message',this.feedbackForm.value.message);
        localStorage.clear();
        
        alert("Thank you for your valuable feedback");

      }
      
}

}
