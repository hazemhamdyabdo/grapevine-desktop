<script lang="ts" setup>
import { ref, computed } from 'vue'
import { dummyQuestionPreview, dummyMathQuestion, dummyImageQuestion } from '../data/dummyData'

const props = defineProps<{
  question: any
}>()

// Use dummy data if no question provided
const currentQuestion = computed(() => props.question || dummyQuestionPreview)

const studentAnswer = ref<any>({})
const copied = ref(false)

const formattedAnswers = computed(() =>
  currentQuestion.value.answers.map((answer) => {
    return {
      id: answer.id,
      type: answer.answer ? 'text' : 'image',
      value: answer.answer || answer.image || ''
    }
  })
)

const selectedImage = ref<string | null>(null)

function openImageFullScreen(imageUrl: string) {
  selectedImage.value = imageUrl
}

function closeImageFullScreen() {
  selectedImage.value = null
}

const copyCode = () => {
  navigator.clipboard.writeText(currentQuestion.value.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

// Demo: Switch between different question types
const questionTypes = [dummyQuestionPreview, dummyMathQuestion, dummyImageQuestion]
const currentQuestionIndex = ref(0)
const displayQuestion = computed(() => questionTypes[currentQuestionIndex.value])

const switchQuestion = () => {
  currentQuestionIndex.value = (currentQuestionIndex.value + 1) % questionTypes.length
}
</script>

<template>
  <section class="space-y-4">
    <!-- Demo Controls -->
    <div class="flex justify-center">
      <UButton @click="switchQuestion" variant="outline" size="sm">
        Switch Question Type ({{ currentQuestionIndex + 1 }}/{{ questionTypes.length }})
      </UButton>
    </div>

    <!-- Question -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-6 border-1 border-gray-200 rounded-3xl p-6 height"
    >
      <UCard
        variant="subtle"
        scrolling
        :ui="{
          header: 'h-full'
        }"
        :class="`bg-${
          displayQuestion.question ? 'neutral-100' : 'white'
        } border-0 rounded-3xl divide-y-0 min-w-1/2 text-base/10 p-0 md:p-4 question-height overflow-auto`"
      >
        <template #header>
          <div
            class="flex flex-col justify-between h-full text-black font-normal no-copy space-y-4"
          >
            <template v-if="displayQuestion.question">
              <!-- Math rendering would go here -->
              <div v-if="displayQuestion.question.includes('$$')" class="math-content">
                <p v-html="displayQuestion.question" />
                <small class="text-gray-500">(Math rendering would be processed here)</small>
              </div>
              <p v-else v-html="displayQuestion.question" />
            </template>
            <template v-if="displayQuestion.image">
              <img
                :src="displayQuestion.image"
                alt="question image"
                class="rounded-xl w-full h-fit"
              />
            </template>

            <!-- code -->
            <section>
              <p class="text-2xl rounded-xl px-4 py-2 flex items-center gap-2 justify-end">
                <span class="font-bold text-base md:text-xl ms-2">{{ displayQuestion?.code }}</span>
                <UIcon
                  @click="copyCode"
                  name="material-symbols:content-copy-outline"
                  class="cursor-pointer"
                  :title="copied ? 'Copied' : 'Copy Code'"
                  :class="copied ? 'text-green-500 font-semibold' : 'text-neutral-800'"
                />
              </p>
            </section>
          </div>
        </template>
      </UCard>

      <!-- answers -->
      <div class="space-y-3 grow min-w-1/2 question-height overflow-auto">
        <div
          v-for="(answer, index) in displayQuestion.answers.map((answer) => ({
            id: answer.id,
            type: answer.answer ? 'text' : 'image',
            value: answer.answer || answer.image || ''
          }))"
          :key="answer.id"
          @click="
            () => {
              studentAnswer = displayQuestion.answers[index]
            }
          "
          class="flex items-center ps-4 border bg-white border-gray-200 rounded-xl cursor-pointer relative hover:bg-gray-50"
        >
          <input
            :id="`bordered-radio-${index + 1}`"
            type="radio"
            :value="displayQuestion.answers[index].id"
            v-model="studentAnswer.id"
            @update:modelValue="studentAnswer = displayQuestion.answers[index]"
            name="bordered-radio"
            class="relative size-4 min-w-4 min-h-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-primary-500 checked:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <label
            :for="`bordered-radio-${index + 1}`"
            class="py-4 ms-2 text-sm font-medium text-neutral-900 label cursor-pointer"
          >
            <template v-if="answer.type === 'text'">
              <!-- Math rendering would go here -->
              <div v-if="answer.value.includes('$$')" class="math-content">
                <p v-html="answer.value" />
                <small class="text-gray-500">(Math rendering would be processed here)</small>
              </div>
              <p v-else v-html="answer.value" />
            </template>
            <template v-else>
              <div class="w-fit cursor-pointer">
                <img
                  :src="answer.value"
                  alt="answer image"
                  class="h-[100px] rounded-md object-contain"
                />
                <div
                  class="bg-neutral-200 w-8 h-8 rounded-full absolute top-8 right-0 -translate-x-1/2 -translate-y-1/2"
                  @click="openImageFullScreen(answer.value)"
                >
                  <UIcon name="material-symbols-light:expand-content" class="w-full h-full" />
                </div>
              </div>
            </template>
          </label>
        </div>
      </div>

      <!-- Fullscreen Image Modal -->
      <Teleport to="body" v-if="selectedImage">
        <Transition name="fade">
          <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            @click.self="closeImageFullScreen"
          >
            <img
              :src="selectedImage"
              alt="Fullscreen image"
              class="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </Transition>
      </Teleport>
    </section>
  </section>
</template>

<style scoped lang="scss">
.no-copy {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.question-height {
  max-height: calc(100vh - 260px);
}

.min-height {
  min-height: calc(100vh - 350px);
}

.math-content {
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid #007bff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
