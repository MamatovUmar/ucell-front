<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column prop="region" label="Region" />
      <el-table-column prop="total_subscribers" label="Subscribers" />
    </el-table>
  </div>
</template>

<script setup lang="ts">

import {ref, onMounted} from "vue";
import {useAxios} from "@/composables/useAxios";

const tableData = ref<any[]>([])

async function getSummary() {
  try {
    const res = await useAxios<any>('/summary')
    if (res.status) {
      tableData.value = res.data
    }
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  await getSummary()
})

</script>

<style scoped lang="scss">

</style>