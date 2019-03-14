export class billdetail_class{
    constructor(
        public billdetail_id:number,
        public fk_bill_id:number,
        public fk_p_id:number,
        public price:number,
        public qty:number,
        public p_id:number,
        public p_name:string,
        public p_price:number,
        public p_img:string,
        public fk_cusine_id:number
    ){}
}