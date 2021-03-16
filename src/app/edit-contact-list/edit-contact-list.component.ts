import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';
import {ObservablesService} from 'src/app/providers/observables.service'
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-edit-contact-list',
  templateUrl: './edit-contact-list.component.html',
  styleUrls: ['./edit-contact-list.component.css']
})
export class EditContactListComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _observableService : ObservablesService,
    private _activateRoute : ActivatedRoute,
    private _route : Router
  ) { }
  public editContactForm: FormGroup;
  public editContactData :any;
  public contact_id : '';
  public all_data :any;

  ngOnInit(): void {
    this._activateRoute.params.subscribe(data=>{
      console.log(data);
      this.contact_id = data.id;
      this.getContact();
      this.formInint();
    })
  }

  getContact() {
		try {
			let contactList = localStorage.getItem("contactList");
			if(typeof contactList != "undefined" && contactList != undefined && contactList != null && contactList != "null")
			{
				// console.log(JSON.parse(contactList));
        this.all_data = JSON.parse(contactList);
        let allData = JSON.parse(contactList);
        this.editContactData = allData.find((each)=> each.id ==  this.contact_id);
        
			} else {
				return [];
			}
		} catch (error) {
			return [];
		}
	}

  formInint() {
    if(Object.keys(this.editContactData).length ){
      this.editContactForm = this._formBuilder.group({
        name: new FormControl(this.editContactData.name, Validators.required),
        mobile_number: new FormControl(this.editContactData.mobile_number, Validators.required),
        email: new FormControl(this.editContactData.email, Validators.required),
        note: new FormControl(this.editContactData.note, Validators.required),
        src: new FormControl(this.editContactData.src, Validators.required),
        birth_date: new FormControl(this.editContactData.birth_date, Validators.required)
      });
    }
  }

  updateData(){
    // console.log("hello");
    if (this.editContactForm.invalid) {
      return
    }
    let params = {
      name: this.editContactForm.get('name').value,
      mobile_number: this.editContactForm.get('mobile_number').value,
      email: this.editContactForm.get('email').value,
      note: this.editContactForm.get('note').value,
      src: this.editContactForm.get('src').value,
      birth_date: this.editContactForm.get('birth_date').value,
      id: this.editContactForm.get('id').value,
    }
    console.log(params);
    let idx = this.all_data.findIndex((each)=>each.id == params.id);
    this.all_data[idx] = params;
    localStorage.setItem('contactList', JSON.stringify(this.all_data));
    this._route.navigate(['app/list'])

  }

  backBtn(){
    this._route.navigate(['app/list'])
  }

}
