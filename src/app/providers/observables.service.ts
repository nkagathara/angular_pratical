import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ObservablesService {

	private sharedValue = new BehaviorSubject<object>([]);
	public mapLoadedValue = new BehaviorSubject<object>([]);
	currentSharedValue = this.sharedValue.asObservable();

	public controllerDetailValue = new BehaviorSubject<object>([]);

	constructor(
	) { }

	public getConatactData = new Subject<object>();
	editContactData(value= {}){
		this.getConatactData.next(value);
	}

}
