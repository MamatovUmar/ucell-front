<template>
  <div>
    <el-upload
        ref="upload"
        class="upload-demo"
        action="http://localhost:4000/api/load"
        :limit="1"
        :on-exceed="handleExceed"
        :auto-upload="false"
    >
      <template #trigger>
        <el-button type="primary">select file</el-button>
      </template>
      <el-button class="ml-3" type="success" @click="submitUpload">
        upload to server
      </el-button>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}


</script>

<style lang="scss">
.ml-3 {
  margin-left: 20px;
}
</style>