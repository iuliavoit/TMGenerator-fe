import {Component, OnInit} from '@angular/core';
import {feature_traceability} from "../data/feature_traceability";
import {pace_nature} from "../data/pace_nature";
import {complexity_hotspots} from "../data/complexity_hotspots";


@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.scss']
})
export class TableGeneratorComponent implements OnInit {

  showTable: any;
  tableHtml: string = '';
  columnCount = 0;
  columns: any = feature_traceability.columns;
  data: any = feature_traceability.data;

  flattenedColumns:any;

  constructor() {
  }

  ngOnInit(): void {
    this.flattenedColumns = this.setInitialSortStates(this.flattenJSON(this.columns, 0))
    this.createTable();
  }


  createTable() {
    this.showTable = document.getElementById('showTable');
    this.tableHtml = `<table style=" border-collapse: collapse;">`;
    //create table headers
    this.tableHtml += this.createTableHeaders();
    //populate table
    this.tableHtml += this.addTableColumns();
    this.showTable.innerHTML = this.tableHtml;
    this.tableHtml += `</table>`;
  }

  createTableHeaders(): string {
   // let cols = this.flattenJSON(this.columns, 0);
    //map and add sort state -> none/asc/desc
    //cols = this.setInitialSortStates(cols);
    let cols = this.flattenedColumns;
    //sort the returned array so that the columns are in the right order
    cols.sort((a, b) => a.level - b.level);
    let headers = '';
    //generate the html for each header
    for (const h of cols) {
      if (!h.column.childrenColumns.length) this.columnCount += 1;
      //first we calculate the colspan: we start from the children array and calculate each
      //child's children until their children array is empty
      const colspan = this.countEmptyChildrenColumns(h.column);
      // Start a new row if this is the first header
      if (headers === '') {
        headers += '<tr style="border: 1px solid">';
      }
      // Start a new row if this header has a higher header level than the previous header
      if (headers !== '' && h?.level > cols[cols.indexOf(h) - 1]?.level) {
        headers += '</tr>';
      }
      // Generate the header cell HTML
      if (h.column.description) {
        const style = h.level === 1 ? 'text-align:center;font-size: 13px;font-weight:500; margin-top:0' : '';
        headers += `<th
                        style="${style};border: 1px solid; padding:0.5rem"
                        colspan="${colspan}"
                        id="${h.column?.id}"
                        scope="colgroup">
                        <span style="${h.column.nameStyle}">${h.column.name}</span>`;
        headers += `<p  style= "${h.column.descriptionStyle};text-align:center;font-size: 13px;font-weight:500; margin-top:0;">
                        ${h.column.description}</p>`
        if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
          const iconClass = this.getSortIconClassBasedOnColumnState(h);
          headers += ` <i class="${iconClass}"></i>`
        } else {
          headers += `</th>`;
        }
      } else {
        headers += `<th
                       style="border: 1px solid;  padding:0.5rem"
                       colspan="${colspan}" id="${h.column?.id}"
                       scope="colgroup">
                       <span style="${h.column.nameStyle}">${h.column.name}</span>`
        if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
          const iconClass = this.getSortIconClassBasedOnColumnState(h);
          headers += ` <i class="${iconClass}"></i>`
        } else {
          headers += `</th>`;
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
    this.data?.forEach(data => {
      singleColumn = `<tr style="border: 1px solid">`;
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
      if (Object(value).hasOwnProperty('url')) {
        singleColumn += `<td class="td-general-styling"><a href="${Object(value).url}" target="_blank" style="color: black">${Object(value).displayValue}</a></td>`
      } else {
        singleColumn += `<td class="td-general-styling"><span >${value}</span></td>`
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

  isColumnSortable(column: any): boolean {
    return !('sortable' in column)
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

}
