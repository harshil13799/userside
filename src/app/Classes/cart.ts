export class cart_class{
    constructor(public fk_email_id:string,
        public c_price:number,
        public fk_p_id:number,
        public fk_p_name:string,
        public c_qty:number,
        public fk_p_img:string,
        public fk_p_mfg:string,
        public fk_cat_id:number,
        public fk_p_price:number,
        public qty?:number,
    public  c_id?:number
    ){}
}