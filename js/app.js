let eventBus = new Vue();
new Vue({
    el:'.container',
    data:{
        title:'订单支付',
        plus_condition:'（含运费）',
        address_detail:"中国北京",
        phone_number:13213213221,
        person_name:'路飞',
        shop_name:'',
        product_name:'',
        discount_price:'',
        product_price:'',
        count_limit:10,
        pay_ways:{'reaward':5000,'award':50},
        goods_list:[]
    },
    components:{
        "order-footer":orderFooter,
        "address-detail":address,
        "shop-detail":shop,
        "pay-wrap":pay_wrap,
        "my-tip":tips
    },
    created:function () {

        axios.get('server/shop.json').then((result)=> {
            let res = result.data.res;
//          this.shop_name = res.shop;
//          this.product_name = res.product;
//          this.discount_price = res.discount_price;
//          this.price = res.price;
//          this.count_limit = res.reserved_count;
			this.goods_list = res
			console.log()
        });
    }
});