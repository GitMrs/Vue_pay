let tips= {
	data(){
		return {
			state:false
		}
	},
	template:`
			  <div class="tips">
			    <transition>
					<p v-if=this.state>金额不足，请选择其他支付方式!</p>
				</transition>
			  </div>
			  `,
	mounted(){
		eventBus.$on("state",(state)=>{
			this.state = state;
			setTimeout(()=>{
				this.state = false
			},5000)
		})
	}
}
