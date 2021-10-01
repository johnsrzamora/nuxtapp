<template>
  <div>
    <div class="skillsNav">
      <div class="innerlayout">
        <el-row :gutter="5">
          <el-col :span="8"
            v-for="a in data"
            :key="a.title"
            :router="true">
            <div class="firstContainer">
              <NuxtLink :to="`/expertise/${a.slug}`">
                <span>{{ a.title }}</span>
              </NuxtLink>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>