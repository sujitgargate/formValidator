import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpRequestService } from '../services/user.service';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  log(x) { console.log(x); }

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private service: HttpRequestService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
       name: ['', Validators.required],
      // email: ['', Validators.required],
      // password: ['', Validators.required]
    })
  }

  get name() {
    return this.registerForm.get('name')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }

  createUser() {
    //console.log([this.registerForm]);
    this.service.createUser(this.registerForm.value).subscribe(res => {
      console.log(res);
    })
  }
}