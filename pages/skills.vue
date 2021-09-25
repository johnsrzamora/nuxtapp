<template>
  <div>
    <Navigation/>
      <div class="skillsNav">
        <div class="innerlayout">
          <el-row :gutter="20">
            <el-col :span="12" :offset="6">
              <el-menu class="el-menu-demo" mode="horizontal"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                  <NuxtLink to="/skills/developer">
                    <i class="el-icon-s-platform"></i>
                  </NuxtLink>
                </el-menu-item>
                <el-menu-item index="2">
                  <NuxtLink to="/skills/multimedia">
                    <i class="el-icon-video-camera"></i>
                  </NuxtLink>
                </el-menu-item>
                <el-menu-item index="3">
                  <NuxtLink to="/skills/musician">
                    <i class="el-icon-headset"></i>
                  </NuxtLink>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {}
</script>
