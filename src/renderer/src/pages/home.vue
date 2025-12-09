<script lang="ts" setup>
import QuestionPreview from '../dummy/questionPreview/index.vue'
import { onMounted, ref } from 'vue'

const questionPreview = ref()
const isLoading = ref(true)
const getPreviewQuestion = async () => {
  isLoading.value = false
}

const currentPage = ref(1)

onMounted(() => {
  try {
    getPreviewQuestion()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section class="space-y-6 flex flex-col min-h-screen pb-8">
    <QuestionPreview />
  </section>
</template>
