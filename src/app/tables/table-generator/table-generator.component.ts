import {Component, OnInit} from '@angular/core';
import {SortHelperService} from "../services/sort-helper.service";
import {TableDataService} from "../services/table-data.service";
import {pn} from "../pn";

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.scss']
})
export class TableGeneratorComponent implements OnInit {

  showTable: any;
  tableHtml: string = '';
  columnCount = 0;
  columns: any;
  data: any = [];
  dataCopy: any = [];
  tableName: string = '';

  flattenedColumns: any;

  sortArray: any[] = [];

  constructor(private sortService: SortHelperService,
              private tableDataService: TableDataService) {
  }

  ngOnInit(): void {
    /*this.tableDataService.getTableData().subscribe(data=> {
     console.log(JSON.stringify(data))
      this.columns = data;
      this.flattenedColumns = this.setInitialSortStates(this.flattenJSON(this.columns, 0));
      this.createTable();
    })*/
    this.columns = pn.columns;
    this.tableName = pn.name;
    for (let i = 0; i < 200; i++) {
      this.data = this.data.concat(Object.values(pn.data))
    }

    this.dataCopy = [...this.data];
    this.flattenedColumns = this.setInitialSortStates(this.flattenJSON(this.columns, 0));
    this.createTable();
  }


  createTable() {
    this.columnCount = 0;
    this.tableHtml = '';
    this.showTable = document.getElementById('showTable');
    this.showTable.innerHTML = this.tableHtml;
    this.tableHtml = `<table style=" border-collapse: collapse;">`;
    //create table headers
    this.tableHtml += this.createTableHeaders();
    //populate table
    this.tableHtml += this.addTableColumns();
    this.showTable.innerHTML = this.tableHtml;
    this.tableHtml += `</table>`;
    this.setSortColumnIds();
  }


  createTableHeaders(): string {

    let cols = this.flattenedColumns;

    //sort the returned array so that the columns are in the right order
    cols.sort((a, b) => a.level - b.level);
    const highestLevel = cols[cols.length - 1].level;
    let headers = '';
    //generate the html for each header
    for (const h of cols) {
      if (!h.column.childrenColumns.length) this.columnCount += 1;
      //first we calculate the colspan: we start from the children array and calculate each
      //child's children until their children array is empty
      const colspan = this.countEmptyChildrenColumns(h.column);
      // Start a new row if this is the first header
      if (headers === '') {
        headers += '<tr>';
      }
      // Start a new row if this header has a higher header level than the previous header
      if (headers !== '' && h?.level > cols[cols.indexOf(h) - 1]?.level) {
        headers += '</tr>';
      }
      // Generate the header cell HTML
      let style = h.level === highestLevel ? 'border-bottom:1px solid;' : '';
      if (h.column.borderL) {
        style += 'border-left: 1px solid'
      }
      if (h.column.borderR) {
        style += 'border-right: 1px solid'
      }
      if (h.column.borderB) {
        style += 'border-bottom: 1px solid'
      }
      const nameValue = h.column?.name !== undefined && h.column?.name !== "" ? h.column?.name : "";
      if (h.column.description) {
        headers += `<th
                        style="${style}"
                       colspan="${colspan}" id="${h.column?.id}"
                       scope="colgroup">
                        <span style="${h.column?.nameStyle}">${nameValue}</span>`;
        headers += `<div class="center-column-text">  <p  style= "${h.column?.descriptionStyle};text-align:center;font-size: 13px;font-weight:500; margin-top:0;">
                        ${h.column.description}</p>`
        if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
          const iconClass = this.getSortIconClassBasedOnColumnState(h);
          headers += `<i class="${iconClass}" style="margin-left: 1rem"  id="${h.column?.id}+i"></i></div>`;
        } else {
          headers += `</div></th>`;
        }
      } else {
        headers += `<th
                       style="${style};padding:0.3rem 0.5rem"
                       colspan="${colspan}" id="${h.column?.id}"
                       scope="colgroup">
                       <div  style="display: flex; text-align: center; justify-content: center">
                       <span style="${h.column?.nameStyle}">${nameValue}</span>`
        if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
          const iconClass = this.getSortIconClassBasedOnColumnState(h);
          headers += `<i class="${iconClass}" style="margin-left: 1rem" id="${h.column?.id}+i"></i></div>`;
        } else {
          headers += `</div></th>`;
        }
      }
    }
    // Close any remaining open row
    if (headers !== '') {
      headers += '</tr>';
    }
    return headers;
  }


