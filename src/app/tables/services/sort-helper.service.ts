import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SortHelperService {

  constructor() {
  }
  //trimitem la fiecare click pe sort id-ul coloanei si din data sortam proprietatea cu numele id-ului

  //sortCriteria este un array format din coloanele ce trebuie sortate, in ordinea in care au fost apasate

   sortArrayByCriteria(data: any[], sortCriteria: any[]) {
    return data.sort((a, b) => {
      for (let i = 0; i < sortCriteria.length; i++) {
        const { column, sortState } = sortCriteria[i];
        let valueA = a[column.id];
        let valueB = b[column.id];
        let comparison = 0;

        if (column.type === 'Date') {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          comparison = dateA.getTime() - dateB.getTime();
        } else if (column.type === 'String') {
          //for the empty rows that come as {}
          valueA = valueA!=undefined? valueA : '';
          valueB = valueB!=undefined? valueB : '';
          comparison = valueA.localeCompare(valueB);
        } else {
          comparison = parseInt(valueA) - parseInt(valueB);
        }

        if (sortState === 'desc') {
          comparison = comparison * -1;
        }

        if (comparison !== 0) {
          return comparison;
        }
      }

      return 0;
    });
  }

}
