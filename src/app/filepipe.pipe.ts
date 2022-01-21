import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filepipe'
})
export class FilepipePipe implements PipeTransform {

  transform(chnagedepertment:string): any {
    return 'cse';
  }

}
