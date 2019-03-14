export class order_class{
    constructor(
    public o_price:number,
    public fk_email_id:string,
    public fk_address:string,
    public o_date?:Date,
    public o_id?:number
    ){
    }
}