<script setup lang="ts">
// About page — static company info and contact details.
import { MapPin, Phone, Mail, Clock } from "lucide-vue-next";
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-slate-950 px-6 md:px-16 py-16 relative overflow-hidden transition-colors duration-300"
  >
    <!-- Soft Background Shapes -->
    <div
      class="absolute top-20 left-20 w-72 h-72 bg-sky-100 dark:bg-sky-900/30 blur-3xl rounded-full"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 blur-3xl rounded-full"
    ></div>

    <!-- Heading -->
    <div class="text-center mb-16 relative z-10">
      <h1
        class="text-4xl md:text-6xl pb-4 font-bold bg-gradient-to-r from-sky-500 via-blue-500 to-blue-700 bg-clip-text text-transparent"
      >
        About InfiCoreWare Technologies
      </h1>

      <p class="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto leading-8">
        InfiCoreWare Technologies is an innovation-driven engineering company
        dedicated to bridging the gap between academic learning and industrial
        expectations through Embedded Systems, IoT, AI, EV, and Product
        Development.
      </p>
    </div>

    <!-- Journey Section -->
    <div class="grid md:grid-cols-2 gap-10 items-center mb-20 relative z-10">
      <!-- Left -->
      <div
        class="bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-500"
      >
        <h2 class="text-2xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-6">
          Our Journey
        </h2>

        <p class="text-gray-700 dark:text-gray-300 leading-8 text-lg">
          Founded with the vision of creating infinite possibilities in
          engineering, InfiCoreWare focuses on practical innovation, industrial
          research, and product-based development.
        </p>

        <p class="mt-5 text-gray-700 dark:text-gray-300 leading-8 text-lg">
          Our mission is to transform ideas into market-ready products while
          empowering students with hands-on industrial knowledge and real-time
          project exposure.
        </p>
      </div>

      <!-- Right -->
      <div
        class="bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-500"
      >
        <h3 class="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-6">
          Core Expertise
        </h3>

        <ul
          class="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 marker:text-sky-500 marker:text-lg"
        >
          <li>Embedded Systems Development</li>
          <li>IoT Product Engineering</li>
          <li>PCB Design & Manufacturing</li>
          <li>AI Edge Computing</li>
          <li>EV System Innovation</li>
          <li>Industrial Automation</li>
        </ul>
      </div>
    </div>

    <!-- Vision & Mission -->
    <div class="grid md:grid-cols-2 gap-8 relative z-10">
      <div
        class="bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 text-gray-800 dark:text-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-500"
      >
        <h3 class="text-2xl font-bold mb-4 text-sky-600 dark:text-sky-400">
          Our Vision
        </h3>
        <p class="text-gray-700 dark:text-gray-300 leading-8">
          To become a leading innovation hub in engineering education, product
          development, and industrial transformation.
        </p>
      </div>

      <div
        class="bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-gray-800 dark:text-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-500"
      >
        <h3 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Our Mission
        </h3>
        <p class="text-gray-700 dark:text-gray-300 leading-8">
          To build future-ready engineers through practical learning, industrial
          exposure, and innovative technology solutions.
        </p>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="mt-24 relative z-10">
      <div class="text-center mb-12">
        <h2
          class="text-4xl font-bold bg-gradient-to-r from-sky-500 via-blue-500 to-blue-700 bg-clip-text text-transparent"
        >
          Contact Us
        </h2>

        <p class="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">
          We'd love to hear from you. Reach out for engineering training,
          product development, industrial automation, embedded systems, IoT
          solutions, and project collaborations.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Google Map -->
        <div
          class="bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 rounded-3xl p-3 shadow-lg hover:shadow-xl transition duration-300"
        >
          <iframe
            src="https://www.google.com/maps?q=Gobichettipalayam,Tamil%20Nadu&output=embed"
            class="w-full h-[450px] rounded-2xl"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Contact Information -->
        <div
          class="bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="space-y-8">
            <div class="flex items-start gap-4">
              <Phone class="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h4 class="font-semibold text-lg text-gray-800 dark:text-white">
                  Phone
                </h4>
                <a
                  href="tel:+919789738080"
                  class="text-green-600 dark:text-green-400 hover:text-green-700"
                >
                  +91 97897 38080
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <Mail class="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 class="font-semibold text-lg text-gray-800 dark:text-white">
                  Email
                </h4>
                <a
                  href="mailto:contact.inficorewaretechnologies@gmail.com"
                  class="text-blue-600 dark:text-blue-400 break-all hover:text-blue-700"
                >
                  contact.inficorewaretechnologies@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <Clock class="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h4 class="font-semibold text-lg text-gray-800 dark:text-white">
                  Working Hours
                </h4>
                <p class="text-purple-600 dark:text-purple-400">
                  Monday - Saturday <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <MapPin class="w-6 h-6 text-sky-500 mt-1" />
              <div>
                <h4 class="font-semibold text-lg text-gray-800 dark:text-white">
                  Office Address
                </h4>
                <p class="text-gray-600 dark:text-gray-300 mt-1 leading-7">
                  Gobichettipalayam,<br />
                  Erode District,<br />
                  Tamil Nadu - 638452,<br />
                  India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>