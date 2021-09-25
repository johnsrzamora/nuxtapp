import models from './datamodels/stephen'

export default {
  data() {
    return {
      dataModels: models
    }
  },
  
  computed: {
    model() {
      let mod = this.dataModels
      let data = mod.profile
      let datas = data.map(a=>{
        return a.developer
      })
     
      let mapGigs = datas.filter(b => {
        return b != undefined
      })

      

      let gigs = mapGigs[0].gigs
      let skills = mapGigs[0].skills
      return {
        gigs,
        skills
      }
    }
  },
  mounted(){
    console.log(this.model)
  }
}