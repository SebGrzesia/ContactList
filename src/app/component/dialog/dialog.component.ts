import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  contactForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private api : ApiService){}

  ngOnInit(): void{
    this.contactForm = this.formBuilder.group({
      contactName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      category: ['',Validators.required],
      dateOfBirth: ['',Validators.required],
      phoneNumber: ['',Validators.required]
    })
  }

  addContact(){
    if(this.contactForm.valid){
      this.api.postContact(this.contactForm.value).subscribe({
        next:(res)=>{
        alert("Contact added succesfully")
      },
      error:()=>{
        alert("Error while adding a contact")
      }
      })
    }
  }
}
