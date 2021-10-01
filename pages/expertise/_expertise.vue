<template>
  <div>
    <Navigation/>
    <NuxtLink to="/skills">Back to home</NuxtLink>
    <InformationCards 
      :infoData="data">
    </InformationCards>
  </div>
</template>

<style> @import '~/assets/global-style.css'; </style>

<script>
import models from '../skills/datamodels/stephen'
export default {
  data() {
    return {
      expertise: models,
      dynamicRoutes: ''
    }
  },

  mounted(){

  },
  computed:{
    data() {
      return this.filterData()
    }
  },
  methods:{
    filterData(){
      let data = this.expertise.profile.map((element)=>{
        return element.expertise
      }).filter(a=>{
        return a != undefined
      })
      let infoData = data[0]
  
      let ads = infoData.map(a=>{
        return {
          description: a.description,
          title: a.title,
          gigs: a.gigs,
          trainings: a.trainings,
          slug: a.slug,
          skills: a.skills
        }
      })
       const filtered = ads.find((el) => el.slug === this.$route.params.expertise)
      return filtered
    }
  },
}
</script>