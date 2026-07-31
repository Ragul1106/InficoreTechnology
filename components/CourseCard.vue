<script setup lang="ts">
import {
  BadgeCheck,
  Clock3,
  Users,
  Star,
  CalendarDays,
  CheckCircle2,
  Flame,
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
  showSeats?: boolean;
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
      'group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-lg transition duration-500 border border-transparent dark:border-slate-700',
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

      <!-- LIVE indicator (Flagship only) -->
      <div
        v-if="showSeats"
        class="absolute top-4 right-4 flex items-center gap-2 rounded-full backdrop-blur-sm px-3 py-1.5"
      >
        <span class="relative flex h-2.5 w-2.5">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"
          ></span>
        </span>
      </div>

      <!-- Filling Fast badge -->
      <div
        v-if="showSeats && course.seatsLeft < 10"
        class="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1.5 shadow-lg animate-pulse"
      >
        <Flame class="h-3.5 w-3.5 text-white" />
        <span class="text-xs font-bold text-white tracking-wide">
          Filling Fast
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex justify-between items-center mb-5">
        <div
          class="flex items-center gap-2 rounded-full bg-sky-100 dark:bg-sky-900/50 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300"
        >
          <BadgeCheck class="h-4 w-4" />
          <span>Certified Course</span>
        </div>

        <div
          class="flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900/40 px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-300"
        >
          <Clock3 class="h-4 w-4" />
          <span>{{ course.duration }}</span>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-4">
        {{ course.title }}
      </h2>

      <!-- SEATS SECTION (Flagship only) -->
      <div v-if="showSeats" class="grid grid-cols-2 gap-3 mb-6">
        <!-- Seats Left -->
        <div
          class="relative rounded-xl border border-red-100 dark:border-red-800/50 bg-red-50 dark:bg-red-900/30 p-4 overflow-hidden"
        >
          <div class="absolute inset-0 bg-red-200/40 dark:bg-red-800/20 rounded-xl"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-2">
              <Users class="h-5 w-5 text-red-600 dark:text-red-400" />
              <span class="text-sm font-medium text-red-600 dark:text-red-400">
                Seats Left
              </span>
            </div>

            <p class="mt-2 text-4xl font-bold text-red-700 dark:text-red-400">
              {{ course.seatsLeft }}
            </p>

            <p class="text-xs text-red-500 dark:text-red-400/80">
              Out of {{ course.totalSeats }} seats
            </p>
          </div>
        </div>

        <!-- Joined This Week -->
        <div
          class="rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800/50 p-3"
        >
          <p class="text-xs text-green-600 dark:text-green-400 font-medium">
            Joined This Week
          </p>
          <p class="text-6xl mx-5 font-bold text-green-700 dark:text-green-400">
            {{ course.enrolledThisWeek }}
          </p>
        </div>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-1 mb-5">
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />

        <span class="ml-2 font-semibold text-slate-800 dark:text-white">
          {{ course.rating }}
        </span>
        <span class="text-gray-500 dark:text-gray-400 text-sm">
          ({{ course.reviews }} Reviews)
        </span>
      </div>

      <p class="text-gray-600 dark:text-gray-300 leading-7 line-clamp-3 mb-6">
        {{ course.overview }}
      </p>

      <!-- Levels -->
      <div v-if="course.levels?.length" class="mb-6 flex flex-wrap gap-2">
        <span
          v-for="level in course.levels"
          :key="level"
          class="rounded-full bg-sky-100 dark:bg-sky-900/50 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300"
        >
          {{ level }}
        </span>
      </div>

      <!-- Features -->
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300 mb-5">
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600 dark:text-green-400" />
          <span>Online & Offline Training</span>
        </div>
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600 dark:text-green-400" />
          <span>Industry Expert Mentors</span>
        </div>
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600 dark:text-green-400" />
          <span>{{ course.projects }}</span>
        </div>
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600 dark:text-green-400" />
          <span>Course Completion Certificate</span>
        </div>
        <div class="flex items-center gap-3">
          <CheckCircle2 class="h-5 w-5 text-green-600 dark:text-green-400" />
          <span>Placement Assistance</span>
        </div>
      </div>

      <!-- Next Batch -->
      <div
        class="mb-6 rounded-xl border border-sky-100 dark:border-slate-600 bg-sky-50 dark:bg-slate-700/50 p-4"
      >
        <div class="flex items-center gap-2">
          <CalendarDays class="h-5 w-5 text-sky-600 dark:text-sky-400" />
          <span class="text-sm text-gray-500 dark:text-gray-400">Next Batch</span>
        </div>
        <p class="mt-2 font-bold text-sky-700 dark:text-sky-400">
          {{ course.nextBatch }}
        </p>
      </div>

      <!-- Seats Filled Progress (Flagship only) -->
      <div v-if="showSeats" class="mb-6">
        <div class="flex justify-between text-sm mb-2 text-gray-700 dark:text-gray-300">
          <span class="flex items-center gap-2">
            Seats Filled
            <span
              class="inline-flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"
            ></span>
          </span>
          <span>
            {{ course.totalSeats - course.seatsLeft }}/{{ course.totalSeats }}
          </span>
        </div>

        <div class="w-full h-2.5 rounded-full bg-gray-200 dark:bg-slate-600 overflow-hidden">
          <div
            class="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-1000"
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
      <div
        class="mt-8 flex items-center justify-between border-t border-gray-100 dark:border-slate-700 pt-5"
      >
        <div>
          <p class="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
            Mode
          </p>
          <p class="font-semibold text-slate-800 dark:text-white">
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
          class="inline-flex items-center gap-2 rounded-xl bg-gray-400 dark:bg-slate-600 px-5 py-3 font-semibold text-white transition hover:bg-gray-500 dark:hover:bg-slate-500"
        >
          Coming Soon
        </button>
      </div>
    </div>
  </div>
</template>