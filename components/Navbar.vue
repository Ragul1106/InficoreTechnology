<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import logo from "../assets/images/logo.png";
import { User } from "lucide-vue-next";

const menuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About", path: "/about" },
  // { name: "Contact", path: "/contact" }
];
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full bg-gradient-to-r from-white via-sky-50 to-blue-100 shadow-lg border-b border-sky-100 backdrop-blur-lg"
  >
    <!-- NAVBAR -->
    <nav class="w-full px-4 md:px-10 py-4">
      <div class="flex items-center justify-between w-full">
        <!-- LOGO -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2 md:gap-3 group flex-shrink-0"
        >
          <div
            class="w-10 h-10 md:w-24 md:h-24 rounded-full overflow-hidden border border-sky-200"
          >
            <img :src="logo" alt="Logo" class="w-full h-full object-cover" />
          </div>

          <h1
            class="text-xl md:text-4xl font-extrabold tracking-[2px] md:tracking-[4px] whitespace-nowrap"
          >
            <span class="text-gray-900">INFI</span>
            <span class="text-sky-600">CORE</span>
            <span class="text-gray-900">WARE</span>
          </h1>
        </NuxtLink>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="relative text-black-700 font-bold hover:text-sky-600 transition group"
          >
            {{ link.name }}

            <span
              class="absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300"
              :class="
                route.path === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              "
            />
          </NuxtLink>

          <NuxtLink
            to="/login"
            class="p-2 rounded-full bg-sky-100 border border-sky-200 text-sky-700 hover:bg-sky-600 hover:text-white transition"
          >
            <User class="w-5 h-5" />
          </NuxtLink>
        </div>

        <!-- MOBILE HAMBURGER -->
        <button
          class="md:hidden flex items-center justify-center ml-3 bg-transparent border-0 outline-none p-0 z-50"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle Menu"
        >
          <svg class="w-9 h-9" viewBox="0 0 100 100">
            <!-- TOP -->
            <path
              d="M 20,30 H 80"
              class="line top"
              :class="{ open: menuOpen }"
            />

            <!-- MIDDLE -->
            <path
              d="M 20,50 H 80"
              class="line middle"
              :class="{ open: menuOpen }"
            />

            <!-- BOTTOM -->
            <path
              d="M 20,70 H 80"
              class="line bottom"
              :class="{ open: menuOpen }"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- OVERLAY -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-40 md:hidden"
        @click="menuOpen = false"
      />
    </transition>

    <!-- MOBILE MENU -->
    <transition name="slide-right">
      <div
        v-if="menuOpen"
        class="fixed top-[72px] right-0 h-[calc(100%-72px)] w-1/2 z-40 md:hidden shadow-2xl border-l border-sky-200"
      >
        <div class="flex flex-col bg-white gap-4 px-3 py-4 rounded-l-3xl">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="menuOpen = false"
            class="w-full text-center text-lg font-semibold px-2 py-3 rounded-xl border transition"
            :class="
              route.path === link.path
                ? 'bg-sky-600 text-white border-sky-600'
                : 'bg-sky-50 border-sky-100 hover:bg-sky-100'
            "
          >
            {{ link.name }}
          </NuxtLink>

          <NuxtLink
            to="/login"
            @click="menuOpen = false"
            class="w-full flex items-center text-center gap-3 text-sky-700 text-lg font-semibold px-4 py-3 rounded-xl bg-sky-100 border border-sky-200 hover:bg-sky-600 hover:text-white transition"
          >
            <User class="w-5 h-5 text-center" />
            Login
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide menu */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.35s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

/* SVG hamburger animation */
.line {
  fill: none;
  stroke: #0284c7;
  stroke-width: 8;
  stroke-linecap: round;
  transition: 0.4s ease;
  transform-origin: 50% 50%;
}

/* Top line -> X */
.top.open {
  transform: translateY(20px) rotate(45deg);
}

/* Middle disappears */
.middle.open {
  opacity: 0;
  transform: translateX(-20px);
}

/* Bottom line -> X */
.bottom.open {
  transform: translateY(-20px) rotate(-45deg);
}

/* Remove tap highlight */
button {
  -webkit-tap-highlight-color: transparent;
}

button:focus {
  outline: none;
  box-shadow: none;
}
</style>
