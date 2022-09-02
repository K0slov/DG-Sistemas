export class ApiListModel {
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }
  id: number;
  title!: string;
  body!: string;
  provider: string;

  constructor(){
    this.id = 2;
    this.title = "";
    this.body = "";
    this.provider = "";
  }
}
