<template>
  <div class="sectionContainer">
    <el-row>
      <el-col :span="16">
         <div class="titleSectionsDetails">
          <el-row>
            <el-col :span="8">
              Dev
            </el-col>
            <el-col :span="16">
              <div class="skillBar" :style="{background: '#851e3e'}"></div>
            </el-col>
          </el-row>        
        </div>
      </el-col>
      <el-col :span="8">
        <div class="titleSectionsContainer">
          <div class="titleSections">
            <span>{{title}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data(){
    return{
      title: this.secTitle,
      barVal: ['500', '400' , '300']
    }
  },
  props:[
    'secTitle'
  ],
  mounted(){
    this.animateTitle()
     this.animateBar()
  },
  methods:{
    animateTitle(){
      this.$anime({
        targets: '.titleSections',
        translateX: 5,
        opacity: ['.1', '1'],
        delay: this.$anime.stagger(60) ,
        duration: 5000,
      })
    },
     animateBar(){
      this.$anime({
        targets: '.skillBar',
        width: [this.barVal[0],this.barVal[1],this.barVal[2],], // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
      })
    }
  }
}

</script>