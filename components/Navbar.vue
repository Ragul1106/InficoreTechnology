<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import logo from "../assets/images/logo.png";
import { User, LogOut, Sun, Moon } from "lucide-vue-next";

const menuOpen = ref(false);
const route = useRoute();
const toast = useToast();

const { user, accessToken, logout } = useAuth();
const buildAuthUrl = useAuthUrl();

const isAuthenticated = computed(() => !!accessToken.value);

const handleLogout = async () => {
  const userId = user.value?.id;

  try {
    if (userId) {
      await $fetch(buildAuthUrl("auth/logout"), {
        method: "POST",
        body: { userId },
      });
    }
  } catch {
    // Ignore network/logout errors
  }

  logout();
  menuOpen.value = false;
  toast.success("Logged out successfully");
  await navigateTo("/login");
};

const colorMode = useColorMode();

// ✅ Reactive dark mode check
const isDark = computed(() => colorMode.value === "dark");

const toggleTheme = () => {
  colorMode.preference = isDark.value ? "light" : "dark";
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About", path: "/about" },
];
</script>

<template>
  <header
    class="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-sky-100 dark:border-slate-800 transition-colors duration-300"
  >
    <nav class="w-full px-4 md:px-10 py-4">
      <div class="flex items-center justify-between w-full">
        <!-- LOGO -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2 md:gap-3 group flex-shrink-0"
        >
          <div
            class="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden border border-sky-200 dark:border-slate-600"
          >
            <img :src="logo" alt="Logo" class="w-full h-full object-cover" />
          </div>

          <h1
            class="text-2xl md:text-3xl font-black uppercase"
            style="
              font-family: &quot;Montserrat&quot;, sans-serif;
              letter-spacing: 4px;
            "
          >
            <span class="text-gray-900 dark:text-white">Infi</span>
            <span class="text-sky-600">Core</span>
            <span class="text-gray-900 dark:text-white">ware</span>
          </h1>
        </NuxtLink>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="relative font-bold text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition group"
          >
            {{ link.name }}
            <span
              class="absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300"
              :class="
                route.path === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              "
            />
          </NuxtLink>

          <!-- DESKTOP THEME TOGGLE -->
          <ClientOnly>
            <button
              type="button"
              @click="toggleTheme"
              class="p-2 rounded-full bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-yellow-300 hover:bg-sky-600 hover:text-white transition"
              aria-label="Toggle theme"
            >
              <Sun v-if="isDark" class="w-5 h-5" />
              <Moon v-else class="w-5 h-5" />
            </button>
          </ClientOnly>

          <template v-if="isAuthenticated">
            <span class="font-semibold text-sky-700 dark:text-sky-300">
              Hi, {{ user?.firstName || "User" }}
            </span>
            <button
              type="button"
              @click="handleLogout"
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-sky-300 font-semibold hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 transition"
            >
              <LogOut class="w-5 h-5" />
              Logout
            </button>
          </template>

          <NuxtLink
            v-else
            to="/login"
            class="p-2 rounded-full bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-sky-300 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 transition"
            aria-label="Login"
          >
            <User class="w-5 h-5" />
          </NuxtLink>
        </div>

        <!-- MOBILE HAMBURGER -->
        <button
          type="button"
          class="md:hidden flex items-center justify-center ml-3 bg-transparent border-0 outline-none p-0 z-50"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle Menu"
        >
          <svg class="w-9 h-9" viewBox="0 0 100 100">
            <path
              d="M 20,30 H 80"
              class="line top"
              :class="{ open: menuOpen }"
            />
            <path
              d="M 20,50 H 80"
              class="line middle"
              :class="{ open: menuOpen }"
            />
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
        class="fixed inset-0 z-40 md:hidden bg-black/40"
        @click="menuOpen = false"
      />
    </transition>

    <!-- MOBILE MENU -->
    <transition name="slide-right">
      <div
        v-if="menuOpen"
        class="fixed top-[72px] right-0 h-[calc(100%-72px)] w-1/2 z-40 md:hidden shadow-2xl border-l border-sky-200 dark:border-slate-700"
      >
        <div
          class="flex flex-col bg-white dark:bg-slate-900 gap-4 px-3 py-4 rounded-l-3xl h-full"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="menuOpen = false"
            class="w-full text-center text-lg font-semibold px-2 py-3 rounded-xl border transition"
            :class="
              route.path === link.path
                ? 'bg-sky-600 text-white border-sky-600'
                : 'bg-sky-50 dark:bg-slate-800 border-sky-100 dark:border-slate-700 text-gray-800 dark:text-gray-200 hover:bg-sky-100 dark:hover:bg-slate-700'
            "
          >
            {{ link.name }}
          </NuxtLink>

          <button
            type="button"
            @click="toggleTheme"
            class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-yellow-300 hover:bg-sky-600 hover:text-white transition"
          >
            <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
            {{ colorMode.value === "dark" ? "Light Mode" : "Dark Mode" }}
          </button>

          <button
            v-if="isAuthenticated"
            type="button"
            @click="handleLogout"
            class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-white hover:bg-sky-600 hover:text-white transition"
          >
            <LogOut class="w-5 h-5" />
            Logout
          </button>

          <NuxtLink
            v-else
            to="/login"
            @click="menuOpen = false"
            class="w-full flex items-center justify-center gap-3 text-sky-700 dark:text-sky-300 text-lg font-semibold px-4 py-3 rounded-xl bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 transition"
          >
            <User class="w-5 h-5" />
            Login
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
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

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.35s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.line {
  fill: none;
  stroke: #0284c7;
  stroke-width: 8;
  stroke-linecap: round;
  transition: 0.4s ease;
  transform-origin: 50% 50%;
}

:global(.dark) .line {
  stroke: #38bdf8;
}

.top.open {
  transform: translateY(20px) rotate(45deg);
}
.middle.open {
  opacity: 0;
  transform: translateX(-20px);
}
.bottom.open {
  transform: translateY(-20px) rotate(-45deg);
}

button {
  -webkit-tap-highlight-color: transparent;
}
button:focus {
  outline: none;
  box-shadow: none;
}
</style>
