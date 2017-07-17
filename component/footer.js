let orderFooter = {
    props: {
        plus_condition: {
            type: [String]
        },
        price:[]
    },
    data:function () {
        return {
            total_price:0,
            fanily_price:{},
            pay_obj:{}
        }
    },
    template: `
    		<footer>
            <p><span>总计：￥<label>{{sum_price}}</label></span><span>{{plus_condition}}</span></p>
            <p @click="submit_order">提交订单</p>
			</footer>
			`,
    methods: {
        submit_order: function () {
//         console.log(this.pay_obj)
			let pay_count = 0;
           for(let i in this.pay_obj){
           		pay_count+=this.pay_obj[i]
           }
           if(pay_count<this.sum_price){
           		eventBus.$emit("state",true)
           }else{
           		alert("支付去吧")
           }
        }
    },
    computed: {
        sum_price:function () {
            eventBus.$on('price', (data)=> {
            	this.fanily_price[data.id] = data.price
            	let start = 0
                for(var i in Object.values(this.fanily_price)){
                	start +=Object.values(this.fanily_price)[i]
                }
               	 this.total_price = start
            });
            return this.total_price
        }
    },
    mounted(){
    	eventBus.$on('prices', (data)=> {
            	this.pay_obj = data
           });
    }
    
};