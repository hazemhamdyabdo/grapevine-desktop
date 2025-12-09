<template>
  <!-- Skeleton Loader Wrapper -->
  <div class="animate-pulse space-y-6 p-6">
    <!-- Top Navigation (Stepper) -->
    <div class="flex flex-wrap items-center gap-2 justify-between">
      <div class="flex flex-wrap gap-2 justify-between grow">
        <div
          v-for="n in 20"
          :key="n"
          class="w-8 h-8 rounded-full bg-gray-300"
        ></div>
      </div>
      <div class="flex items-center gap-4">
        <div class="w-20 h-5 bg-gray-300 rounded"></div>
        <div class="w-24 h-5 bg-gray-300 rounded"></div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
      <!-- Left: Question Content -->
      <div class="col-span-7 bg-gray-100 p-6 rounded-lg min-height">
        <div class="h-6 w-40 bg-gray-300 rounded mb-4"></div>
        <div class="h-5 w-1/2 bg-gray-200 rounded mb-2"></div>
        <div class="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div class="h-5 w-2/3 bg-gray-200 rounded"></div>
      </div>

      <!-- Right: Answer Options -->
      <div class="col-span-5 flex flex-col gap-4">
        <div
          v-for="i in 4"
          :key="i"
          class="h-12 w-full bg-gray-200 rounded"
        ></div>
      </div>
    </div>

    <!-- Bottom Panel -->
    <div class="flex items-center justify-between mt-auto">
      <div class="w-40 h-10 bg-gray-200 rounded"></div>
      <div class="flex items-center gap-6">
        <div class="w-16 h-10 bg-gray-200 rounded"></div>
        <div class="w-32 h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.height {
  max-height: calc(100vh - 200px);
}

.min-height {
  min-height: calc(100vh - 350px);
}
</style>
