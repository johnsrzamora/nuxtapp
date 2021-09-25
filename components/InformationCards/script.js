export default {
  data() {
    return {
      skillsInfo: '',
      gigsInfo: ''
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