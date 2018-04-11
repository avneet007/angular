import {Component} from 'angular2/core';
import {HeaderConfig} from './headerconfig'
import {Order} from './order'
import {Orderlist} from './orderlist_component'

 
@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.html',
    directives :[Orderlist]
})

export class AppComponent {
	
	myheading = HeaderConfig.main_headering;
    orders:Array<Order>

    constructor(){

      this.orders = [

              new Order(1,"kadhi chawal","Todo"),new Order(1,"Rajma rice","Packed")
          ]


          console.log(this.orders);

    }
   

}
