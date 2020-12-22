import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(employees:any, filterContent: string): any {
    if (!filterContent) {
      return employees;
    }
    let filteredList = new Array();
    let prop;
    filteredList = employees.filter((employee, index) => {
      prop = employee['first_name'].toString();
      if (prop.indexOf(filterContent) > -1) {
        filteredList.push(employee);
        return filteredList;
      }

    })
    return filteredList;
  }

}
