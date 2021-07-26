import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any, key: string, value: any): any {    
    let retval: any[] = [];
    array.forEach(function(x:any) {
      if (x[key] == value)
        retval.push(x);
    });

    return retval;
  }

}
