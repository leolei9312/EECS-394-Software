import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ToastController } from 'ionic-angular';
@Component({
  selector:'LastPage',
  templateUrl: 'lastpage.html'
})
export class LastPage {
  Comments:Array<{headimg:string, name:string, comment:string, rate:any}>;
  newheadimg:string;
  newname:string;
  newcomment:string;
  rate:any;
  warning:string;

  constructor(public toastCtrl: ToastController){
    this.Comments=[
      {headimg:"http://www.piz18.com/wp-content/uploads/2015/05/So-beautiful-melancholic-cat-550x371.jpg", name:"Menglei", comment:"This is good!", rate:"Very Good"},
      {headimg:"http://www.piz18.com/wp-content/uploads/2015/05/So-beautiful-melancholic-cat-550x371.jpg", name:"Alex", comment:"This is bad!", rate:"Very Bad"}

    ];
    this.newheadimg = "http://www.piz18.com/wp-content/uploads/2015/05/So-beautiful-melancholic-cat-550x371.jpg";
    this.newname = "Random";
    this.newcomment = "";
    this.rate = "";
  }

  addComment(){
    if(this.newcomment != "" && this.rate != ""){
      var comment={
          headimg:this.newheadimg,
          name:this.newname,
          comment:this.newcomment,
          rate:this.rate
      };
      this.Comments.push(comment);
      this.newcomment = "";
      this.rate = "";
      this.warning = "";
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Input Comment and Rate',
        position: "middle",
        duration: 1000
      });
      toast.present();
    }
  }

}
