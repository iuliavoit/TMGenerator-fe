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
  entity2Targets: any;
  valueComputersKeys: string[];
  valueComputersFullData: any;
  matrixSourceTargetData: any;
  transposeButtonText: string = 'Transpose Matrix';

  constructor() {
  }

  ngOnInit(): void {
    this.initializeData();
    this.setDropdownValues();
    this.createMatrix();
  }

  initializeData() {
    this.transposeButtonText = 'Transpose Matrix';
    this.valueComputersKeys = [];
    this.valueComputersKeys = [...Object.keys(mockMatrix.data)];
    this.matrixSourceTargetData = mockMatrix.data[this.valueComputersKeys[0]];
    this.valueComputersFullData = mockMatrix.data;
    this.matrixName = mockMatrix.name;
    this.entityGroup1 = mockMatrix.entity1PaddingColumns;
    this.entityGroup2 = mockMatrix.entity2PaddingColumns;
    this.entity1PaddingData = mockMatrix.entity1PaddingData;
    this.entity2PaddingData = Object.values(mockMatrix.entity2PaddingData);
    this.entity2Targets = Object.keys(mockMatrix.entity2PaddingData);
  }

  initializeTransposeData() {
    this.transposeButtonText = 'Original Matrix';
    this.valueComputersKeys = [];
    this.valueComputersKeys = [...Object.keys(mockMatrix.data)];
    this.matrixSourceTargetData = mockMatrix.data[this.valueComputersKeys[0]];
    this.valueComputersFullData = mockMatrix.data;
    this.matrixName = mockMatrix.name;
    this.entityGroup1 = mockMatrix.entity2PaddingColumns;
    this.entityGroup2 = mockMatrix.entity1PaddingColumns;
    this.entity1PaddingData = mockMatrix.entity2PaddingData;
    this.entity2PaddingData = Object.values(mockMatrix.entity1PaddingData);
    this.entity2Targets = Object.keys(mockMatrix.entity1PaddingData);
  }

  setDropdownValues() {
    const dropdown = document.getElementById('myDropdown') as HTMLSelectElement;
    if (dropdown) {
      this.valueComputersKeys.forEach((key, index) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        dropdown.appendChild(option);
        if (index === 0) {
          dropdown.value = key;
        }
      });
      dropdown.addEventListener('change', (event) => {
        const target = event.target as HTMLSelectElement;
        this.setMatrixSourceTargetData(target.value);
      });
    }
  }

  setMatrixSourceTargetData(key: string) {
    this.matrixSourceTargetData = this.valueComputersFullData[key];
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
      const style = column.nameStyle ? column?.nameStyle : "";
      rightHeaders += `<th style="${style}" id="${column.id}" class="td-general-styling">${column.name}</th>`

      // iterate through the generated data for this column and add it as <th>
      let v = this.extractValuesAtTheSamePropertyInJson(this.entity2PaddingData, column.id);
      v.forEach(data => {
        const style = Object(data).style ? Object(data)?.style : "";
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
    Object.keys(this.entity1PaddingData).forEach(key => {
      let entityData = `<tr>`;
      let keyData = this.entity1PaddingData[key];
      Object.values(keyData).forEach(d => {
        const style = Object(d).style ? Object(d)?.style : "";
        entityData += `<td  style="${style}" class="td-general-styling"><span>${Object(d).value}</span></td>`
      });
      entityData += this.getLinkedData(key);
      paddingData += entityData;
    })
    return paddingData;

  }

  getLinkedData(sourceId: any): string {
    let linkedData = ``;
    this.entity2Targets.forEach(targetId => {
      const data = this.matrixSourceTargetData.find(data => data.target === targetId && data.source === sourceId);
      if (data) {
        linkedData += `<td style="${data?.style}" class="td-general-styling">${data.value}</td>`
      }
    });
    return linkedData
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

  calculateMatrixTranspose() {
    const dropdown = document.getElementById('myDropdown') as HTMLSelectElement;
    dropdown.value = this.valueComputersKeys[0];
    if (this.transposeButtonText === 'Transpose Matrix') {
      this.initializeTransposeData();
      this.createMatrix();
    } else {
      this.initializeData();
      this.createMatrix();
    }
  }

}
