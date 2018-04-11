export class Order{
	
      ordernumber:number;
      ordername: string;
      orderstatus:string;


      constructor(ordernumber:number,ordername:string,orderstatus:string){

          this.ordernumber = ordernumber;
          this.ordername = ordername;
          this.orderstatus = orderstatus;

      }

}