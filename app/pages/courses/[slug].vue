<script setup lang="ts">
import { courses } from "../../../data/courses";
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const course = courses.find((c) => c.slug === route.params.slug);

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
      course: course?.title,
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

const testimonials = [
  {
    name: "Maghizhan",
    review:
      "The practical sessions and industry projects helped me gain real confidence.",
  },
  {
    name: "Libi",
    review: "Excellent mentors with real industrial experience.",
  },
  {
    name: "Dhanusri",
    review: "One of the best project-based learning experiences.",
  },
  {
    name: "Karthick",
    review: "The curriculum is well structured and easy to follow.",
  },
  {
    name: "Nandhini",
    review:
      "The hands-on training gave me confidence to work on real projects.",
  },
  {
    name: "Arun Kumar",
    review: "The faculty explained every concept with practical examples.",
  },
  {
    name: "Harini",
    review: "Best learning experience with excellent guidance.",
  },
  {
    name: "Vignesh",
    review: "Industry-oriented projects helped me improve my technical skills.",
  },
  {
    name: "Keerthana",
    review: "The trainers were very supportive throughout the course.",
  },
  {
    name: "Praveen",
    review: "Highly recommended for anyone looking to build practical skills.",
  },
  {
    name: "Sanjay",
    review: "Real-time project experience made learning much more interesting.",
  },
  {
    name: "Abinaya",
    review: "The placement guidance and mentoring were excellent.",
  },
];

// Shuffle and pick 3
const studentReviews = [...testimonials]
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);
</script>

