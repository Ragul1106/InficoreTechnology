<script setup lang="ts">
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
        About InfiCore Technologies
      </h1>

      <p class="mt-6 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
        InfiCore Technologies is an innovation-driven engineering company
        dedicated to bridging the gap between academic learning and industrial
        expectations through Embedded Systems, IoT, AI, EV, and Product
        Development.
      </p>
    </div>

    <!-- Journey Section -->
    <div class="grid md:grid-cols-2 gap-10 items-center mb-20 relative z-10">
      <!-- Left -->
      <div
        class="bg-white border border-sky-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-500"
      >
        <h2 class="text-2xl md:text-4xl font-bold text-sky-600 mb-6">
          Our Journey
        </h2>

        <p class="text-gray-700 leading-8 text-lg">
          Founded with the vision of creating infinite possibilities in
          engineering, InfiCore focuses on practical innovation, industrial
          research, and product-based development.
        </p>

        <p class="mt-5 text-gray-700 leading-8 text-lg">
          Our mission is to transform ideas into market-ready products while
          empowering students with hands-on industrial knowledge and real-time
          project exposure.
        </p>
      </div>

      <!-- Right -->
      <div
        class="bg-sky-50 border border-sky-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-500"
      >
        <h3 class="text-2xl font-bold text-sky-600 mb-6">Core Expertise</h3>

        <ul
          class="list-disc list-inside space-y-4 text-gray-700 marker:text-sky-500 marker:text-lg"
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
      <!-- Vision -->
      <div
        class="bg-sky-50 border border-sky-100 text-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-500"
      >
        <h3 class="text-2xl font-bold mb-4 text-sky-600">Our Vision</h3>

        <p class="text-gray-700 leading-8">
          To become a leading innovation hub in engineering education, product
          development, and industrial transformation.
        </p>
      </div>

      <!-- Mission -->
      <div
        class="bg-blue-50 border border-blue-100 text-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-500"
      >
        <h3 class="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>

        <p class="text-gray-700 leading-8">
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

        <p class="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
          We'd love to hear from you. Reach out for engineering training,
          product development, industrial automation, embedded systems, IoT
          solutions, and project collaborations.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Google Map -->
        <div
          class="bg-white border border-sky-100 rounded-3xl p-3 shadow-lg hover:shadow-xl transition duration-300"
        >
          <iframe
            src="https://www.google.com/maps?q=Gobichettipalayam,Tamil%20Nadu&output=embed"
            class="w-full h-[450px] rounded-2xl"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>

        <!-- Contact Information -->
        <div
          class="bg-white border border-sky-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="space-y-8">
            <!-- Phone -->
            <div class="flex items-start gap-4">
              <Phone class="w-6 h-6 text-green-500 mt-1" />

              <div>
                <h4 class="font-semibold text-lg text-gray-800">Phone</h4>

                <a
                  href="tel:+919789738080"
                  class="text-green-600 hover:text-green-700"
                >
                  +91 97897 38080
                </a>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <Mail class="w-6 h-6 text-blue-500 mt-1" />

              <div>
                <h4 class="font-semibold text-lg text-gray-800">Email</h4>

                <a
                  href="mailto:contact.inficorewaretechnologies@gmail.com"
                  class="text-blue-600 break-all hover:text-blue-700"
                >
                  contact.inficorewaretechnologies@gmail.com
                </a>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="flex items-start gap-4">
              <Clock class="w-6 h-6 text-purple-500 mt-1" />

              <div>
                <h4 class="font-semibold text-lg text-gray-800">
                  Working Hours
                </h4>

                <p class="text-purple-600">
                  Monday - Saturday <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <!-- Office Address -->
            <div class="flex items-start gap-4">
              <MapPin class="w-6 h-6 text-sky-500 mt-1" />

              <div>
                <h4 class="font-semibold text-lg text-gray-800">
                  Office Address
                </h4>

                <p class="text-gray-600 mt-1 leading-7">
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
