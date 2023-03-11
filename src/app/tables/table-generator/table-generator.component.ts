import {Component, OnInit} from '@angular/core';
import {feature_traceability} from "../data/feature_traceability";
import {pace_nature, pace_nature_data} from "../data/pace_nature";
import {complexity_hotspots} from "../data/complexity_hotspots";

interface ColumnLevel {
  level: number;
  columns: any[];
}

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.scss']
})
export class TableGeneratorComponent implements OnInit {

  showTable: any;
  tableHtml: string = '';
  columns: any = feature_traceability;
  data: any = pace_nature_data;
  rows: any[][] = [];

  constructor() {
  }

  ngOnInit(): void {
    // this.generateRows(this.columns);
    // console.log(this.rows)
   // console.log(this.iterateColumns(this.columns))
    //console.log(this.traverseColumns(this.columns))
    // this.traverseColumns(this.columns)
    // const table = this.generateTable(feature_traceability);

// Add table to the DOM
     //this.create();
    this.showTable = document.getElementById('showTable');
    this.tableHtml = `<table style=" border-collapse: collapse;">`;
    this.tableHtml += this.createTableHeaders();
    this.showTable.innerHTML = this.tableHtml;
    this.tableHtml += `</table>`;
    console.log(this.generateTableFromColumns(this.columns))
  }


   generateTableFromColumns(columns: any[]): string {
    let html = '<table>';
    html += '<thead><tr>';

    // Add column names to the table header
    columns.forEach(column => {
      html += `<th>${column.name}</th>`;
    });

    html += '</tr></thead><tbody>';

    // Add rows to the table body
    const addRows = (columns: any[]) => {
      columns.forEach(column => {
        html += '<tr>';

        // Add cell content for the current column
        html += `<td>${column.name}</td>`;

        // Recursively add cell content for children columns
        if (column.childrenColumns) {
          addRows(column.childrenColumns);
        }

        html += '</tr>';
      });
    };

    addRows(columns);

    html += '</tbody></table>';

    return html;
  }
















