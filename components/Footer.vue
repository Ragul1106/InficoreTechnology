<script setup lang="ts">
// Site footer — logo, quick links, and contact info shown on every page.
import logo from "../assets/images/logo.png";
import valuvar from "../assets/images/thiruvalluvar.png";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-vue-next";
</script>

<template>
  <footer
    class="bg-white dark:bg-slate-900 border-t border-sky-100 dark:border-slate-800 transition-colors duration-300"
  >
    <div class="px-6 md:px-16 py-14">
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12"
      >
        <!-- Logo + About -->
        <div>
          <div
            class="flex flex-col sm:flex-row items-center sm:items-center gap-3 text-center sm:text-left"
          >
            <img
              :src="logo"
              alt="InfiCore Logo"
              class="w-14 h-14 rounded-full object-cover border border-sky-200 dark:border-slate-600 shadow-md shrink-0"
            />

            <h2
              class="font-bold leading-tight tracking-wide text-xl sm:text-2xl break-words"
            >
              <span class="text-black dark:text-white">Infi</span>
              <span class="text-sky-600">Core</span>
              <span class="text-black dark:text-white">Ware</span>
            </h2>
          </div>

          <!-- Thirukkural -->
          <div class="mt-6 flex items-start gap-2">
            <div class="flex-shrink-0">
              <img
                :src="valuvar"
                alt="Thiruvalluvar"
                class="w-28 h-24 md:w-36 md:h-36 object-cover"
              />
            </div>

            <div
              class="border-l-4 border-sky-500 pl-4 italic text-gray-700 dark:text-gray-300 leading-7"
            >
              <p
                class="font-semibold text-[14px] text-gray-800 dark:text-gray-200 leading-8 tracking-wide font-serif"
              >
                <span class="block">கற்க கசடறக் கற்பவை கற்றபின்</span>
                <span class="block">நிற்க அதற்குத் தக.</span>
              </p>

              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 not-italic">
                Learn thoroughly what is worth learning; having learned it, live
                by it.
              </p>

              <p class="mt-2 text-xs font-semibold text-sky-600 dark:text-sky-400 not-italic">
                — திருக்குறள் 391
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="xl:pl-10">
          <h3 class="text-xl font-bold mb-5 text-sky-600 dark:text-sky-400">
            Quick Links
          </h3>

          <div class="flex flex-col gap-3 text-gray-600 dark:text-gray-300">
            <NuxtLink
              to="/"
              class="hover:text-sky-500 dark:hover:text-sky-400 transition duration-300"
            >
              Home
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="hover:text-sky-500 dark:hover:text-sky-400 transition duration-300"
            >
              About
            </NuxtLink>

            <NuxtLink
              to="/courses"
              class="hover:text-sky-500 dark:hover:text-sky-400 transition duration-300"
            >
              Courses
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="hover:text-sky-500 dark:hover:text-sky-400 transition duration-300"
            >
              Contact
            </NuxtLink>

            <NuxtLink
              to="/terms-and-conditions"
              class="hover:text-sky-500 dark:hover:text-sky-400 transition duration-300"
            >
              Terms & Conditions
            </NuxtLink>
          </div>
        </div>

        <!-- Contact -->
        <div class="xl:pl-10">
          <h3 class="text-xl font-bold mb-5 text-sky-600 dark:text-sky-400">
            Contact Us
          </h3>

          <div class="space-y-4 text-gray-600 dark:text-gray-300">
            <div class="flex gap-3 items-start">
              <Phone class="w-5 h-5 text-sky-500 mt-1 shrink-0" />
              <a
                href="tel:+919789738080"
                class="hover:text-sky-500 dark:hover:text-sky-400 transition"
              >
                +91 97897 38080
              </a>
            </div>

            <div class="flex gap-3 items-start">
              <Mail class="w-5 h-5 text-sky-500 mt-1 shrink-0" />
              <a
                href="mailto:contact.inficorewaretechnologies@gmail.com"
                class="hover:text-sky-500 dark:hover:text-sky-400 transition break-all"
              >
                contact.inficorewaretechnologies@gmail.com
              </a>
            </div>

            <div class="flex gap-3 items-start">
              <MapPin class="w-5 h-5 text-sky-500 mt-1 shrink-0" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="xl:pl-10">
          <h3 class="text-xl font-bold mb-5 text-sky-600 dark:text-sky-400">
            Follow Us
          </h3>

          <div class="flex gap-4">
            <!-- WhatsApp -->
            <a
              href="https://wa.me/919789738080"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded-full bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 hover:bg-green-50 dark:hover:bg-green-900/30 hover:border-green-200 dark:hover:border-green-700 hover:scale-110 transition duration-300"
              aria-label="WhatsApp"
            >
              <svg
                class="w-5 h-5 text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="#"
              class="p-3 rounded-full bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 hover:bg-sky-100 dark:hover:bg-slate-700 hover:scale-110 transition duration-300"
              aria-label="Instagram"
            >
              <Instagram class="w-5 h-5 text-sky-600 dark:text-sky-400" />
            </a>

            <!-- LinkedIn -->
            <a
              href="#"
              class="p-3 rounded-full bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 hover:bg-sky-100 dark:hover:bg-slate-700 hover:scale-110 transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-5 h-5 text-sky-600 dark:text-sky-400" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-sky-100 dark:border-slate-800 mt-10 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm"
      >
        © 2026 InfiCoreWare Technologies. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>