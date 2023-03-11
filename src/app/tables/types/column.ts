export class Column{
  columnType?: string| number | File | Date | boolean | {displayValue: string; url : string}|any;
  category?: string;
  name?: string;
  nameStyle?: string[];
  description?: string;
  descriptionStyle?: string[];
  id: number;
  level: number;
  childrenColumns: number[];
  parentColumns?: number[];
}
