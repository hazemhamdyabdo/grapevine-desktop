<script lang="ts" setup>
import QuestionPreview from '../dummy/questionPreview/index.vue'

const closeApp = () => {
  window.appControl?.closeApp()
}
</script>

<template>
  <UButton @click="closeApp">Close App</UButton>
  <section class="space-y-6 flex flex-col min-h-screen pb-8">
    <QuestionPreview />
  </section>
</template>
