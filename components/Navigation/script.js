import navroutes from '../../static/navroutes'

export default {
  data() {
    return {
      navRouting: navroutes,
      nav:''
    }
  },

  mounted(){
    this.nav = this.navRouting.routesettings[0].routes
    console.log(this.navRouting.routesettings)
  }
}