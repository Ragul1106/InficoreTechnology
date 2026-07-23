<script setup lang="ts">
// Home page — static marketing content (hero, founder, services, etc.).
import founder from "../assets/images/founder.png";
import banner from "../assets/images/banner.jpg";
import rndImg from "../assets/images/rnd.png";
import products from "../assets/images/products.png";
import courseImg from "../assets/images/courses.png";
import servicebg from "../assets/images/servicebg.jpg";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import arun from "../assets/images/arun.jpg";
import priya from "../assets/images/priya.jpg";
import ragul from "../assets/images/ragul.jpg";
import sneha from "../assets/images/sneha.jpg";
import karthick from "../assets/images/karthik.jpg";
import divya from "../assets/images/divya.jpg";

import "swiper/css";
import "swiper/css/pagination";

import {
  Award,
  Briefcase,
  Rocket,
  Cpu,
  Wifi,
  Bot,
  Car,
  CircuitBoard,
  Microchip,
  Code,
  MonitorCog,
  Zap,
  BrainCircuit,
  Workflow,
  Cable,
} from "lucide-vue-next";

const technologies = [
  { title: "Embedded", icon: Cpu },
  { title: "IoT", icon: Wifi },
  { title: "Robotics", icon: Bot },
  // { title: "EV Tech", icon: Car },
  { title: "PCB Design", icon: CircuitBoard },
  { title: "Edge AI", icon: BrainCircuit },
  // { title: "Firmware", icon: Microchip },
  // { title: "C Programming", icon: Code },
  // { title: "C++", icon: MonitorCog },
  // { title: "Python", icon: Workflow },
  // { title: "Automation", icon: Zap },
  // { title: "Product Design", icon: Cable },
];

const featuredCards = [
  {
    title: "Courses",
    image: courseImg,
    path: "/courses",
    description:
      "Gain industry-ready skills through hands-on training in Embedded Systems, IoT, Edge AI, Robotics, PCB Design, and Product Development with real-world projects.",
  },
  {
    title: "R&D Innovations",
    image: rndImg,
    path: "/innovations",
    description:
      "Discover cutting-edge research, intelligent automation, AI-powered solutions, rapid prototyping, and next-generation engineering innovations developed by InfiCoreWare.",
  },
  {
    title: "Products & Components",
    image: products,
    path: "/products",
    description:
      "Explore premium embedded hardware, IoT modules, development boards, industrial controllers, sensors, and high-quality electronic components for modern applications.",
  },
];

const studentReviews = [
  {
    name: "Arun Kumar",
    image: arun,
    review:
      "The Embedded Systems course provided excellent hands-on training with real industrial projects. The mentors were highly supportive throughout the learning journey.",
  },
  {
    name: "Priya Sharma",
    image: priya,
    review:
      "InfiCore's practical approach helped me gain confidence in IoT and PCB Design. The curriculum is perfectly aligned with industry needs.",
  },
  {
    name: "Rahul Raj",
    image: ragul,
    review:
      "One of the best training institutes for Embedded Systems. The real-time product development experience was invaluable for my career.",
  },
  {
    name: "Sneha Reddy",
    image: sneha,
    review:
      "The faculty explained every concept clearly, and the practical sessions helped me develop confidence in designing and debugging embedded systems.",
  },
  {
    name: "Karthick S",
    image: karthick,
    review:
      "I joined the IoT program with very little knowledge. After completing the course, I successfully built multiple real-time projects and improved my technical skills significantly.",
  },
  {
    name: "Divya Nair",
    image: divya,
    review:
      "The industry-focused curriculum, live projects, and continuous mentor support made my learning experience outstanding. I highly recommend InfiCore Technologies to aspiring engineers.",
  },
];
</script>

<template>
  <div class="bg-white">
    <!-- <section
  class="min-h-[65vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 bg-gradient-to-br from-white via-sky-50 to-blue-100"
  
> -->
   <section
  class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-6 sm:px-8 md:px-10 lg:px-16 py-10 lg:py-16 bg-gradient-to-br from-white via-sky-50 to-blue-100"
>
  <!-- Left -->
  <div class="w-full lg:w-1/2 text-center lg:text-left">
    <h1
      class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-700 leading-tight"
    >
      Engineering Infinite Possibilities
    </h1>

    <p
      class="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-7 lg:leading-8"
    >
      Delivering advanced engineering solutions in Embedded Systems, IoT,
      EV Technologies, AI Edge Computing, Industrial Automation, and Product
      Development.
    </p>

    <div
      class="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
    >
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
  </div>

  <!-- Right -->
  <div class="w-full lg:w-1/2 flex justify-center">
    <div class="hero-orbit">
      <div class="absolute inset-0 overflow-hidden">
        <div class="grid-pattern"></div>
        <div class="glow glow1"></div>
        <div class="glow glow2"></div>
        <div class="glow glow3"></div>
      </div>

      <div class="orbit-ring">
        <div
          v-for="(item, index) in technologies"
          :key="item.title"
          class="tech-card"
          :style="{
            '--angle': `${index * (360 / technologies.length)}deg`,
          }"
        >
          <component :is="item.icon" class="icon" />
          <span>{{ item.title }}</span>
        </div>

        <div class="center">
          <Cpu class="center-icon" />
        </div>
      </div>
    </div>
  </div>
