<template>
  <div>
    <Navigation/>
      <div class="skillsNav">
        <div class="innerlayout">
          <el-row :gutter="20">
            <el-col :span="12" :offset="6">
              <el-menu class="el-menu-demo"
                mode="horizontal"
                active-text-color="#ffd04b">
                <el-menu-item v-for="a in data"
                :key="a.title">
                <NuxtLink :to="`expertise/${a.slug}`">
                  <span>{{ a.title }}</span>
                </NuxtLink>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
      <nuxt/>
  </div>
</template>

<script>
import models from './skills/datamodels/stephen.js'
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
</script>
