<script setup lang="ts">
import { RouterView } from 'vue-router'

function importFile(e) {
  console.log(123, e)
}
</script>

<template>
  <main>
    <el-menu
        mode="horizontal"
        :ellipsis="false"
        router
    >
      <el-menu-item index="/">
        Home
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="/import">
          Import
      </el-menu-item>

    </el-menu>

    <el-main>
      <RouterView />
    </el-main>

  </main>
</template>

<style scoped>

</style>
