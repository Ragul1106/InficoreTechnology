<script setup lang="ts">
import founder from "../assets/images/founder.png"
import banner from "../assets/images/banner.jpg"
import rndImg from "../assets/images/rd.jpg"
import products from "../assets/images/product.webp"
import courseImg from "../assets/images/courses.jpg"
import servicebg from "../assets/images/servicebg.jpg"

import {
  Award,
  Briefcase,
  Rocket
} from "lucide-vue-next"

const featuredCards = [
  {
    title: "Courses",
    image: courseImg,
    path: "/courses"
  },
  {
   
    title: "Products & components",
    image: products,
    path: "/products"
  },
  {
    title: "R&D Innovation",
    image: rndImg,
    path: "/rnd"
  },
  
]
</script>

<template>
  <div class="bg-white">

    <!-- HERO SECTION -->
   <!-- <section
  class="min-h-[65vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 bg-gradient-to-br from-white via-sky-50 to-blue-100"
  
> -->
<section
  class="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-10 bg-gradient-to-br from-white via-sky-50 to-blue-100"
>
      <!-- Left -->
      <div class="md:w-1/2">
        <h1 class="text-4xl md:text-6xl font-bold text-sky-700 leading-tight">
          Engineering Infinite Possibilities
        </h1>

        <p class="mt-6 text-lg md:text-xl text-gray-600 leading-8">
          Delivering advanced engineering solutions in Embedded Systems, IoT,
          EV Technologies, AI Edge Computing, Industrial Automation, and Product Development.
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <div class="px-4 py-2 bg-sky-100 text-sky-700 rounded-full">
            Embedded Systems
          </div>
          <div class="px-4 py-2 bg-green-100 text-green-700 rounded-full">
            IoT Automation
          </div>
          <div class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            Robotics
          </div>
          <div class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
            Edge AI
          </div>
        </div>

        <!-- <div class="mt-8 flex gap-4">
          <NuxtLink
            to="/courses"
            class="bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-700 transition"
          >
            Explore Courses
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="border border-sky-600 text-sky-700 px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition"
          >
            Contact Us
          </NuxtLink>
        </div> -->
      </div>

      <!-- Right -->
      <div class="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          :src="banner"
          alt="Banner"
          class="w-[420px] md:w-[650px] rounded-3xl shadow-xl"
        />
      </div>
    </section>

     <!-- CORE DOMAINS -->
    <section
      class="relative px-6 md:px-16 py-24 bg-cover bg-center"
      :style="{ backgroundImage: `url(${servicebg})` }"
    >
      <div class="absolute inset-0 bg-white/90"></div>

      <div class="relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-sky-700">
            Explore Our Core Domains
          </h2>

          <p class="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Discover our specialized engineering domains focused on innovation.
          </p>
        </div>

       <div class="grid md:grid-cols-3 gap-8">
  <div
    v-for="card in featuredCards"
    :key="card.title"
    class="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
  >
    <!-- Image Container -->
    <div class="w-full h-[260px] md:h-[310px] bg-gray-100 flex items-center justify-center">
      <img
        :src="card.image"
        :alt="card.title"
        class="w-full h-full object-contain md:object-cover"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-2xl font-bold text-sky-700 mb-3">
        {{ card.title }}
      </h3>

      <p class="text-gray-600 mb-5 leading-7">
        Explore advanced innovations, industrial applications, and practical
        learning in this domain.
      </p>

      <NuxtLink
        :to="card.path"
        class="inline-block px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
      >
        Explore Now →
      </NuxtLink>
    </div>
  </div>
</div>
      </div>
    </section>

    <!-- FOUNDER SECTION -->
    <section class="px-6 md:px-16 py-20 bg-white">
      <div class="grid md:grid-cols-2 gap-14 items-center">

        <div class="flex justify-center">
          <img
            :src="founder"
            alt="Founder"
            class="w-72 md:w-96 rounded-3xl shadow-xl object-cover"
          />
        </div>

        <div>
          <h2 class="text-3xl md:text-5xl font-bold text-sky-700 mb-6">
            Meet Our Founder
          </h2>

          <h3 class="text-3xl font-bold text-gray-800 mb-2">
            Askar Ali N
          </h3>

          <p class="text-sky-600 text-lg mb-6">
            Founder & CEO
          </p>

          <p class="text-gray-700 leading-8 text-lg">
            Driven by innovation and practical engineering excellence,
            InfiCore Technologies was founded to bridge the gap between academic
            learning and industrial implementation.
          </p>
        </div>

      </div>
    </section>

   

    <!-- WHAT WE BUILD -->
    <section class="px-6 md:px-16 py-20 bg-sky-50">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-sky-700">
          What We Build
        </h2>
      </div>

      <div class="grid md:grid-cols-4 gap-8 mb-20">

  <!-- Embedded Products -->
  <div
    class="bg-white p-6 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
  >
    <h3 class="text-sky-700 text-xl font-bold mb-4">
      Embedded Products
    </h3>
    <p class="text-gray-600 leading-7">
      Custom hardware and firmware solutions designed for industrial automation,
      smart devices, and advanced electronics.
    </p>
  </div>

  <!-- IoT Solutions -->
  <div
    class="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
  >
    <h3 class="text-green-700 text-xl font-bold mb-4">
      IoT Solutions
    </h3>
    <p class="text-gray-600 leading-7">
      Cloud-connected systems, smart monitoring platforms, and secure IoT
      ecosystems for next-generation connectivity.
    </p>
  </div>

  <!-- Products & Components -->
  <div
    class="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
  >
    <h3 class="text-blue-700 text-xl font-bold mb-4">
      Products & Components
    </h3>
    <p class="text-gray-600 leading-7">
      High-quality electronic components, PCB modules, sensors, and innovative
      engineering products for industrial applications.
    </p>
  </div>

  <!-- Training Programs -->
  <div
    class="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
  >
    <h3 class="text-purple-700 text-xl font-bold mb-4">
      Training Programs
    </h3>
    <p class="text-gray-600 leading-7">
      Industry-oriented practical training in Embedded Systems, IoT, PCB Design,
      AI, and Product Development for future engineers.
    </p>
  </div>

