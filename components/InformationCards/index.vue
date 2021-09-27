<template>
  <div>
    <div class="mainlayout">
      <div class="cardinnerlayout">
        <el-row :gutter="0">
          <el-col :span="24">
            <el-card :body-style="{ padding: '5px'}">
              <el-row>
                <el-col :span="12">
                  <div style="padding: 20px">
                    <div class="avatarHolder">
                       <el-avatar shape="circle" :size="200" :fit="fill" :src="url"></el-avatar>
                       <span><h2><b>Stephen Zamora</b></h2></span>
                       <span><h3>Jr. Web Developer</h3></span>
                    </div>
                  </div>
                </el-col>
              <el-col :span="12">
                <div style="padding: 20px">
                  <span><h2><b>Skills</b></h2></span>
                    <el-collapse v-for="(data, index) in skillsInfo"
                      :key="data.sname"
                      accordion>
                      <el-collapse-item >
                        <template slot="title">
                          <div class="progressBars">
                            <span><h3>{{data.sname}}</h3></span>
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
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          
          <el-col :span="24">
            <el-card :body-style="{ padding: '20px'}">
              <div style="padding: 20px;">
                <span><b>Gigs</b></span>
                <el-timeline>
                  <el-timeline-item timestamp="2018/4/12" 
                    placement="top"
                    v-for="(data, index) in gigsInfo"
                    :color="progressColors[index]"
                    :key="data">
                    <el-card>
                      <h4>{{data}}</h4>
                      <p>Tom committed 2018/4/12 20:46</p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
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
