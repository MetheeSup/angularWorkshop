import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Order } from "../order";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-order-selected',
  templateUrl: './order-selected.component.html',
  styleUrls: ['./order-selected.component.css']
})
export class OrderSelectedComponent implements OnInit {

  @Input() order: Order;
  private title : string = 'สินค้าที่เลือก';
  constructor(private cartservice : CartService) { }

  ngOnInit() {
    // this.order = {
    //   id : 'รหัสสินค้า',
    //   ordername : 'ชื่อสินค้า',
    //   orderprice : 'ราคาสินค้า',
    //   ordercart : 1
    // }
  }
  addcart(){
    this.cartservice.addcart(this.order)
  }
}