</div>

      <!-- Stats -->
      <div class="grid md:grid-cols-4 gap-8">
        <div class="bg-white p-8 rounded-2xl text-center shadow-lg">
          <h2 class="text-4xl font-bold text-sky-700">500+</h2>
          <p class="mt-3 text-gray-600">Engineers Trained</p>
        </div>

        <div class="bg-white p-8 rounded-2xl text-center shadow-lg">
          <h2 class="text-4xl font-bold text-green-700">80+</h2>
          <p class="mt-3 text-gray-600">Industrial Projects</p>
        </div>

        <div class="bg-white p-8 rounded-2xl text-center shadow-lg">
          <h2 class="text-4xl font-bold text-orange-700">20+</h2>
          <p class="mt-3 text-gray-600">Research Partnerships</p>
        </div>

        <div class="bg-white p-8 rounded-2xl text-center shadow-lg">
          <h2 class="text-4xl font-bold text-purple-700">15+</h2>
          <p class="mt-3 text-gray-600">Prototype Products</p>
        </div>
      </div>
    </section>

    <!-- WHY INFICORE -->
    <section class="px-6 md:px-16 py-20 bg-white">
  <!-- Heading -->
  <div class="text-center mb-16">
    <h2 class="text-3xl md:text-5xl font-bold text-sky-700">
      Why Choose InfiCore?
    </h2>

    <p class="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
      Building future-ready engineers with practical industrial knowledge,
      real-time product development, and innovation-focused learning.
    </p>
  </div>

  <!-- Cards -->
  <div class="grid md:grid-cols-3 gap-8 text-center">

    <!-- Card 1 -->
    <div
      class="p-8 bg-gray-50 rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgba(14,165,233,0.10)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.18)] hover:-translate-y-2 transition duration-300"
    >
      <Award class="mx-auto w-14 h-14 text-sky-600 mb-5" />

      <h3 class="font-bold text-2xl text-gray-800 mb-4">
        Industry-Oriented Training
      </h3>

      <p class="text-gray-600 leading-7">
        Structured learning programs aligned with real industrial requirements
        in Embedded Systems, IoT, and Product Engineering.
      </p>
    </div>

    <!-- Card 2 -->
    <div
      class="p-8 bg-gray-50 rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgba(14,165,233,0.10)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.18)] hover:-translate-y-2 transition duration-300"
    >
      <Briefcase class="mx-auto w-14 h-14 text-sky-600 mb-5" />

      <h3 class="font-bold text-2xl text-gray-800 mb-4">
        Product-Based Learning
      </h3>

      <p class="text-gray-600 leading-7">
        Learn by building real-world prototypes, products, and industrial
        applications for hands-on engineering excellence.
      </p>
    </div>

    <!-- Card 3 -->
    <div
      class="p-8 bg-gray-50 rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgba(14,165,233,0.10)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.18)] hover:-translate-y-2 transition duration-300"
    >
      <Rocket class="mx-auto w-14 h-14 text-sky-600 mb-5" />

      <h3 class="font-bold text-2xl text-gray-800 mb-4">
        Startup Mindset
      </h3>

      <p class="text-gray-600 leading-7">
        Transform ideas into scalable solutions through innovation,
        research-driven development, and entrepreneurial thinking.
      </p>
    </div>

  </div>
</section>

    <!-- FINAL CTA -->
    <section class="px-6 md:px-16 py-20 bg-sky-700 text-center text-white">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">
        Ready to Build the Future?
      </h2>

      <p class="text-lg max-w-3xl mx-auto mb-10">
        Collaborate with InfiCore Technologies for next-generation embedded systems,
        IoT ecosystems, and engineering education.
      </p>

      <div class="flex flex-wrap justify-center gap-5">
        <NuxtLink
          to="/contact"
          class="px-8 py-4 rounded-xl font-bold bg-white text-sky-700 hover:scale-105 transition"
        >
          Contact Us
        </NuxtLink>

        <NuxtLink
          to="/courses"
          class="px-8 py-4 border border-white rounded-xl font-bold hover:bg-white hover:text-sky-700 transition"
        >
          View Courses
        </NuxtLink>
      </div>
    </section>

  </div>
</template>