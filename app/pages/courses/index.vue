<script setup lang="ts">
import { courses } from "../../../data/courses"
</script>

<template>
  <section class="py-16 px-6 md:px-12">
    <h1 class="text-4xl font-bold mb-10 text-center">
      Our Courses
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <NuxtLink
        v-for="course in courses"
        :key="course.slug"
        :to="`/courses/${course.slug}`"
        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        <!-- Image Section -->
        <div class="w-full h-56 md:h-64 overflow-hidden bg-gray-100">
          <img
            :src="course.image"
            :alt="course.title"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <!-- Content Section -->
        <div class="p-5">
          <h2 class="text-xl font-bold mb-3 text-gray-900">
            {{ course.title }}
          </h2>

          <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {{ course.overview }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>