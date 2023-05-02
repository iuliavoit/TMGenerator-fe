import {Component, OnInit} from '@angular/core';
import {mockMatrix} from "../mockMatrix";

@Component({
  selector: 'app-matrix-generator',
  templateUrl: './matrix-generator.component.html',
  styleUrls: ['./matrix-generator.component.scss']
})
export class MatrixGeneratorComponent implements OnInit {

  matrixHtml: string = '';
  matrixName: string = '';
  showMatrix: any;
  entityGroup1: any[] = [];
  entityGroup2: any[] = [];
  entity1PaddingData: any;
  entity2PaddingData: any;

  constructor() {
  }

  ngOnInit(): void {
    this.matrixName = mockMatrix.name;
    this.entityGroup1 = mockMatrix.entity1PaddingColumns;
    this.entityGroup2 = mockMatrix.entity2PaddingColumns;
    this.entity1PaddingData = Object.values(mockMatrix.entity1PaddingData);
    this.entity2PaddingData = Object.values(mockMatrix.entity2PaddingData);
    this.createMatrix();
  }

  createMatrix() {
    this.matrixHtml = '';
    this.showMatrix = document.getElementById('showMatrix');
    this.matrixHtml = `<table  style= "border-spacing: 0;width: 100%;border: 1px solid #ddd;border-collapse: collapse"><tbody`;
    this.matrixHtml += this.createHeadersAndPropertiesString();
    this.matrixHtml += `</tbody></table>`
    this.showMatrix.innerHTML = this.matrixHtml;
  }

  createHeadersAndPropertiesString(): string {
    let rightHeaders: string = '';
    let leftHeaders: string = '';
    let html = '';
    //horizontal header
    this.entityGroup2.forEach(column => {
      rightHeaders += `<tr>`;
      for (let i = 0; i < this.entityGroup1.length - 1; i++) {
        rightHeaders = rightHeaders + `<th style="width: 10%;"> </th>`
      }
      rightHeaders += `<th style="width: 10%; text-align:center;" id="${column.id}">${column.name}</th>`
      //here iterate through the generated data for this column and add it as <th>

      let v = this.extractValues(this.entity2PaddingData, column.id);
      v.forEach(data => {
        const style = Object(data).style ? Object(data)?.style : "";
        rightHeaders += `<th  style="${style}" class="td-general-styling"><span>${Object(data).value}</span></th>`
      })

      rightHeaders += `</tr>`;
    });
    //vertical header
    leftHeaders += `<tr style="border-top: 1px solid #ddd">`
    this.entityGroup1.forEach(column => {
      leftHeaders += `<td style="width: 10%;text-align:center; font-weight: bold" id="${column.id}">${column.name}</td>`
    });
    leftHeaders += `</tr>`
    //here iterate through the generated data for this column and add it as <th>
    //but on the same row there should also be the full generated data
    //like <tr> -padding datas- + -data- </tr>
    //this.entityGroup1.forEach(column => {
      //leftHeaders == `<tr>`;
      leftHeaders += this.getEntity2PaddingData('a');
    //  leftHeaders += this.getMatrixData(column.id);
     // leftHeaders == `</tr>`;
    //});
    html += rightHeaders + leftHeaders;

    return html;
  }

  getEntity2PaddingData(column: any): string {
    let paddingData = `<tr>`;
    /*let v = this.extractValues(this.entity1PaddingData, column.id);
    v.forEach(data=> {
      const style = Object(data).style ? Object(data)?.style : "";
      paddingData += `<th  style="${style}" class="td-general-styling"><span>${Object(data).value}</span></th>`
    })*/
    Object.values(mockMatrix.entity2PaddingData).forEach(data => {
      Object.entries(data).forEach(([key, value]) => {
        const style = Object(value).style ? Object(value)?.style : "";
        paddingData += `<td  style="${style}" class="td-general-styling"><span>${Object(value).value}</span></td>`
      });
    });
    paddingData += this.getMatrixData(column.id);
    paddingData += `</tr>`
    return paddingData;
  }

  getMatrixData(id: any): string {
    //search in the full data array for the values where key === id
    const matrixData = '';
    return matrixData;
  }

  extractValues = (data: any, prefix: string) => {
    const values: any[] = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const innerData = data[key];
        for (const innerKey in innerData) {
          if (innerData.hasOwnProperty(innerKey) && innerKey.startsWith(prefix)) {
            values.push(innerData[innerKey]);
          }
        }
      }
    }
    return values;
  };

}
