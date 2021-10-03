<template>
  <div class="navigationpane">
    <div class="mainColor">
      <div class="colorContainer">
        <el-row >
          <el-col :span="18">
             <div class="logo">
               <span>SZ</span>
             </div>
          </el-col>
          <el-col 
            v-for="r in nav"
              :span="2"
              :key="r.rname">
              <NuxtLink :to="r.rname">
                  <div class="linkColorHolder">
                    <h5>{{r.name}}</h5>
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