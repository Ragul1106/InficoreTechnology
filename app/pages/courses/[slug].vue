<script setup lang="ts">
import { courses } from "../../../data/courses"
import { ref, reactive } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const course = courses.find((c) => c.slug === route.params.slug)

const showEnroll = ref(false)
const submitted = ref(false)
const loading = ref(false)

const form = reactive({
  name: "",
  mobile: "",
  email: "",
  message: ""
})


const closeAndGoHome = () => {
  showEnroll.value = false
  submitted.value = false
  router.push("/")
}

const submitForm = async () => {
  loading.value = true

  const response = await fetch("https://formspree.io/f/xvzjrrej", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      course: course?.title,
      message: form.message
    })
  })

  loading.value = false

  if (response.ok) {
    submitted.value = true

    form.name = ""
    form.mobile = ""
    form.email = ""
    form.message = ""
  } else {
    alert("Something went wrong. Please try again.")
  }
}
</script>

<template>
  <div v-if="course" class="py-16 px-6 md:px-10">
    <!-- Banner -->
    <img
      :src="course.image"
      :alt="course.title"
      class="w-full h-[400px] object-cover rounded-2xl mb-8"
    />

    <!-- Title -->
    <h1 class="text-4xl font-bold mb-4">
      {{ course.title }}
    </h1>

    <!-- Levels -->
    <div class="flex gap-3 mb-6 flex-wrap">
      <span
        v-for="level in course.levels"
        :key="level"
        class="px-4 py-2 rounded-full bg-sky-100 text-sky-700"
      >
        {{ level }}
      </span>
    </div>

    <!-- Overview -->
    <p class="text-gray-700 text-lg leading-relaxed mb-8">
      {{ course.overview }}
    </p>

    <!-- Topics -->
    <h2 class="text-2xl font-bold mb-4">Topics Covered</h2>

    <ul class="grid md:grid-cols-2 gap-3 mb-10">
      <li
        v-for="topic in course.topics"
        :key="topic"
        class="bg-gray-50 border rounded-xl px-4 py-3"
      >
        {{ topic }}
      </li>
    </ul>

    <!-- Enroll Button -->
    <button
      @click="showEnroll = true"
      class="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl font-semibold transition"
    >
      Enroll Now
    </button>

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
            @click="showEnroll = false; submitted = false"
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
    <strong class="text-sky-700">{{ course.title }}</strong>.
    <br />
    Our team will reach out to you soon with further details regarding your course.
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