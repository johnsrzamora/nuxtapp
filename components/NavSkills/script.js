import models from '../../pages/skills/datamodels/stephen'
export default {
  data() {
    return {
      expertise: models,
    }
  },
  mounted(){
    console.log(this.data)
  },

  computed:{
    data() {
      let data = this.expertise.profile.map((element)=>{
        return element.expertise
      }).filter(a=>{
        return a != undefined
      })
      return data[0]
    }
  }
}