</section>

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
            <div
              class="w-full h-[180px] md:h-[310px] bg-gray-100 flex items-center justify-center"
            >
              <img
                :src="card.image"
                :alt="card.title"
                class="w-full h-full object-contain md:object-contain"
              />
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-2xl font-bold text-sky-700 mb-3">
                {{ card.title }}
              </h3>

              <p class="text-gray-600 mb-5 leading-7">
                {{ card.description }}
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

    <section class="px-6 md:px-16 py-20 bg-white">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-sky-700">
          Why Choose InfiCoreWare?
        </h2>

        <p class="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
          Building future-ready engineers with practical industrial knowledge,
          real-time product development, and innovation-focused learning.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div
          class="p-8 bg-gray-50 rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgba(14,165,233,0.10)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.18)] hover:-translate-y-2 transition duration-300"
        >
          <Award class="mx-auto w-14 h-14 text-sky-600 mb-5" />

          <h3 class="font-bold text-2xl text-gray-800 mb-4">
            Industry-Oriented Training
          </h3>

          <p class="text-gray-600 leading-7">
            Structured learning programs aligned with real industrial
            requirements in Embedded Systems, IoT, and Product Engineering.
          </p>
        </div>

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

          <h3 class="font-bold text-2xl text-gray-800 mb-4">Startup Mindset</h3>

          <p class="text-gray-600 leading-7">
            Transform ideas into scalable solutions through innovation,
            research-driven development, and entrepreneurial thinking.
          </p>
        </div>
      </div>
    </section>

    <section
      class="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50"
    >
      <!-- Decorative Background -->
      <div
        class="absolute -top-20 -left-20 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl"
      ></div>

      <div
        class="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto px-6">
        <!-- Section Heading -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <!-- <span
            class="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-5 py-2 text-5xl font-semibold"
          >
             Testimonials
          </span> -->

          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900">
            Loved by Our Students
          </h2>

          <p class="mt-5 text-lg text-gray-600 leading-8">
            Hear from students who transformed their careers through
            <span class="font-bold text-sky-600">
              InfiCoreWare Technologies </span
            >.
          </p>
        </div>

        <!-- Testimonial Cards -->
        <Swiper
          :modules="[Autoplay, Pagination]"
          :slides-per-view="3"
          :space-between="30"
          :loop="true"
          :centered-slides="false"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          class="testimonialSwiper"
        >
          <SwiperSlide v-for="student in studentReviews" :key="student.name">
            <div
              class="bg-white rounded-3xl border border-sky-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
            >
              <!-- Stars -->
              <div class="flex justify-center text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <!-- Review -->
              <p class="text-gray-600 italic text-center leading-8">
                "{{ student.review }}"
              </p>

              <div
                class="my-6 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"
              ></div>

              <!-- Student -->
              <div class="flex flex-col items-center">
                <img
                  :src="student.image"
                  :alt="student.name"
                  class="w-14 h-14 rounded-full object-cover border-2 border-sky-500 shadow-md"
                />

                <h4 class="mt-4 text-lg font-bold text-slate-900">
                  {{ student.name }}
                </h4>

                <p class="text-sm text-gray-500">
                  InfiCore Technologies Student
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Bottom Statistics -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <h3 class="text-4xl font-bold text-sky-600">500+</h3>
            <p class="mt-2 text-gray-600">Students Trained</p>
          </div>

          <div class="text-center">
            <h3 class="text-4xl font-bold text-sky-600">4.9★</h3>
            <p class="mt-2 text-gray-600">Average Rating</p>
          </div>

          <div class="text-center">
            <h3 class="text-4xl font-bold text-sky-600">95%</h3>
            <p class="mt-2 text-gray-600">Course Completion</p>
          </div>

          <div class="text-center">
            <h3 class="text-4xl font-bold text-sky-600">100+</h3>
            <p class="mt-2 text-gray-600">Industry Projects</p>
          </div>
        </div>
      </div>
    </section>

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
          <h3 class="text-sky-700 text-xl font-bold mb-4">Embedded Products</h3>
          <p class="text-gray-600 leading-7">
            Custom hardware and firmware solutions designed for industrial
            automation, smart devices, and advanced electronics.
          </p>
        </div>

        <div
          class="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <h3 class="text-green-700 text-xl font-bold mb-4">IoT Solutions</h3>
          <p class="text-gray-600 leading-7">
            Cloud-connected systems, smart monitoring platforms, and secure IoT
            ecosystems for next-generation connectivity.
          </p>
        </div>

        <div
          class="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <h3 class="text-blue-700 text-xl font-bold mb-4">
            Products & Components
          </h3>
          <p class="text-gray-600 leading-7">
            High-quality electronic components, PCB modules, sensors, and
            innovative engineering products for industrial applications.
          </p>
        </div>

        <div
          class="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <h3 class="text-purple-700 text-xl font-bold mb-4">
            Training Programs
          </h3>
          <p class="text-gray-600 leading-7">
            Industry-oriented practical training in Embedded Systems, IoT, PCB
            Design, AI, and Product Development for future engineers.
          </p>
        </div>
      </div>

      <!-- <div class="grid md:grid-cols-4 gap-8">
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
      </div> -->
    </section>

    <!-- FINAL CTA -->
    <section class="px-6 md:px-16 py-20 bg-sky-700 text-center text-white">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">
        Ready to Build the Future?
      </h2>

      <p class="text-lg max-w-3xl mx-auto mb-10">
        Collaborate with InfiCoreWare Technologies for next-generation embedded
        systems, IoT ecosystems, and engineering education.
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

<style scoped>
:deep(.testimonialSwiper) {
  padding-bottom: 60px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #0ea5e9;
  opacity: 0.4;
}

:deep(.swiper-pagination-bullet-active) {
  width: 30px;
  border-radius: 999px;
  opacity: 1;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
}

:deep(.swiper-slide > div) {
  width: 100%;
}
</style>
