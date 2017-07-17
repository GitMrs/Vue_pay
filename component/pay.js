//let pay = {
//  props:['pay_way','reserved_money'],
//  template:`<div><p>
//                      <span>{{pay_way}} ￥<label>{{reserved_money}}</label></span>
//                  </p>
//             <input type="checkbox" id="name" class="checkbox"><label for="name" class="checkbox-label"></label></div>`
//};
let pay_wrap = {
    props:['pay_ways'],
    data(){
    	return {
    		reaward_state:false,
    		award_state:false,
    		obj:{}
    	}
    },
    template:`<div class="pay">
            <ol>
                <li >
					<div><p>
                        <span>余额支付 ￥<label>{{pay_ways.reaward}}</label></span>
                    </p>
               <input type="checkbox" v-model='reaward_state' id="index" class="checkbox"><label @click=send(Object.keys(pay_ways)[0],reaward_state) for="index" class="checkbox-label"></label></div>
                </li>
                 <li >
					<div><p>
                        <span>奖金支付 ￥<label>{{pay_ways.award}}</label></span>
                    </p>
               <input type="checkbox" v-model='award_state' id="index2" class="checkbox"><label @click=send(Object.keys(pay_ways)[1],award_state) for="index2" class="checkbox-label"></label></div>
                </li>
                <slot></slot>
            </ol>
        </div>`,
        mounted(){
        	console.log(this.pay_ways)
        },
        methods:{
        	send(data,state){
				if(data=='reaward'){
					if(!state){
						this.obj[data] = this.pay_ways.reaward
					}else{
						this.obj[data] = 0
					}
				}else{
					if(!state){
						this.obj[data] = this.pay_ways.award
					}else{
						this.obj[data] = 0
					}
				}
        		eventBus.$emit("prices",this.obj)
        	}
        }
};