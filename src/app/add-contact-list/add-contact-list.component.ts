import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact-list',
  templateUrl: './add-contact-list.component.html',
  styleUrls: ['./add-contact-list.component.css']
})
export class AddContactListComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _route : Router
  ) { }

  public addContactForm: FormGroup;
  public all_data = [];
  
  ngOnInit(): void {
    this.formInint();
    this.getContact();
  }

  getContact() {
		try {
			let contactList = localStorage.getItem("contactList");
			if(typeof contactList != "undefined" && contactList != undefined && contactList != null && contactList != "null")
			{
        this.all_data = JSON.parse(contactList);
			} else {
				return [];
			}
		} catch (error) {
			return [];
		}
	}


  formInint() {
    this.addContactForm = this._formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      mobile_number: ['', [Validators.required]],
      email: ['', [Validators.required]],
      note: ['', [Validators.required]],
      src: ['', [Validators.required]],
      birth_date: ['', [Validators.required]]
    });
  }
  public id_num : number = 0

  addData(){
    console.log("hello");
    if (this.addContactForm.invalid) {
      return
    }
    let params = {
      id: this.addContactForm.get('id').value,
      name: this.addContactForm.get('name').value,
      mobile_number: this.addContactForm.get('mobile_number').value,
      email: this.addContactForm.get('email').value,
      note: this.addContactForm.get('note').value,
      src: this.addContactForm.get('src').value,
      birth_date: this.addContactForm.get('birth_date').value
    }
    this.all_data.push(params);
    // let idx = this.all_data
    console.log(params);
    localStorage.setItem('contactList', JSON.stringify(this.all_data));
    this._route.navigate(['app/list'])
  }

  backBtn(){
    this._route.navigate(['app/list'])
  }


}
