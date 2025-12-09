<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
const props = defineProps<{
  page?: number
  readonly?: boolean
}>()

const currentPage = ref(props.page || 1)
const timeRemaining = ref('42:07')

const isBtnDisabled = computed(() => currentPage.value === 1 || props.readonly)

const handlePrevQuestion = () => {
  if (!isBtnDisabled.value) {
    currentPage.value = Math.max(1, currentPage.value - 1)
  }
}

const handleNextQuestion = () => {
  if (!props.readonly) {
    currentPage.value = currentPage.value + 1
  }
}

const handleSkipQuestion = () => {
  if (!props.readonly) {
    console.log('Skip question clicked')
  }
}

// Demo timer countdown
const startTimer = () => {
  const timer = setInterval(() => {
    const [mins, secs] = timeRemaining.value.split(':').map(Number)
    let totalSeconds = mins * 60 + secs

    if (totalSeconds > 0) {
      totalSeconds--
      const newMins = Math.floor(totalSeconds / 60)
      const newSecs = totalSeconds % 60
      timeRemaining.value = `${newMins}:${newSecs.toString().padStart(2, '0')}`
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})
</script>

<template>
  <div class="space-y-4">
    <!-- Demo Controls -->
    <div class="flex justify-center gap-4">
      <UButton
        @click="currentPage = Math.max(1, currentPage - 1)"
        variant="outline"
        size="sm"
        :disabled="currentPage === 1"
      >
        Simulate Prev Page
      </UButton>
      <UButton @click="currentPage = currentPage + 1" variant="outline" size="sm">
        Simulate Next Page
      </UButton>
      <UButton @click="timeRemaining = '05:30'" variant="outline" size="sm" color="red">
        Set Low Time (Demo)
      </UButton>
    </div>

    <!-- Action Bar -->
    <div class="flex justify-between items-center">
      <UButton
        :disabled="isBtnDisabled"
        size="xl"
        variant="outline"
        :class="`${
          isBtnDisabled
            ? 'cursor-not-allowed bg-neutral-300 text-neutral-300'
            : 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 text-white '
        }`"
        :color="isBtnDisabled ? 'neutral' : 'primary'"
        @click="handlePrevQuestion"
      >
        <UIcon name="ic:outline-keyboard-arrow-left" size="24" />
        Previous Question
      </UButton>

      <UCard variant="subtle" class="bg-neutral-100 rounded-2xl sm:p-0">
        <template #header>
          <section class="flex gap-2 items-center sm:p-0">
            <UIcon
              name="material-symbols:timer"
              :class="
                timeRemaining.split(':')[0] === '05' ||
                timeRemaining.split(':')[0] === '04' ||
                timeRemaining.split(':')[0] === '03' ||
                timeRemaining.split(':')[0] === '02' ||
                timeRemaining.split(':')[0] === '01' ||
                timeRemaining.split(':')[0] === '00'
                  ? 'text-red-500'
                  : 'text-neutral-500'
              "
            />
            <span
              class="text-2xl font-bold"
              :class="
                timeRemaining.split(':')[0] === '05' ||
                timeRemaining.split(':')[0] === '04' ||
                timeRemaining.split(':')[0] === '03' ||
                timeRemaining.split(':')[0] === '02' ||
                timeRemaining.split(':')[0] === '01' ||
                timeRemaining.split(':')[0] === '00'
                  ? 'text-red-500'
                  : ''
              "
            >
              {{ timeRemaining }}
            </span>
          </section>
        </template>
      </UCard>

      <div class="flex gap-2 items-center">
        <UButton
          :disabled="isBtnDisabled"
          :color="isBtnDisabled ? 'neutral' : 'primary'"
          class="text-neutral-900 w-[163px]"
          size="xl"
          variant="ghost"
          @click="handleSkipQuestion"
        >
          Skip
        </UButton>
        <UButton
          size="xl"
          :class="`${
            isBtnDisabled
              ? 'cursor-not-allowed  text-neutral-400 bg-[#E6E6E6]'
              : 'bg-primary-500 text-white'
          }`"
          :disabled="isBtnDisabled"
          :color="isBtnDisabled ? 'neutral' : 'primary'"
          @click="handleNextQuestion"
        >
          Next Question
          <UIcon name="ic:outline-keyboard-arrow-right" size="24" />
        </UButton>
      </div>
    </div>
  </div>
</template>
