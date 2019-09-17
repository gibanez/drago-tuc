import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asset'
})
export class AssetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
