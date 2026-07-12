<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { courses } from "../../../data/courses";
import CourseCard from "../components/CourseCard.vue";
import {
  Flame,
  GraduationCap,
  Cpu,
  BrainCircuit,
  MonitorSmartphone,
  Bell,
  Clock3,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-vue-next";

import { useRouter } from "vue-router";

const router = useRouter();

const selectedCourse = ref("General Course Enquiry");
const showEnroll = ref(false);
const submitted = ref(false);
const loading = ref(false);

const form = reactive({
  name: "",
  mobile: "",
  email: "",
  message: "",
});

const closeAndGoHome = () => {
  showEnroll.value = false;
  submitted.value = false;
  router.push("/");
};

const openEnroll = (courseName: string) => {
  selectedCourse.value = courseName;
  submitted.value = false;
  showEnroll.value = true;
};

const submitForm = async () => {
  loading.value = true;

  const response = await fetch("https://formspree.io/f/xvzjrrej", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      course: selectedCourse.value,
      message: form.message,
    }),
  });

  loading.value = false;

  if (response.ok) {
    submitted.value = true;

    form.name = "";
    form.mobile = "";
    form.email = "";
    form.message = "";
  } else {
    alert("Something went wrong. Please try again.");
  }
};

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
      <!-- Premium Announcement Bar -->
      <!-- Live Updates -->
      <div
        class="relative mb-10 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 shadow-lg"
      >
        <div class="flex items-center">
          <!-- Left Badge -->
          <div
            class="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4 font-bold text-white shrink-0"
          >
            <Flame class="w-5 h-5" />
            <span>LIVE UPDATES</span>
          </div>

          <!-- Full Width Marquee -->
          <div class="flex-1 overflow-hidden">
            <div class="marquee">
              <div class="marquee-content">
                <span class="marquee-item">
                  <GraduationCap class="w-4 h-4 text-sky-600" />
                  18 Students enrolled in Intelligent Product Engineering
                </span>

                <span class="marquee-item">
                  <Cpu class="w-4 h-4 text-emerald-600" />
                  12 Students enrolled in Smart Connected Systems Engineering
                </span>

                <span class="marquee-item">
                  <BrainCircuit class="w-4 h-4 text-violet-600" />
                  9 Students enrolled in Edge AI & Intelligent Embedded Systems
                </span>

                <span class="marquee-item">
                  <MonitorSmartphone class="w-4 h-4 text-blue-600" />
                  22 Students enrolled in Full Stack Developer
                </span>

                <span class="marquee-item">
                  <Bell class="w-4 h-4 text-orange-600" />
                  Early Bird Registration Closing Soon
                </span>

                <span class="marquee-item">
                  <Clock3 class="w-4 h-4 text-red-600" />
                  Only 15 Seats Remaining
                </span>

                <span class="marquee-item">
                  <BadgeCheck class="w-4 h-4 text-green-600" />
                  Industry Certificate Included
                </span>

                <span class="marquee-item">
                  <BriefcaseBusiness class="w-4 h-4 text-sky-700" />
                  Placement Assistance Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-3xl overflow-hidden bg-gradient-to-r from-sky-700 via-sky-600 to-blue-700 text-white px-8 py-12 md:px-16"
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

          <button
            @click="openEnroll('General Course Enquiry')"
            class="mt-10 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-sky-700 transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Enroll Now
          </button>
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
            @coming-soon="openEnroll"
          />
        </div>
      </section>
    </div>
  </section>

  <transition name="fade">
    <div
      v-if="showEnroll"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click.self="showEnroll = false"
    >
      <div
        class="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-6 md:p-8"
      >
        <!-- Close -->
        <button
          @click="
            showEnroll = false;
            submitted = false;
          "
          class="absolute top-4 right-5 text-3xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        <!-- Success Message -->
        <div v-if="submitted" class="text-center py-12 px-6">
          <!-- Success Icon -->
          <div
            class="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100"
          >
            <svg
              class="w-14 h-14 text-green-600"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <!-- Title -->
          <h2 class="text-3xl font-bold text-green-600 mb-4">
            Enrollment Successful
          </h2>

          <!-- Message -->
          <p class="text-gray-700 text-lg leading-relaxed max-w-md mx-auto">
            Thank you for enrolling in
            <strong class="text-sky-700"> {{ selectedCourse }} </strong>.
            <br />
            Our team will reach out to you soon with further details regarding
            your course.
          </p>

          <!-- Close Button -->
          <button
            @click="closeAndGoHome"
            class="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Done
          </button>
        </div>

        <!-- Form -->
        <div v-else>
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-blue-900">
              Enroll for {{ selectedCourse }}
            </h2>

            <p class="mt-2 text-gray-600">
              Fill the form and our team will contact you shortly.
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-5">
            <input
              v-model="form.name"
              type="text"
              placeholder="Full Name"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              v-model="form.mobile"
              type="tel"
              placeholder="Mobile Number"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              v-model="form.email"
              type="email"
              placeholder="Email Address"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              :value="selectedCourse"
              readonly
              class="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3"
            />

            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Any specific requirements..."
              class="w-full border border-gray-300 rounded-lg px-4 py-3"
            ></textarea>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-700 transition"
            >
              {{ loading ? "Submitting..." : "Submit Enrollment" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>
