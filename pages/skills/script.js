import models from './datamodels/stephen'

export default {
  data(){
    return {
      models
    }
  },
  computed: {
    model() {
      return this.models
    }
  },
  mounted(){
    console.log(this.model)
  }
}