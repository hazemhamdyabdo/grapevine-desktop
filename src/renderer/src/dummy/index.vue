<script setup>
// Demo navigation page for all dummy components
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">🎨 Dummy UI Components</h1>
        <p class="text-xl text-gray-600">
          Static UI components for development and testing purposes
        </p>
      </div>

      <!-- Component Cards -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Question Preview -->
        <div
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
            <h2 class="text-2xl font-bold text-white mb-2">📝 Question Preview</h2>
            <p class="text-blue-100">Complete question preview interface with all components</p>
          </div>

          <div class="p-6">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Question display with math support</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Answer selection interface</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Timer and navigation controls</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Loading states and skeletons</span>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200">
              <NuxtLink
                to="/dummy/questionPreview"
                class="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Demo
                <UIcon name="ic:outline-arrow-forward" class="ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Placeholder for future components -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden opacity-50">
          <div class="bg-gradient-to-r from-gray-400 to-gray-500 p-6">
            <h2 class="text-2xl font-bold text-white mb-2">🚧 More Components</h2>
            <p class="text-gray-100">Additional dummy components will be added here</p>
          </div>

          <div class="p-6">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span class="text-sm text-gray-500">Coming soon...</span>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200">
              <button
                disabled
                class="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-300 text-gray-500 font-medium rounded-lg cursor-not-allowed"
              >
                Not Available
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-12 text-center">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="font-semibold text-gray-900 mb-3">📋 Usage Instructions</h3>
          <div class="text-left max-w-2xl mx-auto space-y-2 text-sm text-gray-600">
            <p>
              <strong>Purpose:</strong> These dummy components are for UI development and testing
              without backend dependencies.
            </p>
            <p>
              <strong>Data:</strong> All components use static dummy data and don't make API calls.
            </p>
            <p>
              <strong>Styling:</strong> Components maintain the same styling as production
              components.
            </p>
            <p>
              <strong>Responsive:</strong> All components are fully responsive and work on
              mobile/desktop.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
