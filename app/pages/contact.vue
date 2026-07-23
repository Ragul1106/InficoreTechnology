<script setup lang="ts">
// Contact page — static contact information and form.
import { MapPin, Phone, Mail, Clock } from "lucide-vue-next";
</script>

<template>
  <div
    class="min-h-screen bg-white px-6 md:px-16 py-16 relative overflow-hidden"
  >
    <!-- Soft Background Shapes -->
    <div
      class="absolute top-20 left-20 w-72 h-72 bg-sky-100 blur-3xl rounded-full"
    ></div>

    <div
      class="absolute bottom-20 right-20 w-72 h-72 bg-blue-100 blur-3xl rounded-full"
    ></div>

    <!-- Heading -->
    <div class="text-center mb-16 relative z-10">
      <h1
        class="text-4xl md:text-6xl pb-4 font-bold bg-gradient-to-r from-sky-500 via-blue-500 to-blue-700 bg-clip-text text-transparent"
      >
        Contact InfiCoreWare Technologies
      </h1>

      <p class="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
        We’d love to hear from you. Reach out for project collaborations,
        engineering training, product development, and industrial solutions.
      </p>
    </div>

    <!-- Contact Section -->
    <div class="grid md:grid-cols-2 gap-10 relative z-10">
      <!-- Left Side -->
      <div
        class="bg-white border border-sky-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-500"
      >
        <h2 class="text-3xl font-bold text-sky-600 mb-8">Get in Touch</h2>

        <div class="space-y-8">
          <!-- Address -->
          <div
            class="p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition"
          >
            <div class="flex items-center gap-3 mb-3">
              <MapPin class="w-6 h-6 text-sky-500" />
              <h3 class="font-semibold text-xl text-blue-900">
                Office Address
              </h3>
            </div>

            <p class="text-gray-600 leading-7">
              Coimbatore, Tamil Nadu, India - 641001
            </p>
          </div>

          <!-- Phone -->
          <div
            class="p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition"
          >
            <div class="flex items-center gap-3 mb-3">
              <Phone class="w-6 h-6 text-green-500" />
              <h3 class="font-semibold text-xl text-blue-900">Phone</h3>
            </div>

            <a
              href="tel:+919789738080"
              class="text-green-600 text-lg hover:text-green-700 transition"
            >
              +91 97897 38080
            </a>
          </div>

          <!-- Email -->
          <div
            class="p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition"
          >
            <div class="flex items-center gap-3 mb-3">
              <Mail class="w-6 h-6 text-blue-500" />
              <h3 class="font-semibold text-xl text-blue-900">Email</h3>
            </div>

            <a
              href="mailto:contact.inficorewaretechnologies@gmail.com"
              class="text-blue-600 break-all hover:text-blue-700 transition"
            >
              contact.inficorewaretechnologies@gmail.com
            </a>
          </div>

          <!-- Working Hours -->
          <div
            class="p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition"
          >
            <div class="flex items-center gap-3 mb-3">
              <Clock class="w-6 h-6 text-purple-500" />
              <h3 class="font-semibold text-xl text-blue-900">Working Hours</h3>
            </div>

            <p class="text-purple-600">Mon - Sat : 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <!-- Right Side Form -->
      <div
        class="bg-white border border-sky-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-500"
      >
        <h2 class="text-3xl font-bold text-sky-600 mb-8">Send us a Message</h2>

        <form
          action="https://formspree.io/f/xvzjrrej"
          method="POST"
          class="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            class="w-full border border-sky-200 rounded-xl px-5 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            class="w-full border border-sky-200 rounded-xl px-5 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            required
            class="w-full border border-sky-200 rounded-xl px-5 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500"
          ></textarea>

          <button
            type="submit"
            class="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:scale-105 transition duration-300 shadow-lg"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
