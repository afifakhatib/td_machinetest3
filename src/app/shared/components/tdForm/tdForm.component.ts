import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IcontactMode, IuserInfo } from "../../models/tdForm.interface";
import { single } from "rxjs";



@Component({
    selector : 'app-TdForm',
    templateUrl : './TdForm.component.html',
    styleUrls : ['./TdForm.component.scss']
})
export class TdFormComponent implements OnInit{
   
  userInfo : IuserInfo ={
    userEmail : {
        username: "iamAkhatib",
        email: "ak@gmail.com",
    },
      contact: 1234567811,
      secretQ: "Fav Idol",
      answer: "bts",
      isSubscribe: false,
      contactModeArr: "mobile"
  }

  contactModeArr : Array<IcontactMode> = [
    {
        moc : 'mode Email',
        id : 9597,
    },
    {
        moc : 'mode Mobile',
        id : 9795
    }
  ]

    @ViewChild('signUp') signUp !: NgForm;

    constructor(){}

    ngOnInit(): void {
    }
    
    onSignUp(signUp : NgForm){
       if(signUp.valid){
        console.log(signUp);
        console.log(signUp.value);
        signUp.reset()
       }
    }

    onEditform(){
        this.signUp.form.patchValue(this.userInfo)
    }
}
