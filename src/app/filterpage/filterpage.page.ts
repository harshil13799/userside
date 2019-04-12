import { Component, OnInit } from '@angular/core';
import { category_class } from '../Classes/category';
import { CategoryService } from '../services/category.service';
import { SortService } from '../services/sort.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.page.html',
  styleUrls: ['./filterpage.page.scss'],
})
export class FilterpagePage implements OnInit {

  constructor(private _route:Router,private _catser:CategoryService,private _sortser:SortService) { }
category:string;
range:number;
catarr:category_class[]=[];
public optionsFn(category,range): void { //here item is an object 
  console.log(this.category);
  console.log(this.range);
}
onclickapply()
{
  this._route.navigate(['/product',this.category,this.range]);
}
  ngOnInit() {
    this._catser.getAllcat().subscribe(
      (data:any)=>{
        this.catarr=data;
        console.log(this.catarr);
      }
    );

  }

}
