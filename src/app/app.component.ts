import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators, MaxLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Validation';
nameForm
register = []


constructor(public formBuilder: FormBuilder){
this.nameForm = formBuilder.group({
  name : ["", Validators.required],
  surname : ["", Validators.required],
  age : ["", Validators.required],
  email : ["", [Validators.required, Validators.email]],
  cellnumber : ["", Validators.required]
})
}

adduser(){
  this.register.push({
    myname: this.nameForm.value.name, 
    mysurname: this.nameForm.value.surname, 
    myage: this.nameForm.value.age,
    myemail: this.nameForm.value.email, 
    mynumber: this.nameForm.value.cellnumber})

}

}