//a function that returns an array containing all the extracted objects that the initial json has
// and gives them a level according to their depth basically (header level)
  flattenJSON(json, level = 1): any[] {
    let flattened: { column: any, level: number }[] = [];
    const flatten = (obj, level) => {
      flattened.push({column: obj, level: level});
      if (obj.childrenColumns && obj.childrenColumns.length > 0) {
        obj.childrenColumns.forEach((child) => {
          flatten(child, level + 1);
        });
      }
    };
    json.forEach((obj) => {
      flatten(obj, level);
    });
    return flattened;
  }

  countEmptyChildrenColumns(obj: any): number {
    // base case: no children, so return 0
    if (!obj.childrenColumns || obj.childrenColumns.length === 0) {
      return 1;
    }
    let emptyCount = 0;
    // traverse each child recursively
    for (const childObj of obj.childrenColumns) {
      // const childObj = this.columns.find(item => item.id === childId);
      if (childObj && (!childObj.childrenColumns || childObj.childrenColumns.length === 0)) {
        // count this child if it has empty childrenColumns array
        emptyCount++;
      } else {
        // count the empty children of this child recursively
        emptyCount += this.countEmptyChildrenColumns(childObj);
      }
    }
    return emptyCount;
  }

  addTableColumns(): string {
    let columns = '';
    let singleColumn = '';
    /*for (let row in this.data) {
      const data = this.data[row];
      for (let singleData in data) {
        let d = data[singleData]
        singleColumn = `<tr style="border-bottom: 1px solid #cdcdcd">`;
        if (!Object.entries(d).length) {
          singleColumn += this.insertEmptyRow();
        } else {
          singleColumn += this.createTableData(d);
        }
        singleColumn += `</tr>`;
        columns += singleColumn;
      }

    }*/
    this.data?.forEach(data => {
      singleColumn = `<tr style="border-bottom: 1px solid #cdcdcd">`;
      if (!Object.entries(data).length) {
        singleColumn += this.insertEmptyRow();
      } else {
        singleColumn += this.createTableData(data);
      }
      singleColumn += `</tr>`;
      columns += singleColumn;
    });
    return columns;
  }

   createTableData(data: any): string {
     let singleColumn = '';
     Object.entries(data).forEach(([key, value]) => {
       const style = Object(value).style? Object(value)?.style : "";
       if (Object(value).hasOwnProperty('url')) {
         singleColumn += `<td  style="${style}" class="td-general-styling"><a href="${Object(value).url}" target="_blank" style="color: black">${Object(value).displayValue}</a></td>`
       } else {
         if (Object(value).value === '0') {
           singleColumn += `<td class="td-general-styling"><span class="d-none">${Object(value).value}</span></td>`
         } else {
           singleColumn += `<td  style="${style}" class="td-general-styling"><span>${Object(value).value}</span></td>`
         }
       }
     });
     return singleColumn
   }

  insertEmptyRow(): string {
    let emptyRow = '';
    for (let i = 0; i < this.columnCount; i++) {
      emptyRow += `<td class="td-general-styling" style="height: 1.2rem"></td>`;
    }
    return emptyRow;
  }

  //TABLE SORTING

  setInitialSortStates(columns: any[]) {
    return columns.map(column => ({
      ...column,
      sortState: 'none'
    }));
  }

  setSortColumnIds() {
    for (const h of this.flattenedColumns) {
      if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
        let icon = document.querySelector(`[id="${CSS.escape(`${h.column?.id}+i`)}"`); // Select the icon using the class name
        icon?.addEventListener('click', () => this.sortColumn(h));
      }
    }
  }

  isColumnSortable(column: any): boolean {
    return column.sortable !== false;
  }


  getSortIconClassBasedOnColumnState(column: any): string {
    switch (column.sortState) {
      case "none": {
        return 'fa fa-sort';
      }
      case "asc": {
        return 'fa fa-sort-up'
      }
      case "desc": {
        return 'fa fa-sort-down'
      }
    }
    return ''
  }


  private sortColumn(h: any) {
    const column = this.flattenedColumns.find(col => col === h);
    console.log(column)
    switch (column.sortState) {
      case "none": {
        column.sortState = 'asc';
        this.addColumnToSortArray(column);
        break;
      }
      case "asc": {
        column.sortState = 'desc';
        this.addColumnToSortArray(column);
        break;
      }
      case "desc": {
        column.sortState = 'none';
        this.deleteColumnFromSortArray(column);
        // this.addColumnToSortArray(column);
        break;
      }
    }
    this.data = this.sortService.sortArrayByCriteria([...this.dataCopy], this.sortArray);
    this.createTable();
  }

  deleteColumnFromSortArray(column: any) {
    const columnToDeleteIdx = this.sortArray.indexOf(c => JSON.stringify(c) === JSON.stringify(column));
    if (columnToDeleteIdx) {
      this.sortArray.splice(columnToDeleteIdx, 1);
    }
  }

  addColumnToSortArray(column: any) {
    let columnToSort = this.sortArray.find(c => JSON.stringify(c.column) === JSON.stringify(column.column));
    if (columnToSort) {
      columnToSort = column;
    } else {
      this.sortArray.push(column);
    }
  }

}
