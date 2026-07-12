<script setup lang="ts">
import { computed, ref } from "vue";
import { courses } from "../../../data/courses";
import CourseCard from "../components/CourseCard.vue";

const showToast = ref(false);
const toastTitle = ref("");
const toastMessage = ref("");

const comingSoon = (title: string) => {
  toastTitle.value = "Coming Soon";
  toastMessage.value = `${title} is currently under development. Registration will open soon. Stay connected with InfiCore Technologies for updates.`;

  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, 4000);
};

const flagshipCourses = computed(() =>
  courses.filter((course) =>
    [
      "intelligent-product-engineering",
      "smart-connected-systems-engineering",
      "edge-ai-intelligent-embedded-systems",
    ].includes(course.slug),
  ),
);

const baremetalCourses = computed(() =>
  courses.filter((course) =>
    [
      "baremetal-pic-microcontroller",
      "baremetal-atmega328",
      "baremetal-esp32",
    ].includes(course.slug),
  ),
);

const fullstackCourses = computed(() =>
  courses.filter((course) => ["fullstack-developer"].includes(course.slug)),
);

const programmingCourses = computed(() =>
  courses.filter((course) =>
    [
      "python-programming",
      "embedded-linux-programming",
      "vlsi-programming",
      "c-programming",
      "cpp-programming",
    ].includes(course.slug),
  ),
);
</script>

<template>
  <section
    class="bg-gradient-to-b from-slate-50 via-white to-sky-50 py-16 md:py-20"
  >
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
      <div
        class=" rounded-3xl overflow-hidden bg-gradient-to-r from-sky-700 via-sky-600 to-blue-700 text-white px-8 py-12 md:px-16"
      >
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 class="text-3xl md:text-4xl font-bold">
              Early Bird Registration
            </h2>

            <p class="mt-3 text-sky-100 max-w-2xl leading-relaxed">
              Secure your seat today and gain access to InfiCoreWare's
              industry-ready certification programs with practical projects,
              expert mentors, and placement assistance.
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

      <div class="text-center max-w-3xl mx-auto mt-16 mb-16">
        <h1 class="text-5xl font-extrabold text-slate-900">
          Explore Our

          <span class="text-sky-600"> Flagship Courses </span>
        </h1>

        <p class="mt-5 text-lg text-gray-600">
          Learn from industry experts through hands-on, project-based training
          programs.
        </p>
      </div>
      <!-- =========================
     Flagship Courses
========================= -->

      <section class="mb-20">
        <!-- <div class="mb-10">
    <h2 class="text-3xl font-bold text-slate-900">
      InfiCoreWare Flagship Courses
    </h2>

    <p class="mt-2 text-gray-600">
      Master complete product development from concept to deployment.
    </p>
  </div> -->

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <CourseCard
            v-for="course in flagshipCourses"
            :key="course.slug"
            :course="course"
            @coming-soon="comingSoon"
          />
        </div>
      </section>

      <!-- =========================
     BareMetal Courses
========================= -->

      <section class="mb-20">
        <div class="text-center max-w-3xl mx-auto mt-16 mb-16">
          <h1 class="text-5xl font-extrabold text-slate-900">
            Explore Our

            <span class="text-sky-600"> Baremetal Courses </span>
          </h1>

          <p class="mt-5 text-lg text-gray-600">
            Learn register-level embedded firmware development from scratch.
          </p>
        </div>

        <!-- <div class="mb-10">
    <h2 class="text-3xl font-bold text-slate-900">
      InfiCoreWare BareMetal Courses
    </h2>

    <p class="mt-2 text-gray-600">
      Learn register-level embedded firmware development from scratch.
    </p>
  </div> -->

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <CourseCard
            v-for="course in baremetalCourses"
            :key="course.slug"
            :course="course"
            @coming-soon="comingSoon"
          />
        </div>
      </section>

      <!-- =========================
     Full Stack Course
========================= -->

      <section class="mb-20">
        <div class="text-center max-w-3xl mx-auto mt-16 mb-16">
          <h1 class="text-5xl font-extrabold text-slate-900">
            Explore Our

            <span class="text-sky-600"> Full Stack Courses </span>
          </h1>

          <p class="mt-5 text-lg text-gray-600">
            Become a professional Full Stack Developer using modern web
            technologies.
          </p>
        </div>

        <!-- <div class="mb-10">
    <h2 class="text-3xl font-bold text-slate-900">
      Full Stack Developer – Industry Course
    </h2>

    <p class="mt-2 text-gray-600">
      Become a professional Full Stack Developer using modern web technologies.
    </p>
  </div> -->

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <CourseCard
            v-for="course in fullstackCourses"
            :key="course.slug"
            :course="course"
            @coming-soon="comingSoon"
          />
        </div>
      </section>

      <!-- =========================
     Programming Courses
========================= -->

      <section class="mb-20">
        <div class="text-center max-w-3xl mx-auto mt-16 mb-16">
          <h1 class="text-5xl font-extrabold text-slate-900">
            Explore Our

            <span class="text-sky-600"> Programming Courses </span>
          </h1>

          <p class="mt-5 text-lg text-gray-600">
            Build strong programming fundamentals for Embedded, VLSI and
            Software Engineering.
          </p>
        </div>

        <!-- <div class="mb-10">
    <h2 class="text-3xl font-bold text-slate-900">
      InfiCoreWare Programming Courses
    </h2>

    <p class="mt-2 text-gray-600">
      Build strong programming fundamentals for Embedded, VLSI and Software Engineering.
    </p>
  </div> -->

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <CourseCard
            v-for="course in programmingCourses"
            :key="course.slug"
            :course="course"
            @coming-soon="comingSoon"
          />
        </div>
      </section>
    </div>
  </section>
</template>
