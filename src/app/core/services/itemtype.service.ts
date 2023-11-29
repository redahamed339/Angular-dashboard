import { Injectable } from '@angular/core';
import { MasterService } from './master.service';
import { environment } from 'src/environments/environment.development';
import { apiconstant } from '../constant/apiconstant';

@Injectable({
  providedIn: 'root'
})
export class ItemtypeService {
  ItemType:any[]=[];
  constructor(private master:MasterService) {
    this.getItem();
   }

  getItem(){
    this.master.get().subscribe((res: any)=>{
      debugger;
      this.ItemType = res;
    })
  }
}
