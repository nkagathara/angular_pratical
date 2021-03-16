import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {ObservablesService} from 'src/app/providers/observables.service'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(
    private _route: Router,
    private _observable : ObservablesService
  ) { }
  public getContactList: any;
  public isGetContactList : boolean =  false;
  public searchText: string;
  @ViewChild('tagInput') tagInput: ElementRef;

  public staticData = [
    {
      birth_date: "2021-03-16",
      email: "nkagathara@gmail.com",
      id: "1",
      mobile_number: "9933225671",
      name: "Nirav",
      note: "Hello Nirav",
      src: "/c:"
    },
    {
      birth_date: "2021-03-19",
      email: "kishan@gmail.com",
      id: "2",
      mobile_number: "9933225989",
      name: "kishan",
      note: "Hello kishan",
      src: "/d:"
    }
  ] ;
  

  ngOnInit(): void {
    this.isGetContactList = false;
    let contactList = localStorage.getItem("contactList");
			if(typeof contactList != "undefined" && contactList != undefined && contactList != null && contactList != "null")
			{
        this.getContactList = JSON.parse(contactList);
        this.isGetContactList = true;
			}
    }

  saveContactList(staticData){
    localStorage.setItem('contactList', JSON.stringify(staticData));
  }

  addNewContact(){
    this._route.navigate(['app/add']);
  }

  editContact(obj){
    this._observable.editContactData(obj);
    this._route.navigate([`app/edit/${obj.id}`]);
  }

  removeContact(obj){
    let idx = this.getContactList.findIndex(e=>e.id == obj.id);
    if(this.getContactList.length == 1){
      this.isGetContactList = false;
      localStorage.removeItem('contactList');
    } else{
      localStorage.setItem('contactList', JSON.stringify(this.getContactList));
    }
    this.getContactList.splice(idx,1);
  }

}
