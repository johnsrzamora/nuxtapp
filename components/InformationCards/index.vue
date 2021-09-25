<template>
  <div>
    <div class="mainlayout">
      <div class="cardinnerlayout">
        <el-row :gutter="30">
          <el-col :span="12">
            <el-card :body-style="{ padding: '5px' }">
              <div style="padding: 20px;">
                <span><h2><b>Skills</b></h2></span>
                <div class="bottom clearfix" >
                  <div v-for="data in skillsInfo"
                    :key="data.sname"
                     style="padding: 10px;">
                    <span>{{data.sname}}</span>
                    <el-progress 
                      :text-inside="false" 
                        :stroke-width="10" 
                        stroke-linecap="square"
                        :percentage="data.rate" 
                        color="#0db5ba">
                    </el-progress>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card :body-style="{ padding: '20px' }">
              <div style="padding: 20px;">
                <span><b>Gigs</b></span>
                <div class="bottom clearfix">
                   <div v-for="data in gigsInfo"
                    :key="data"
                    style="padding: 20px;">
                      <span>{{data}}</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style> @import '~/assets/global-style.css'; </style>
<script src="./script.js"></script>
