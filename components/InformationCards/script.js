export default {
  data() {
    return {
      skillsInfo: '',
      gigsInfo: '',
      color:'',
      infoModel:'',
      title: '',
      fill: "fill",
      size: '',
      url: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/71198018_2610727072271836_2048907169234944000_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGz7B7xcRptZB0N3te4Lwvnu9o_2HIKgDC72j_YcgqAMJFd7R686qNBMPKk1sUsrMQyGFFLmKapp6M0DnRfCtrh&_nc_ohc=5DmMLcivbe0AX9yOS9x&_nc_ht=scontent.fmnl25-1.fna&oh=c71a1caef8c1004b0b50c6d75ee94bea&oe=6174979A',
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

  computed:{
    data(){
      let data = this.infoData
      this.skillsInfo = data.skills
      this.gigsInfo = data.gigs
      console.log(data)
    }
  },

  mounted() {
    let data = this.infoData
    this.skillsInfo = data.skills
    this.gigsInfo = data.gigs
    console.log(data)
  }

}

