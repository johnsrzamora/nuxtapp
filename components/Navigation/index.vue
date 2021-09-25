<template>
    <div class="navigationpane">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <NuxtLink to="/">Home</NuxtLink>
        </el-menu-item>
        <el-menu-item index="2">
          <NuxtLink to="/skills">Skills</NuxtLink>
        </el-menu-item>
        <el-menu-item index="3">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
</template>