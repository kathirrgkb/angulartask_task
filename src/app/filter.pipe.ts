import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchelement'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , searchbox: any): any {
    if(!value)return [];
    if(!searchbox) return value;
    return value.filter(function(datails : any)
    {
      
    
      // console.log(value);
      return JSON.stringify(datails).toLowerCase().includes(searchbox);
      
    })
   
  }
  
}
