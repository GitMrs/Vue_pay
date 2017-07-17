let shop = {
    template: '#shop',
    data: function () {
        return {
            count: 1,
            sum_price:0,
            freight:10,
            all_price:0
        }
    },
    props: {
        shop_name: {
            type: String,
            required: true
        },
        product_name: {},
        discount_price: {},
        product_price: {},
        count_limit:{},
        shop_id:{}
    },
    methods: {
        minus: function () {
            this.count > 1 ? this.count-- : this.count = 1;
        },
        plus:function () {
            this.count >= this.count_limit ? this.count = this.count_limit : this.count ++;
        },
        compute_price:function () {
            this.sum_price = this.count*this.discount_price;
            this.all_price = this.sum_price+this.freight;
        }
    },
    watch: {
        count:function (val,oldVal) {
            this.sum_price = val*this.discount_price;
            this.all_price = this.sum_price+this.freight;
			console.log(this.shop_id)
            eventBus.$emit('price',{
            	"id":this.shop_id,
            	"price":this.all_price
            })
        },
        discount_price:function (a,b) {
            this.compute_price();
            eventBus.$emit('price',this.all_price)
        }
    },
    mounted(){
    	this.compute_price()
    	 eventBus.$emit('price',{
            	"id":this.shop_id,
            	"price":this.all_price
            })
    }
}
