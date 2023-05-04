export class Column{
  name : string;
  id:string;
  sortable:boolean;
  type:string;
  borderL:boolean;
  borderR :boolean;
  borderB: boolean;
  childrenColumns : Column[]
}
