import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  hosts : Array<{name:string, location:string, connection:string, degree:string, intro:string, hostimg:string, sofaimg1:any, sofaimg2:any, sofaimg3:any}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.hosts=[
      {
       name:'Marty McFly',
       location:"Evanston",
       connection:'Menglei Lei',
       degree:"2nd Degree",
       intro:'some introduction to the sofa11',
       hostimg:'../../assets/img/menglei.jpeg',
       sofaimg1:'../../assets/img/sofa.JPG',
       sofaimg2:'../../assets/img/sofa.JPG',
       sofaimg3:'../../assets/img/sofa.JPG'
     },

      {
       name:'AAAAA BBBBB',
       location:"Los Angeles",
       connection:'Menglei Lei',
       degree:"1st Degree",
       intro:'some introduction to the sofa22',
       hostimg:'../../assets/img/menglei.jpeg',
       sofaimg1:'../../assets/img/sofa.JPG',
       sofaimg2:'../../assets/img/sofa.JPG',
       sofaimg3:'../../assets/img/sofa.JPG'
     },

      {
        name:'CCCCC DDDDD',
        location:"San Jose",
        connection:'Menglei Lei',
        degree:"3rd Degree",
        intro:'some introduction to the sofa33',
        hostimg:'../../assets/img/menglei.jpeg',
        sofaimg1:'../../assets/img/sofa.JPG',
        sofaimg2:'../../assets/img/sofa.JPG',
        sofaimg3:'../../assets/img/sofa.JPG'
      },

      {
        name:'EEEEE FFFFFF',
        location:"Chicago",
        connection:'Menglei Lei',
        degree:"4th Degree",
        intro:'some introduction to the sofa44',
        hostimg:'../../assets/img/menglei.jpeg',
        sofaimg1:'../../assets/img/sofa.JPG',
        sofaimg2:'../../assets/img/sofa.JPG',
        sofaimg3:'../../assets/img/sofa.JPG'
      }

    ];

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
}
