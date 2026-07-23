<script setup lang="ts">
// Card that displays a single course's summary in the courses list.
import {
  BadgeCheck,
  Clock3,
  Users,
  Star,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
} from "lucide-vue-next";

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

  totalSeats: number;
  seatsLeft: number;
  enrolledThisWeek: number;
  nextBatch: string;
  rating: number;
  reviews: number;
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
    <div class="relative overflow-hidden rounded-t-3xl">
      <img
        :src="course.image"
        :alt="course.title"
        loading="lazy"
        class="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex justify-between items-center mb-5">
        <div
          class="flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700"
        >
          <BadgeCheck class="h-4 w-4" />
          <span>Certified Course</span>
        </div>

        <div
          class="flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700"
        >
          <Clock3 class="h-4 w-4" />
          <span>{{ course.duration }}</span>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 leading-snug mb-4">
        {{ course.title }}
      </h2>

      <div class="grid grid-cols-2 gap-3 mb-6">
        <div class="rounded-xl border border-red-100 bg-red-50 p-4">
          <div class="flex items-center gap-2">
            <Users class="h-5 w-5 text-red-600" />

            <span class="text-sm font-medium text-red-600"> Seats Left </span>
          </div>

          <p class="mt-2 text-4xl font-bold text-red-700">
            {{ course.seatsLeft }}
          </p>

          <p class="text-xs text-red-500">
            Out of {{ course.totalSeats }} seats
          </p>
        </div>

        <div class="rounded-xl bg-green-50 border border-green-100 p-3">
          <p class="text-xs text-green-600 font-medium">Joined This Week</p>

          <p class="text-6xl mx-5 font-bold text-green-700">
            {{ course.enrolledThisWeek }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-1 mb-5">
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />

        <span class="ml-2 font-semibold">
          {{ course.rating }}
        </span>

        <span class="text-gray-500 text-sm">
          ({{ course.reviews }} Reviews)
        </span>
      </div>

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
      <div class="space-y-3 text-sm text-gray-700 mb-5">
        <!-- Feature 1 -->
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600" />
          <span>Online & Offline Training</span>
        </div>

        <!-- Feature 2 -->
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600" />
          <span>Industry Expert Mentors</span>
        </div>

        <!-- Feature 3 -->
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600" />
          <span>{{ course.projects }}</span>
        </div>

        <!-- Feature 4 -->
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600" />
          <span>Course Completion Certificate</span>
        </div>

        <!-- Feature 5 -->
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600" />
          <span>Placement Assistance</span>
        </div>
      </div>

      <div class="mb-6 rounded-xl border border-sky-100 bg-sky-50 p-4">
        <div class="flex items-center gap-2">
          <CalendarDays class="h-5 w-5 text-sky-600" />

          <span class="text-sm text-gray-500"> Next Batch </span>
        </div>

        <p class="mt-2 font-bold text-sky-700">
          {{ course.nextBatch }}
        </p>
      </div>

      <div class="mb-6">
        <div class="flex justify-between text-sm mb-2">
          <span>Seats Filled</span>

          <span>
            {{ course.totalSeats - course.seatsLeft }}/{{ course.totalSeats }}
          </span>
        </div>

        <div class="w-full h-2 rounded-full bg-gray-200">
          <div
            class="h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
            :style="{
              width:
                ((course.totalSeats - course.seatsLeft) / course.totalSeats) *
                  100 +
                '%',
            }"
          ></div>
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