<template>
  <div v-if="course" class="py-16 px-6 md:px-10">
    <!-- Banner -->
    <!-- <div v-if="course" class="bg-slate-50 min-h-screen"> -->

    <section
      class="bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid lg:grid-cols-3 gap-10">
          <!-- LEFT CONTENT -->

          <div class="lg:col-span-2">
            <span
              class="inline-flex items-center rounded-full bg-sky-500/20 border border-sky-400 px-4 py-2 text-sm font-semibold text-sky-300"
            >
              InfiCoreWare Professional Training
            </span>

            <h1 class="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              {{ course.title }}
            </h1>

            <p class="mt-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
              {{ course.overview }}
            </p>

            <!-- Levels -->

            <div class="flex flex-wrap gap-3 mt-8">
              <span
                v-for="level in course.levels"
                :key="level"
                class="px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-semibold"
              >
                {{ level }}
              </span>
            </div>

            <!-- Highlights -->

            <div class="grid sm:grid-cols-2 gap-5 mt-10">
              <div
                class="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10"
              >
                <p class="text-slate-400 text-sm">Duration</p>

                <h3 class="text-xl font-bold mt-1">
                  {{ course.duration }}
                </h3>
              </div>

              <div
                class="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10"
              >
                <p class="text-slate-400 text-sm">Mode</p>

                <h3 class="text-xl font-bold mt-1">
                  {{ course.mode }}
                </h3>
              </div>

              <div
                class="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10"
              >
                <p class="text-slate-400 text-sm">Projects</p>

                <h3 class="text-xl font-bold mt-1">
                  {{ course.projects }}
                </h3>
              </div>

              <div
                class="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10"
              >
                <p class="text-slate-400 text-sm">Certificate</p>

                <h3 class="text-xl font-bold mt-1">Course Completion</h3>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE -->

          <div>
            <div
              class="sticky top-28 bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <img
                :src="course.image"
                :alt="course.title"
                class="w-full h-70 object-cover"
              />

              <div class="p-7">
                <h2 class="text-2xl font-bold text-slate-900">
                  {{ course.title }}
                </h2>

                <div class="mt-6 space-y-4 text-gray-700">
                  <div class="flex justify-between">
                    <span>Duration</span>

                    <strong>{{ course.duration }}</strong>
                  </div>

                  <div class="flex justify-between">
                    <span>Mode</span>

                    <strong>{{ course.mode }}</strong>
                  </div>

                  <div class="flex justify-between">
                    <span>Projects</span>

                    <strong>{{ course.projects }}</strong>
                  </div>

                  <div class="flex justify-between">
                    <span>Certificate</span>

                    <strong>Included</strong>
                  </div>

                  <div class="flex justify-between">
                    <span>Placement</span>

                    <strong>
                      {{ course.placement ? "Available" : "No" }}
                    </strong>
                  </div>
                </div>

                <button
                  @click="showEnroll = true"
                  class="mt-8 w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-xl font-bold transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enroll Button -->
    <!-- <button
      @click="showEnroll = true"
      class="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl font-semibold transition"
    >
      Enroll Now
    </button> -->

    <!-- ========================= -->
    <!-- COURSE CONTENT -->
    <!-- ========================= -->

    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-3 gap-10">
        <!-- LEFT CONTENT -->

        <div class="lg:col-span-2 space-y-16">
          <!-- Learning Outcomes -->

          <section>
            <h2 class="text-3xl font-bold text-slate-900 mb-8">
              What You'll Learn
            </h2>

            <div class="grid md:grid-cols-2 gap-5">
              <div
                v-for="item in course.learningOutcomes"
                :key="item"
                class="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border"
              >
                <div
                  class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
                >
                  ✓
                </div>

                <p class="text-gray-700 leading-relaxed">
                  {{ item }}
                </p>
              </div>
            </div>
          </section>

          <!-- Tools -->

          <section>
            <h2 class="text-3xl font-bold text-slate-900 mb-8">
              Tools & Technologies
            </h2>

            <div class="flex flex-wrap gap-4">
              <span
                v-for="tool in course.tools"
                :key="tool"
                class="px-5 py-3 rounded-xl bg-sky-100 text-sky-700 font-semibold"
              >
                {{ tool }}
              </span>
            </div>
          </section>

          <!-- Curriculum -->

          <section class="mt-16">
            <div class="flex items-center justify-between mb-10">
              <div>
                <p
                  class="text-sky-600 font-semibold uppercase tracking-wider text-sm"
                >
                  Course Modules
                </p>

                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                  Course Curriculum
                </h2>
              </div>

              <span
                class="hidden md:flex items-center bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold"
              >
                {{ course.topics.length }} Modules
              </span>
            </div>

            <!-- Split into Left & Right -->
            <div class="grid lg:grid-cols-2 gap-6">
              <!-- Left Column -->
              <div class="space-y-5">
                <template
                  v-for="(topic, index) in course.topics.filter(
                    (_, i) => i % 2 === 0,
                  )"
                  :key="topic"
                >
                  <div
                    class="flex gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition"
                  >
                    <div
                      class="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 text-white flex items-center justify-center font-bold text-lg"
                    >
                      {{ String(index * 2 + 1).padStart(2, "0") }}
                    </div>

                    <div>
                      <h3 class="text-lg font-bold text-slate-800">
                        {{ topic }}
                      </h3>

                      <p class="mt-2 text-gray-500">
                        Practical demonstrations, debugging, implementation and
                        industry-oriented hands-on sessions.
                      </p>
                    </div>
                  </div>
                </template>
              </div>

              <!-- Right Column -->
              <div class="space-y-5">
                <template
                  v-for="(topic, index) in course.topics.filter(
                    (_, i) => i % 2 === 1,
                  )"
                  :key="topic"
                >
                  <div
                    class="flex gap-5 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition"
                  >
                    <div
                      class="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 text-white flex items-center justify-center font-bold text-lg"
                    >
                      {{ String(index * 2 + 2).padStart(2, "0") }}
                    </div>

                    <div>
                      <h3 class="text-lg font-bold text-slate-800">
                        {{ topic }}
                      </h3>

                      <p class="mt-2 text-gray-500">
                        Practical demonstrations, debugging, implementation and
                        industry-oriented hands-on sessions.
                      </p>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </section>
        </div>
        <!-- RIGHT SIDEBAR -->

        <aside class="space-y-8">
          <!-- Why Choose -->

          <div class="bg-white rounded-3xl shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6">Why Choose InfiCoreWare?</h3>

            <ul
              class="list-disc list-inside space-y-5 text-gray-700 marker:text-sky-500 marker:text-lg"
            >
              <li>Industry Expert Trainers</li>
              <li>Hands-on Practical Sessions</li>
              <li>Real Industry Projects</li>
              <li>Interview Preparation</li>
              <li>Placement Assistance</li>
              <li>Course Completion Certificate</li>
            </ul>
          </div>

          <!-- Contact -->

          <div
            class="bg-gradient-to-r from-sky-700 to-blue-700 rounded-3xl text-white p-8"
          >
            <h3 class="text-2xl font-bold">Need Help?</h3>

            <p class="mt-4 text-sky-100">
              Talk with our course advisor and choose the right learning path.
            </p>

            <NuxtLink
              to="/contact"
              class="mt-8 inline-block bg-white text-sky-700 px-6 py-3 rounded-xl font-semibold"
            >
              Contact Us
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>

    <!-- ========================= -->
    <!-- COURSE STATS -->
    <!-- ========================= -->

    <section class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 class="text-4xl font-extrabold text-sky-600">40+</h2>

          <p class="mt-3 text-gray-600">Hours Training</p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 class="text-4xl font-extrabold text-sky-600">10+</h2>

          <p class="mt-3 text-gray-600">Industry Tools</p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 class="text-4xl font-extrabold text-sky-600">5+</h2>

          <p class="mt-3 text-gray-600">Real Projects</p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 class="text-4xl font-extrabold text-sky-600">100%</h2>

          <p class="mt-3 text-gray-600">Certificate</p>
        </div>
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-14">
          Your Learning Journey
        </h2>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="bg-sky-50 rounded-3xl p-8">
            <div class="text-sky-600 font-bold text-lg">Week 1</div>

            <h3 class="mt-4 font-bold text-xl">Fundamentals</h3>

            <p class="mt-3 text-gray-600">Build strong theoretical concepts.</p>
          </div>

          <div class="bg-sky-50 rounded-3xl p-8">
            <div class="text-sky-600 font-bold text-lg">Week 2</div>

            <h3 class="mt-4 font-bold text-xl">Core Concepts</h3>

            <p class="mt-3 text-gray-600">Learn practical implementation.</p>
          </div>

          <div class="bg-sky-50 rounded-3xl p-8">
            <div class="text-sky-600 font-bold text-lg">Week 3-4</div>

            <h3 class="mt-4 font-bold text-xl">Projects</h3>

            <p class="mt-3 text-gray-600">Develop real-world applications.</p>
          </div>

          <div class="bg-sky-50 rounded-3xl p-8">
            <div class="text-sky-600 font-bold text-lg">Final Week</div>

            <h3 class="mt-4 font-bold text-xl">Career Ready</h3>

            <p class="mt-3 text-gray-600">
              Assessment, certificate & placement guidance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-14">What Students Say</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="student in studentReviews"
            :key="student.name"
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div class="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>

            <p class="mt-5 text-gray-600 italic leading-relaxed">
              "{{ student.review }}"
            </p>

            <div class="mt-6 flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 text-white flex items-center justify-center font-bold"
              >
                {{ student.name.charAt(0) }}
              </div>

              <div>
                <h4 class="font-bold text-slate-900">
                  {{ student.name }}
                </h4>

                <p class="text-sm text-gray-500">InfiCoreWare Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div class="space-y-5">
          <div class="bg-white rounded-2xl shadow p-6">
            <h3 class="font-bold">Who can join this course?</h3>

            <p class="mt-3 text-gray-600">
              Students, graduates and working professionals interested in this
              domain.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow p-6">
            <h3 class="font-bold">Will I receive a certificate?</h3>

            <p class="mt-3 text-gray-600">
              Yes. Every student receives an InfiCoreWare Course Completion
              Certificate.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow p-6">
            <h3 class="font-bold">Are projects included?</h3>

            <p class="mt-3 text-gray-600">
              Yes. Every course includes multiple hands-on industry projects.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div
          class="rounded-[40px] bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-800 text-white p-14 text-center"
        >
          <h2 class="text-5xl font-bold">Start Your Career Journey Today</h2>

          <p class="mt-6 text-xl text-sky-100 max-w-3xl mx-auto">
            Join InfiCoreWare Technologies and gain practical skills with
            industry experts, real projects, certification and placement
            support.
          </p>

          <button
            @click="showEnroll = true"
            class="mt-10 bg-white text-sky-700 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>

    <!-- Modal -->
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
              <strong class="text-sky-700">{{ course.title }}</strong
              >.
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
                Course Enrollment
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
                :value="course.title"
                readonly
                class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
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
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
