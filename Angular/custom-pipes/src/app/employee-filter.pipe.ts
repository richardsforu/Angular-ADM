import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {


  transform(value: any, by: string, direction: "asc" | "desc"): any {

    return _.orderBy(value, [by], direction);
  }

}
