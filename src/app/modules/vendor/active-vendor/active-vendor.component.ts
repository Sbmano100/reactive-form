import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor() { }

  sampleForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    bio: new FormControl('',Validators.required),
    domain: new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }

  val!:any;
  onsubmit(){
    this.val=this.sampleForm.value;
  }
}
