import navroutes from '../../static/navroutes'

export default {
  data() {
    return {
      navRouting: navroutes,
      nav:'',
    }
  },

  computed:{

  },
  created(){
    this.animateNav()
  },

  mounted(){
    this.animateNav()
    this.nav = this.navRouting.routesettings[0].routes
    console.log(this.navRouting.routesettings)
    
  },
  methods:{
    animateNav(){
      this.$anime({
        // targets: '#etch1',
        // height: '70px', // -> from '28px' to '100%',
        // easing: 'easeInOutQuad',
        // direction:'alternate',
        // loop: true,
      })
    }
  }
}