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
    this.initializeData()
    this.createMatrix();
  }

  initializeData() {
    this.matrixName = mockMatrix.name;
    this.entityGroup1 = mockMatrix.entity1PaddingColumns;
    this.entityGroup2 = mockMatrix.entity2PaddingColumns;
    this.entity1PaddingData = Object.values(mockMatrix.entity1PaddingData);
    this.entity2PaddingData = Object.values(mockMatrix.entity2PaddingData);
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
      const style = column.nameStyle ? column?.nameStyle : "";
      rightHeaders += `<th style="${style}" id="${column.id}" class="td-general-styling">${column.name}</th>`
      //here iterate through the generated data for this column and add it as <th>

      let v = this.extractValuesAtTheSamePropertyInJson(this.entity2PaddingData, column.id);
      v.forEach(data => {
        const style = Object(data).nameStyle ? Object(data)?.nameStyle : "";
        rightHeaders += `<th  style="${style}" class="td-general-styling"><span>${Object(data).value}</span></th>`
      })
      rightHeaders += `</tr>`;
    });
    //vertical header
    leftHeaders += `<tr style="border-top: 1px solid #ddd">`
    this.entityGroup1.forEach(column => {
      const style = column.nameStyle ? column?.nameStyle : "";
      leftHeaders += `<td style="${style}" id="${column.id}" class="td-general-styling">${column.name}</td>`
    });
    leftHeaders += `</tr>`
    leftHeaders += this.getEntity1PaddingData();
    html += rightHeaders + leftHeaders;
    return html;
  }

  getEntity1PaddingData(): string {
    let paddingData = '';
    this.entity1PaddingData.forEach(data => {
      let entityData = `<tr>`;
      Object.values(data).forEach(d => {
        const style = Object(d).nameStyle ? Object(d)?.nameStyle : "";
        entityData += `<td  style="${style}" class="td-general-styling"><span>${Object(d).value}</span></td>`
      });
      entityData += `</tr>`
      // paddingData += this.getMatrixData(data); -> data for each si avem prima val
      paddingData += entityData
    });
    return paddingData;
  }

  getMatrixData(id: any): string {
    //search in the full data array for the values where key === id
    const matrixData = '';
    return matrixData;
  }

  extractValuesAtTheSamePropertyInJson = (data: any, prefix: string) => {
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
