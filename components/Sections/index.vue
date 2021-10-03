<template>
  <div class="sectionContainer">
    <div class="titleSections">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      title: this.secTitle
    }
  },
  props:[
    'secTitle'
  ],
  mounted(){
    this.animateTitle()
  },
  methods:{
    animateTitle(){
      this.$anime({
        targets: '.titleSections',
        translateX: 270,
        opacity: ['.1', '1'],
        delay: this.$anime.stagger(150) ,
        duration: 5000,
      })
    }
  }
}

</script>