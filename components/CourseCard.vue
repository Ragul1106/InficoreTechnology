<script setup lang="ts">
interface Course {
  slug: string;
  title: string;
  image: string;
  available: boolean;
  duration: string;
  mode: string;
  certificate: boolean;
  projects: string;
  placement: boolean;
  overview: string;
  levels: string[];
}

const props = defineProps<{
  course: Course;
}>();

const emit = defineEmits<{
  (e: "coming-soon", title: string): void;
}>();

const comingSoon = () => {
  emit("coming-soon", props.course.title);
};
</script>

<template>
  <div
    :class="[
      'group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500',
      course.available ? 'hover:shadow-2xl hover:-translate-y-2' : 'opacity-90',
    ]"
  >
    <!-- Image -->
    <div class="overflow-hidden rounded-t-3xl">
      <img
        :src="course.image"
        :alt="course.title"
        loading="lazy"
        class="w-full h-82 object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex justify-between items-center mb-5">
        <span
          class="bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full"
        >
          🎓 Certified Course
        </span>

        <span
          class="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full"
        >
          ⏱ {{ course.duration }}
        </span>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 leading-snug mb-4">
        {{ course.title }}
      </h2>

      <p class="text-gray-600 leading-7 line-clamp-3 mb-6">
        {{ course.overview }}
      </p>

      <!-- Levels -->
      <div v-if="course.levels?.length" class="mb-6 flex flex-wrap gap-2">
        <span
          v-for="level in course.levels"
          :key="level"
          class="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700"
        >
          {{ level }}
        </span>
      </div>

      <!-- Features -->
      <div class="space-y-3 text-sm text-gray-700">
        <!-- Feature 1 -->
        <div class="flex items-center gap-3">
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <span>Online & Offline Training</span>
        </div>

        <!-- Feature 2 -->
        <div class="flex items-center gap-3">
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <span>Industry Expert Mentors</span>
        </div>

        <!-- Feature 3 -->
        <div class="flex items-center gap-3">
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <span>{{ course.projects }}</span>
        </div>

        <!-- Feature 4 -->
        <div class="flex items-center gap-3">
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <span>Course Completion Certificate</span>
        </div>

        <!-- Feature 5 -->
        <div v-if="course.placement" class="flex items-center gap-3">
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <span>Placement Assistance</span>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-8 flex items-center justify-between border-t pt-5">
        <div>
          <p class="text-xs uppercase tracking-wide text-gray-400">Mode</p>

          <p class="font-semibold text-slate-800">
            {{ course.mode }}
          </p>
        </div>

        <NuxtLink
          v-if="course.available"
          :to="`/courses/${course.slug}`"
          class="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
        >
          View Details

          <svg
            class="h-5 w-5 transition group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </NuxtLink>

        <button
          v-else
          @click="comingSoon"
          class="inline-flex items-center gap-2 rounded-xl bg-gray-400 px-5 py-3 font-semibold text-white transition hover:bg-gray-500"
        >
          Coming Soon
        </button>
      </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
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
    
    <div class="overflow-hidden">
      <img
        :src="course.image"
        :alt="course.title"
        class="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
      />
    </div>

    <div class="p-5">
      <h2 class="text-xl font-bold text-gray-900 mb-3">
        {{ course.title }}
      </h2>

      <p class="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
        {{ course.overview }}
      </p>

   
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
</template> -->
