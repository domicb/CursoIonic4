import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksDetails'
})
export class BooksDetailsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
