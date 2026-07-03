<script setup lang="ts">
defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    :to="`/courses/${course.slug}`"
    class="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
  >
    <!-- Course Image -->
    <div class="overflow-hidden">
      <img
        :src="course.image"
        :alt="course.title"
        class="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
      />
    </div>

    <!-- Content -->
    <div class="p-5">
      <h2 class="text-xl font-bold text-gray-900 mb-3">
        {{ course.title }}
      </h2>

      <p class="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
        {{ course.overview }}
      </p>

      <!-- Levels -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="level in course.levels"
          :key="level"
          class="px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full"
        >
          {{ level }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>