<script lang="ts" setup>
import { ref, computed } from 'vue'
import { dummyQuestionStepperItems } from '../data/dummyData'

const props = defineProps<{
  readonly?: boolean
}>()

const currentPage = ref(1)
const lastPage = ref(2)
const timeRemaining = ref('42:07')

const getCurrentQuestionColor = (status: number, isActive: boolean) => {
  if (isActive) {
    return 'bg-neutral-900 text-white'
  } else if (status === 1) {
    return 'bg-neutral-200 '
  } else if (status === 2) {
    return 'bg-primary-500 text-white'
  } else {
    return 'bg-red-500 text-white'
  }
}

const countdownInSeconds = computed(() => {
  const [mins, secs] = timeRemaining.value.split(':').map(Number)
  return mins * 60 + secs
})

const handleNextPage = () => {
  if (currentPage.value === lastPage.value) return
  currentPage.value = Math.min(currentPage.value + 1, lastPage.value)
}

const handlePreviousPage = () => {
  if (currentPage.value === 1) return
  currentPage.value = Math.max(currentPage.value - 1, 1)
}
</script>

<template>
  <div
    :class="[
      'border-neutral-200 border-2 rounded-xl p-2 hidden md:flex',
      readonly ? 'h-15' : '',
      ' flex-wrap md:flex-nowrap gap-4 items-center'
    ]"
  >
    <template v-if="!readonly">
      <!-- Close Icon -->
      <UIcon name="material-symbols:close-rounded" size="24" class="cursor-pointer md:order-1" />

      <!-- Stepper -->
      <div
        class="flex-1 flex flex-wrap items-center gap-2 md:gap-2 lg:gap-2 md:flex-nowrap md:order-2 order-4"
      >
        <div
          v-for="(question, inx) in dummyQuestionStepperItems"
          :key="question.id"
          :class="[
            'rounded-full transition-all cursor-pointer xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-10 md:h-10 w-8 h-8 flex items-center justify-center text-sm font-bold text-neutral-900 hover:bg-primary-100 hover:text-primary-500',
            getCurrentQuestionColor(question.status, inx === 1)
          ]"
          style="width: 2.5rem; height: 2.5rem; flex: 0 0 auto"
        >
          {{ inx + 1 }}
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex items-center gap-2 md:gap-2 mt-2 md:mt-0 md:order-3">
        <UIcon
          name="pepicons-pop:angle-left-circle"
          :class="[currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']"
          @click="handlePreviousPage"
        />
        <p class="text-neutral-900 font-bold text-sm md:text-base">
          Page {{ currentPage }}/{{ lastPage }}
        </p>
        <UIcon
          name="pepicons-pop:angle-right-circle"
          :class="[currentPage === lastPage ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']"
          @click="handleNextPage"
        />
      </div>

      <UCard
        variant="soft"
        :class="`bg-${
          countdownInSeconds <= 600 ? 'red-100 text-red-500 border-1 border-red-200' : ''
        } rounded-2xl sm:p-0 border-none md:hidden`"
      >
        <template #header>
          <section class="flex gap-2 items-center sm:p-0">
            <UIcon
              name="material-symbols:timer"
              :class="`text-${countdownInSeconds <= 600 ? 'red-500' : 'neutral-500'}`"
            />
            <span class="text-2xl font-bold">{{ timeRemaining }}</span>
          </section>
        </template>
      </UCard>

      <!-- Dialog Button -->
      <div class="w-full md:w-auto mt-2 md:mt-0 md:order-4 flex justify-end md:justify-start">
        <UButton variant="ghost" color="skeleton" class="text-neutral-900" size="xl">
          All Questions
          <UIcon name="mage:chevron-down" size="24" />
        </UButton>
      </div>
    </template>
  </div>
</template>
