<template>
  <div class="navigationpane">
    <div class="mainColor">
      <div class="colorContainer">
        <el-row >
          <el-col 
            v-for="r in nav"
              :span="8"
              :key="r.rname">
              <NuxtLink :to="r.rname">
                 <div class="linkColorHolder" 
                  :style="{background: r.rcolor}">
                  </div>
              </NuxtLink>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<style> @import '~/assets/global-style.css'; </style>
<script src="./script.js"></script>