<script lang="ts" setup>
import { dummyQuestionPreview } from './data/dummyData'
import DummyEvaluateQuizLoader from './components/DummyEvaluateQuizLoader.vue'
import DummyEvaluateQuizStepper from './components/DummyEvaluateQuizStepper.vue'
import DummyPreviewQuestion from './components/DummyPreviewQuestion.vue'
import DummyPreviewAction from './components/DummyPreviewAction.vue'
import { ref } from 'vue'

// Demo state management
const questionPreview = ref(dummyQuestionPreview)
const isLoading = ref(false)
const currentPage = ref(1)

// Demo controls
const toggleLoading = () => {
  isLoading.value = !isLoading.value
}

const simulateDataLoad = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    questionPreview.value = dummyQuestionPreview
  }, 2000)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- Demo Header -->
    <div class="max-w-7xl mx-auto mb-6">
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">🎯 Question Preview - Dummy UI Demo</h1>
        <p class="text-gray-600 mb-4">
          This is a dummy version of the preview-question page with all its child components. It
          uses static data and simulates the real functionality for UI testing purposes.
        </p>

        <!-- Demo Controls -->
        <div class="flex flex-wrap gap-4">
          <UButton @click="toggleLoading" variant="outline">
            {{ isLoading ? 'Hide' : 'Show' }} Loading State
          </UButton>
          <UButton @click="simulateDataLoad" variant="outline" color="primary">
            Simulate Data Loading (2s)
          </UButton>
          <UButton
            @click="currentPage = currentPage === 1 ? 2 : 1"
            variant="outline"
            color="primary"
          >
            Toggle Page ({{ currentPage }})
          </UButton>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto">
      <section class="space-y-6 flex flex-col min-h-screen pb-8">
        <!-- Loading State -->
        <DummyEvaluateQuizLoader
          v-if="isLoading || (!Object.keys(questionPreview).length && questionPreview)"
        />

        <!-- Main Content -->
        <template v-else>
          <!-- Stepper -->
          <DummyEvaluateQuizStepper readonly />

          <!-- Question -->
          <DummyPreviewQuestion :question="questionPreview" class="flex-1" />

          <!-- Actions -->
          <DummyPreviewAction readonly :page="currentPage" />
        </template>
      </section>
    </div>

    <!-- Footer Info -->
    <div class="max-w-7xl mx-auto mt-8">
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 class="font-semibold text-blue-900 mb-2">📝 Component Structure:</h3>
        <ul class="text-blue-800 space-y-1 text-sm">
          <li><strong>DummyEvaluateQuizLoader:</strong> Skeleton loading state</li>
          <li>
            <strong>DummyEvaluateQuizStepper:</strong> Question navigation stepper (readonly mode)
          </li>
          <li>
            <strong>DummyPreviewQuestion:</strong> Question display with answers (supports text,
            math, images)
          </li>
          <li>
            <strong>DummyPreviewAction:</strong> Navigation and timer controls (readonly mode)
          </li>
        </ul>

        <h3 class="font-semibold text-blue-900 mb-2 mt-4">🎮 Features Demonstrated:</h3>
        <ul class="text-blue-800 space-y-1 text-sm">
          <li>• Loading states and skeleton UI</li>
          <li>• Question types: Text, Math equations ($$), Images</li>
          <li>• Answer selection with radio buttons</li>
          <li>• Image fullscreen modal</li>
          <li>• Timer countdown with color changes</li>
          <li>• Responsive design (mobile/desktop)</li>
          <li>• Copy question code functionality</li>
          <li>• Question stepper with status indicators</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styling if needed */
</style>
