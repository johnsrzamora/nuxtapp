<template>
  <div>
    <div class="mainlayout">
      <div class="cardinnerlayout">
        <el-row :gutter="30">
          <el-col :span="24">
            <el-card :body-style="{ padding: '20px' }">
              <div style="padding: 20px;">
                <span>Skills</span>
                <div class="bottom clearfix">
                  <span>Information</span>
                  <el-button type="text" class="button">Operating</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card :body-style="{ padding: '20px' }">
              <div style="padding: 20px;">
                <span>Gigs</span>
                <div class="bottom clearfix">
                  <span>Information</span>
                  <el-button type="text" class="button">Operating</el-button>
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
