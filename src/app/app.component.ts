import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public allData = {};
  public silver = {
    'selectPlan' : {plan:'monthly',charges:'$139.99'},
    'sportsArray': []
  };
  public gold = {
    'selectPlan' : {plan:'monthly',charges:'$189.99'},
    'sportsArray': []
  };
  public platinum = {
    'selectPlan' : {plan:'monthly',charges:'$219.99'},
    'sportsArray': []
  };
  title = 'angular-practical';
  silverHandleChange(event,charges){
    this.silver['selectPlan'].plan = event.target.value
    this.silver['selectPlan'].charges = charges
  }
  GoldHandleChange(event,charges){
    this.gold['selectPlan'].plan = event.target.value
    this.gold['selectPlan'].charges = charges
  }
  platinumHandleChange(event,charges){
    this.platinum['selectPlan'].plan = event.target.value
    this.platinum['selectPlan'].charges = charges
  }

  changeSports(event,type){
    if(type == 'silver'){
      if(this.silver.sportsArray.length < 2  && event.target.checked){
        this.silver.sportsArray.push(event.target.value);
      } else if(!event.target.checked){
        let idx = this.silver.sportsArray.findIndex((each:any)=> each == event.target.value);
        if(idx > -1){
          this.silver.sportsArray.splice(idx,1);
        }
      } else{
        event.target.checked = false;
      }
    } 
    else if( type == 'gold'){
      if(this.gold.sportsArray.length < 3 && event.target.checked){
        this.gold.sportsArray.push(event.target.value);
      } else if(!event.target.checked){
        let idx = this.gold.sportsArray.findIndex((each:any)=> each == event.target.value);
        if(idx > -1){
          this.gold.sportsArray.splice(idx,1);
        }
      } else{
        
        event.target.checked = false;
      }
    } 
    else if( type == 'platinum'){
      if(this.platinum.sportsArray.length < 4 && event.target.checked){
        this.platinum.sportsArray.push(event.target.value);
      } else if(!event.target.checked){
        let idx = this.platinum.sportsArray.findIndex((each:any)=> each == event.target.value);
        if(idx > -1){
          this.platinum.sportsArray.splice(idx,1);
        }
      } else{
        
        event.target.checked = false;
      }
    }
    console.log("this.silver::",this.silver);
    console.log("this.gold::",this.gold);
    console.log("this.platinum::",this.platinum);
  }
 
  proceedToPay(){
    this.allData['silver'] = this.silver; 
    this.allData['gold'] = this.gold;
    this.allData['platinum'] = this.platinum;
    console.log("this.alldata::",this.allData);
  }
}
