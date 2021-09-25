<template>
  <div>
    <div class="mainlayout">
      <div class="cardinnerlayout">
       
        <el-row :gutter="30">
          <el-col :span="24">
            <el-card :body-style="{ padding: '5px' }">
              <div style="padding:30px;">
                <span><h2><b>Skills</b></h2></span>
                 <el-collapse v-model="infoModel" 
                    v-for="(data, index) in skillsInfo"
                    :key="data.sname">
                  
                    <el-collapse-item>
                     
                      <template slot="title">
                        <div class="progressBars">
                          <span><h4>{{data.sname}}</h4></span>
                          <div class="progressBarholder">
                            <el-progress :text-inside="false" 
                              :stroke-width="10" 
                              :show-text="false"
                              :percentage="data.rate" 
                              :color="progressColors[index]">
                            </el-progress>
                          </div>
                       
                        </div>
                      </template>
                    
                      <div>{{data.description}}</div>
                    </el-collapse-item>
                  </el-collapse>
              </div>
            </el-card>
           
          </el-col>
          <el-col :span="24">
            <el-card :body-style="{ padding: '20px' }">
              <div style="padding: 20px;">
                <span><b>Gigs</b></span>
                    <el-timeline>
                      <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                          <h4>Update Github template</h4>
                          <p>Tom committed 2018/4/12 20:46</p>
                        </el-card>
                      </el-timeline-item>
                    </el-timeline>
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
