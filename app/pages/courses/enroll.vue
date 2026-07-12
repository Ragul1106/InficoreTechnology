<script setup lang="ts">
const props = defineProps({
  selectedCourse: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="w-full">
    <!-- Heading -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-blue-900">Course Enrollment</h2>

      <p class="mt-2 text-gray-600">
        Fill the form and our team will contact you shortly.
      </p>
    </div>

    <!-- Form -->
    <form
      action="https://formspree.io/f/xvzjrrej"
      method="POST"
      class="space-y-5"
    >
      <!-- Name -->
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
      />

      <!-- Mobile -->
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        required
        class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
      />

      <!-- Email -->
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
      />

      <!-- Course -->
      <input
        type="text"
        name="course"
        :value="selectedCourse"
        readonly
        class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
      />

      <!-- Message -->
      <textarea
        rows="4"
        name="message"
        placeholder="Any specific requirements..."
        class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
      ></textarea>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold"
      >
        Submit Enrollment
      </button>
    </form>
  </div>
</template>
