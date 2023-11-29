import { Component } from '@angular/core';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-itemtype',
  templateUrl: './itemtype.component.html',
  styleUrls: ['./itemtype.component.css']
})
export class ItemtypeComponent {
  ItemType:any[] =[];
  constructor(private master:MasterService) { 
    this.getItem();
  }

  getItem(){
    this.master.get().subscribe((res: any)=>{
      this.ItemType = res;
    })
  }
}
