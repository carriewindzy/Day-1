import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeName'
})
export class PlaceNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value =="GZ"){
      return "广州"
    }else{
      return "深圳"
    }
  }

}
