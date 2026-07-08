<script setup lang="ts">
import { ref } from "vue"
import { courses } from "../../../data/courses"

const showToast = ref(false)
const toastTitle = ref("")
const toastMessage = ref("")

const comingSoon = (title: string) => {
  toastTitle.value = " Coming Soon"
  toastMessage.value = `${title} is currently under development. Registration will open soon. Stay connected with InfiCore Technologies for updates.`

  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 4000)
}
</script>

<template>
  <section class="bg-gradient-to-b from-slate-50 via-white to-sky-50 py-16 md:py-20">
    <!-- Toast -->
<Transition
  enter-active-class="transition duration-300 ease-out"
  enter-from-class="opacity-0 translate-y-5"
  enter-to-class="opacity-100 translate-y-0"
  leave-active-class="transition duration-200 ease-in"
  leave-from-class="opacity-100 translate-y-0"
  leave-to-class="opacity-0 translate-y-5"
>
  <div
    v-if="showToast"
    class="fixed top-6 right-6 z-50 w-[360px] rounded-2xl bg-white shadow-2xl border border-sky-100 overflow-hidden"
  >
    <!-- Top Bar -->
    <div class="h-1 bg-gradient-to-r from-sky-500 to-blue-600"></div>

    <div class="p-5">
      <div class="flex items-start gap-4">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100"
        >
          <svg
            class="w-6 h-6 text-sky-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
        </div>

        <div class="flex-1">
          <h3 class="font-bold text-slate-800">
            {{ toastTitle }}
          </h3>

          <p class="mt-1 text-sm text-gray-600 leading-relaxed">
            {{ toastMessage }}
          </p>
        </div>

        <button
          @click="showToast = false"
          class="text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</Transition>
    <div class="max-w-7xl mx-auto px-6 md:px-10">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
       

        <h1
          class="text-4xl md:text-4xl font-extrabold text-slate-900 leading-tight"
        >
          Explore Our
          <span class="text-sky-600">Professional Courses</span>
        </h1>

        <p class="mt-5 text-lg text-gray-600 leading-relaxed">
          Gain practical industry knowledge through our instructor-led,
          project-based training programs. Learn with real-world applications,
          certification, and career-focused guidance.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <div
  v-for="course in courses"
  :key="course.slug"
  :class="[
    'group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500',
    course.available
      ? 'hover:shadow-2xl hover:-translate-y-2'
      : 'opacity-90'
  ]"
>
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">

            <img
              :src="course.image"
              :alt="course.title"
              loading="lazy"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div
  class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
></div>

<div
  v-if="!course.available"
  class="absolute inset-0 bg-black/55 flex items-center justify-center"
>
  <span
    class="bg-sky-500 text-white px-5 py-2 rounded-full font-bold text-sm"
  >
    Coming Soon
  </span>
</div>

            <!-- Badge -->
            <div class="absolute top-4 left-4">
              <span
                class="rounded-full bg-sky-600 text-white px-3 py-1 text-xs font-semibold shadow"
              >
                Certified Course
              </span>
            </div>

            <!-- Hours -->
            <div class="absolute top-4 right-4">
              <span
                class="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-700"
              >
                40 Hours
              </span>
            </div>

            <!-- Bottom Title -->
            <div class="absolute bottom-5 left-5 right-5">

              <h2
                class="text-2xl font-bold text-white leading-tight"
              >
                {{ course.title }}
              </h2>

            </div>

          </div>

          <!-- Content -->
          <div class="p-6">

            <p
              class="text-gray-600 leading-relaxed line-clamp-3 mb-5"
            >
              {{ course.overview }}
            </p>

            <!-- Levels -->
            <div
              v-if="course.levels?.length"
              class="flex flex-wrap gap-2 mb-6"
            >
              <span
                v-for="level in course.levels"
                :key="level"
                class="rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-semibold"
              >
                {{ level }}
              </span>
            </div>

            <!-- Features -->

            <div class="space-y-3 text-sm text-gray-700">

              <div class="flex items-center gap-3">

                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0"
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

              <div class="flex items-center gap-3">

                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0"
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

              <div class="flex items-center gap-3">

                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0"
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

                <span>Hands-on Projects</span>

              </div>

              <div class="flex items-center gap-3">

                <svg
                  class="w-5 h-5 text-green-600 flex-shrink-0"
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

            </div>

            <!-- Footer -->
            <div
              class="mt-8 flex items-center justify-between border-t pt-5"
            >

              <div>

                <p class="text-xs uppercase tracking-wide text-gray-400">
                  Mode
                </p>

                <p class="font-semibold text-slate-800">
                  Online / Offline
                </p>

              </div>

             <NuxtLink
  v-if="course.available"
  :to="`/courses/${course.slug}`"
  class="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white font-semibold hover:bg-sky-700 transition"
>
  View Details

  <svg
    class="w-5 h-5 transition hover:translate-x-1"
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
  @click="comingSoon(course.title)"
  class="inline-flex items-center gap-2 rounded-xl bg-gray-400 px-5 py-3 text-white font-semibold hover:bg-gray-500 transition"
>
  Coming Soon
</button>

            </div>

          </div>

        </div>

      </div>

      <!-- Bottom CTA -->

      <div
        class="mt-20 rounded-3xl overflow-hidden bg-gradient-to-r from-sky-700 via-sky-600 to-blue-700 text-white px-8 py-12 md:px-16"
      >

        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-8"
        >

          <div>

            <h2 class="text-3xl md:text-4xl font-bold">
              Early Bird Registration
            </h2>

            <p class="mt-3 text-sky-100 max-w-2xl leading-relaxed">
              Secure your seat today and get access to our industry-ready
              training programs with practical projects, expert mentorship,
              certification, and placement guidance.
            </p>

          </div>

          <NuxtLink
            to="/contact"
            class="rounded-xl bg-white text-sky-700 px-8 py-4 font-bold hover:bg-slate-100 transition"
          >
            Enroll Now
          </NuxtLink>

        </div>

      </div>

    </div>
  </section>
</template>