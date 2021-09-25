export default {
  data() {
    return {
      skillsInfo: '',
      gigsInfo: '',
      color:'',
      infoModel:'',
      title: '',
      progressColors: [
        '#0dbab1',
        '#0db5ba',
        '#0da6ba',
        '#0d98ba',
        '#0d8aba'
      ]
    }
  },

  props: [
    'infoData'
  ],

  mounted() {
    let skills = this.infoData.skills
    let gigs = this.infoData.gigs

    this.skillsInfo = skills
    this.gigsInfo = gigs

    console.log(this.infoData)
  }

}