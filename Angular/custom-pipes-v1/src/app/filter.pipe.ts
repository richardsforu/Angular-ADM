import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items, searchTerm) {

    let filteredList = [];
    filteredList = []

    if (!searchTerm) {
      return items;
    }

    let newSearchTerm = !isNaN(searchTerm) ? searchTerm : searchTerm.toUpperCase();
    let prop;


    console.log(newSearchTerm);


    // loop
    items.filter(item => {

      console.log(item);

    //  for (let key in item) {
        prop = item['first'].toString();
        // console.log(prop);
        //console.log(item[key]);
        if (prop.indexOf(searchTerm) > -1) {
          filteredList.push(item);
          return filteredList;
        }
      //}
    })


    return filteredList;
  }



}