   flattenJSON(json, level = 1) {
     let flattened: { column: any, level: number }[] = [];

    const flatten = (obj, level) => {
      flattened.push({ column: obj, level: level });

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




 /* createTableHeaders(columns: any[]): string {
    columns.sort((a, b) => a.level - b.level);
    let headers = '';
    //generate the html for each header
    for (const h of columns) {
      //first we calculate the colspan: we start from the children array and calculate each
      //child's children until they have level 1
      console.log(h)
      let colspan = 0;
      h.columns.forEach(c=> colspan += c.childrenColumns?.length);
      console.log(colspan)
      // const colspan = h.columns.childrenColumns?.length;
      // Start a new row if this is the first header
      if (headers === '') {
        headers += '<tr style="border: 1px solid">';
      }
      // Start a new row if this header has a higher header level than the previous header
      if (headers !== '' && h?.level < columns[columns.indexOf(h) - 1]?.level) {
        headers += '</tr>';
      }
      // Generate the header cell HTML
      if (h.description) {
        const style = h.level === 1 ? 'text-align:center;font-size: 13px;font-weight:500; margin-top:0' : '';
        headers += `<th style="${style};border: 1px solid; padding:0.5rem" colspan="${colspan}" scope="colgroup"><span style="${h.nameStyle}">${h.name}</span>`;
        headers += `<p  style= "${h.descriptionStyle};text-align:center;font-size: 13px;font-weight:500; margin-top:0;">${h.description}</p></th>`;
      } else {
        headers += `<th style="border: 1px solid;  padding:0.5rem" colspan="${colspan}" scope="colgroup"><span style="${h.nameStyle}">${h.name}</span></th>`;
      }
    }
    // Close any remaining open row
    if (headers !== '') {
      headers += '</tr>';
    }
    return headers;
  }*/


  createTableHeaders(): string {
    let cols = this.flattenJSON(this.columns, 0);
    cols.sort((a, b) => a.level - b.level);
    console.log(cols)
    let headers = '';
    //generate the html for each header
    for (const h of cols) {
      //first we calculate the colspan: we start from the children array and calculate each
      //child's children until they have level 1
      const colspan = this.countEmptyChildrenColumns(h.column)
      //console.log(h,colspan)
      // Start a new row if this is the first header
      if (headers === '') {
        headers += '<tr style="border: 1px solid">';
      }
      console.log(cols[cols.indexOf(h)-1])
      // Start a new row if this header has a higher header level than the previous header
      if (headers !== '' && h?.level > cols[cols.indexOf(h) - 1]?.level) { //might not work propwerly
        headers += '</tr>';
      }
      // Generate the header cell HTML
      if (h.column.description) {
        const style = h.level === 1 ? 'text-align:center;font-size: 13px;font-weight:500; margin-top:0' : '';
        headers += `<th style="${style};border: 1px solid; padding:0.5rem" colspan="${colspan}" rowspan="${h.column?.rowspan}" scope="colgroup"><span style="${h.column.nameStyle}">${h.column.name}</span>`;
        headers += `<p  style= "${h.column.descriptionStyle};text-align:center;font-size: 13px;font-weight:500; margin-top:0;">${h.column.description}</p></th>`;
      } else {
        headers += `<th style="border: 1px solid;  padding:0.5rem" colspan="${colspan}" rowspan="${h.column?.rowspan}" scope="colgroup"><span style="${h.column.nameStyle}">${h.column.name}</span></th>`;
      }
    }
    // Close any remaining open row
    if (headers !== '') {
      headers += '</tr>';
    }
    return headers;
  }

  countEmptyChildrenColumns(obj: any) {
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

































  /*  flattenJSON(json) {
     let flattened:any[] = [];

     const flatten = (obj) => {
       flattened.push(obj);

       if (obj.childrenColumns && obj.childrenColumns.length > 0) {
         obj.childrenColumns.forEach((child) => {
           flatten(child);
         });
       }
     };

     json.forEach((obj) => {
       flatten(obj);
     });

     return flattened;
   }*/

  /*

    create() {
      this.showTable = document.getElementById('showTable');
      this.tableHtml = `<table style=" border-collapse: collapse;">`;
      let orderedColumnsArray = this.iterateColumns(this.columns);
      console.log(orderedColumnsArray)
      this.tableHtml += this.createTableHeaders(orderedColumnsArray);
     // this.tableHtml += this.createTableHeaders();
      this.showTable.innerHTML = this.tableHtml;
      /!*this.columns.forEach(column => {
        this.createTableHeaders(column);
      });*!/
      this.tableHtml += `</table>`;
    }

    iterateColumns(columns: any[], level = 1, parentColumns: any[] = [], result: { level: number; columns: any[] }[] = []): { level: number; columns: any[] }[] {
      if (!columns) return result;

      for (const column of columns) {
        const currentColumns = [...parentColumns, column];
        result.push({level, columns: currentColumns});

        if (column.childrenColumns && column.childrenColumns.length > 0) {
          this.iterateColumns(column.childrenColumns, level + 1, currentColumns, result);
        }
      }
      return result;
    }

     /!*generateTableHeaders(headers: any[]): string {
      let headerHtml = '<thead><tr>';

      // Generate the top-level headers
      headers.forEach(header => {
        headerHtml += `<th${header.childrenColumns ? ` colspan="${header.childrenColumns.length}"` : ''}>${header.name}</th>`;
      });

      headerHtml += '</tr>';

      // Generate the child headers recursively
      const childHeaderHtml = headers
        .map(header => header.childrenColumns ? this.generateTableHeaders(header.childrenColumns) : '')
        .join('');

      headerHtml += childHeaderHtml ? `<tr>${childHeaderHtml}</tr>` : '';

      headerHtml += '</thead>';

      return headerHtml;
    }*!/
     generateTableHeaders(headers: any[]): string {
      let headerHtml = '<tr>';

      // Generate the top-level headers
      headers.forEach(header => {
        const colspan =  header.childrenColumns.length===0? 1 : header.childrenColumns.length;
        headerHtml += `<th colspan = ${colspan} style="border: 1px solid">${header.name}</th>`;
      //  console.log(header.name, colspan)
      });

      headerHtml += '</tr>';
      // Generate the child headers recursively
      const childHeaderHtml = headers
        .map(header => header.childrenColumns ? this.generateTableHeaders(header.childrenColumns) : '')
        .join('');
  console.log(childHeaderHtml)
     // headerHtml += childHeaderHtml ? `<tr style="border:1px solid red">${childHeaderHtml}</tr>` : '';
  headerHtml += childHeaderHtml
      headerHtml += '';

      return headerHtml;
    }

    /!*createTableHeaders(columns: any[]) {
      columns.sort((a, b) => b.level - a.level);
    }*!/

    createTableHeaders(columns: any[]): string {
      columns.sort((a, b) => a.level - b.level);
      let headers = '';
      //generate the html for each header
      for (const h of columns) {
        //first we calculate the colspan: we start from the children array and calculate each
        //child's children until they have level 1
        console.log(h)
        let colspan = 0;
        h.columns.forEach(c=> colspan += c.childrenColumns?.length);
        console.log(colspan)
       // const colspan = h.columns.childrenColumns?.length;
        // Start a new row if this is the first header
        if (headers === '') {
          headers += '<tr style="border: 1px solid">';
        }
        // Start a new row if this header has a higher header level than the previous header
        if (headers !== '' && h?.level < columns[columns.indexOf(h) - 1]?.level) {
          headers += '</tr>';
        }
        // Generate the header cell HTML
        if (h.description) {
          const style = h.level === 1 ? 'text-align:center;font-size: 13px;font-weight:500; margin-top:0' : '';
          headers += `<th style="${style};border: 1px solid; padding:0.5rem" colspan="${colspan}" scope="colgroup"><span style="${h.nameStyle}">${h.name}</span>`;
          headers += `<p  style= "${h.descriptionStyle};text-align:center;font-size: 13px;font-weight:500; margin-top:0;">${h.description}</p></th>`;
        } else {
          headers += `<th style="border: 1px solid;  padding:0.5rem" colspan="${colspan}" scope="colgroup"><span style="${h.nameStyle}">${h.name}</span></th>`;
        }
      }
      // Close any remaining open row
      if (headers !== '') {
        headers += '</tr>';
      }
      return headers;
    }*/


  /*traverseColumns = (columns: any[]): void => {
   for (const column of columns) {
     console.log(column.name);
     this.traverseColumns(column.childrenColumns);
   }
 };*/


  /*
  generateRows(columns: any[], rowIndex = 0, parentRow: any[] = []) {
    if (columns.length === 0) {
      this.rows.push(parentRow);
      return;
    }

    const currentColumn = columns[0];

    for (let i = 0; i < currentColumn.childrenColumns.length; i++) {
      const childColumn = currentColumn.childrenColumns[i];
      const childRow = [...parentRow, childColumn.name];
      this.generateRows(columns.slice(1), rowIndex + 1, childRow);
    }

    if (currentColumn.childrenColumns.length === 0) {
      const leafRow = [...parentRow, currentColumn.name];
      this.rows.push(leafRow);
    }
  }


   /!*traverseColumns = (columns: any[], level = 0): void => {
     for (const column of columns) {
       if (level > 0) {
         console.log(`Entered level ${level}`);
       }
       console.log(level, column.name);
       this.traverseColumns(column.childrenColumns, level + 1);
     }
  };
*!/
  createTable() {
    this.showTable = document.getElementById('showTable');
    this.tableHtml = `<table style=" border-collapse: collapse;">`;
    this.tableHtml += this.createTableHeaders();
    //populate table
   // this.tableHtml += this.addTableColumns();
    this.tableHtml += `</table>`;
    this.showTable.innerHTML = this.tableHtml;
  }

  createTableHeaders(): string {
    this.columns.sort((a, b) => b.level - a.level);
    let headers = '';
    //generate the html for each header
    for (const h of this.columns) {
      //first we calculate the colspan: we start from the children array and calculate each
      //child's children until they have level 1
      const colspan = this.countEmptyChildrenColumns(h)
      // Start a new row if this is the first header
      if (headers === '') {
        headers += '<tr style="border: 1px solid">';
      }
      // Start a new row if this header has a higher header level than the previous header
      if (headers !== '' && h?.level < this.columns[this.columns.indexOf(h) - 1]?.level) {
        headers += '</tr>';
      }
      // Generate the header cell HTML
      if (h.description) {
        const style = h.level === 1 ? 'text-align:center;font-size: 13px;font-weight:500; margin-top:0' : '';
        headers += `<th style="${style};border: 1px solid; padding:0.5rem" colspan="${colspan}" scope="colgroup"><span style="${h.nameStyle}">${h.name}</span>`;
        headers += `<p  style= "${h.descriptionStyle};text-align:center;font-size: 13px;font-weight:500; margin-top:0;">${h.description}</p></th>`;
      } else {
        headers += `<th style="border: 1px solid;  padding:0.5rem" colspan="${colspan}" scope="colgroup"><span style="${h.nameStyle}">${h.name}</span></th>`;
      }
    }
    // Close any remaining open row
    if (headers !== '') {
      headers += '</tr>';
    }
    return headers;
  }

  countEmptyChildrenColumns(obj: any) {
    // base case: no children, so return 0
    if (!obj.childrenColumns || obj.childrenColumns.length === 0) {
      return 0;
    }
    let emptyCount = 0;
    // traverse each child recursively
    for (const childId of obj.childrenColumns) {
      const childObj = this.columns.find(item => item.id === childId);
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
      if (Object.keys(data).length === 0) {
        singleColumn += this.insertEmptyRow();
      } else {
        singleColumn += this.createTableData(data);
      }
      singleColumn += `</tr>`;
      columns += singleColumn;
    });
    return columns;
  }

  createTableData(data:any) : string {
    let singleColumn = '';
    Object.entries(data).forEach(([key, value]) => {
      if(Object(value).hasOwnProperty('url')){
        singleColumn += `<td class="td-general-styling"><a href="${Object(value).url}" target="_blank" style="color: black">${Object(value).displayValue}</a></td>`
      } else {
        singleColumn += `<td class="td-general-styling"><span >${value}</span></td>`
      }
    });
    return singleColumn
  }

  insertEmptyRow(): string {
    let emptyRow = '';
    this.columns.forEach(c => {
      if(c.level === 1) {
        emptyRow += `<td class="td-general-styling" style="height: 1.2rem"></td>`;
      }
    });
    return emptyRow;
  }

   generateTable(featureTraceability: any[]) {
    // Create table element
    const table = document.createElement('table');

    // Create table header row
    const headerRow = document.createElement('tr');

    // Loop through top-level columns to create table header cells
    featureTraceability[0].childrenColumns.forEach((column: any) => {
      const headerCell = document.createElement('th');
      headerCell.innerText = column.name;
      headerCell.setAttribute('colspan', `${column.childrenColumns.length}`);
      headerCell.setAttribute('rowspan', `${column.level}`);
      headerCell.setAttribute('style', `${column.nameStyle.join(';')}`);
      headerRow.appendChild(headerCell);

      // Loop through nested columns to create additional header cells
      column.childrenColumns.forEach((nestedColumn: any) => {
        const nestedHeaderCell = document.createElement('th');
        nestedHeaderCell.innerText = nestedColumn.name;
        nestedHeaderCell.setAttribute('style', `${nestedColumn.nameStyle.join(';')}`);
        headerCell.appendChild(nestedHeaderCell);
      });
    });

    // Add header row to table
    table.appendChild(headerRow);

    // Loop through remaining data to create table rows
    featureTraceability.slice(1).forEach((row: any) => {
      const tableRow = document.createElement('tr');

      // Create cell for row name
      const nameCell = document.createElement('td');
      nameCell.innerText = row.name;
      tableRow.appendChild(nameCell);

      // Loop through row's children columns to create additional cells
      row.childrenColumns.forEach((column: any) => {
        const cell = document.createElement('td');
        cell.innerText = '';
        cell.setAttribute('style', `${column.nameStyle.join(';')}`);
        tableRow.appendChild(cell);

        // Loop through nested columns to create additional cells
        column.childrenColumns.forEach((nestedColumn: any) => {
          const nestedCell = document.createElement('td');
          nestedCell.innerText = '';
          nestedCell.setAttribute('style', `${nestedColumn.nameStyle.join(';')}`);
          cell.appendChild(nestedCell);
        });
      });

      // Add row to table
      table.appendChild(tableRow);
    });

    // Return completed table
    return table;
  }*/

}
