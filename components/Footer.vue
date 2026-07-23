<script setup lang="ts">
// Site footer — logo, quick links, and contact info shown on every page.
import logo from "../assets/images/logo.png";
import val from "../assets/images/val.png";
import valuvar from "../assets/images/thiruvalluvar.png";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-vue-next";
</script>

<template>
  <footer class="bg-white border-t border-sky-100">
    <div class="px-6 md:px-16 py-14">
      <!-- <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10"> -->
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
              class="w-14 h-14 rounded-full object-cover border border-sky-200 shadow-md shrink-0"
            />

            <h2
              class="font-bold leading-tight tracking-wide text-xl sm:text-2xl break-words"
            >
              <span class="text-black">Infi</span>
              <span class="text-sky-600">Core</span>
              <span class="text-black">Ware</span>
            </h2>
          </div>

          <!-- Thirukkural -->
          <div class="mt-6 flex items-start gap-2">
            <!-- Thiruvalluvar Image -->
            <div class="flex-shrink-0">
              <!-- <img
                :src="val"
                alt="Thiruvalluvar"
                class="w-28 h-24 md:w-36 md:h-36 object-cover"
              /> -->
              <img
                :src="valuvar"
                alt="Thiruvalluvar"
                class="w-28 h-24 md:w-36 md:h-36 object-cover"
              />
            </div>

            <!-- Kural -->
            <div
              class="border-l-4 border-sky-500 pl-4 italic text-gray-700 leading-7"
            >
              <p
                class="font-semibold text-[14px] text-gray-800 leading-8 tracking-wide font-serif"
              >
                <span class="block">கற்க கசடறக் கற்பவை கற்றபின்</span>
                <span class="block">நிற்க அதற்குத் தக.</span>
              </p>

              <p class="mt-2 text-sm text-gray-500 not-italic">
                Learn thoroughly what is worth learning; having learned it, live
                by it.
              </p>

              <p class="mt-2 text-xs font-semibold text-sky-600 not-italic">
                — திருக்குறள் 391
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <!-- <div> -->
        <div class="xl:pl-10">
          <h3 class="text-xl font-bold mb-5 text-sky-600">Quick Links</h3>

          <div class="flex flex-col gap-3 text-gray-600">
            <NuxtLink to="/" class="hover:text-sky-500 transition duration-300">
              Home
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="hover:text-sky-500 transition duration-300"
            >
              About
            </NuxtLink>

            <NuxtLink
              to="/courses"
              class="hover:text-sky-500 transition duration-300"
            >
              Courses
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="hover:text-sky-500 transition duration-300"
            >
              Contact
            </NuxtLink>

            <NuxtLink
              to="/terms-and-conditions"
              class="hover:text-sky-500 transition duration-300"
            >
              Terms & Conditions
            </NuxtLink>
          </div>
        </div>

        <!-- Contact -->
        <div class="xl:pl-10">
          <h3 class="text-xl font-bold mb-5 text-sky-600">Contact Us</h3>

          <div class="space-y-4 text-gray-600">
            <div class="flex gap-3 items-start">
              <Phone class="w-5 h-5 text-sky-500 mt-1" />
              <a href="tel:+919789738080" class="hover:text-sky-500 transition">
                +91 97897 38080
              </a>
            </div>

            <div class="flex gap-3 items-start">
              <Mail class="w-5 h-5 text-sky-500 mt-1" />
              <a
                href="mailto:contact.inficorewaretechnologies@gmail.com"
                class="hover:text-sky-500 transition break-all"
              >
                contact.inficorewaretechnologies@gmail.com
              </a>
            </div>

            <div class="flex gap-3 items-start">
              <MapPin class="w-5 h-5 text-sky-500 mt-1" />
              <span> Coimbatore, Tamil Nadu, India </span>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="xl:pl-10">
          <h3 class="text-xl font-bold mb-5 text-sky-600">Follow Us</h3>

          <div class="flex gap-4">
            <a
              href="#"
              class="p-3 rounded-full bg-sky-50 border border-sky-100 hover:bg-sky-100 hover:scale-110 transition duration-300"
            >
              <Facebook class="w-5 h-5 text-sky-600" />
            </a>

            <a
              href="#"
              class="p-3 rounded-full bg-sky-50 border border-sky-100 hover:bg-sky-100 hover:scale-110 transition duration-300"
            >
              <Instagram class="w-5 h-5 text-sky-600" />
            </a>

            <a
              href="#"
              class="p-3 rounded-full bg-sky-50 border border-sky-100 hover:bg-sky-100 hover:scale-110 transition duration-300"
            >
              <Linkedin class="w-5 h-5 text-sky-600" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-sky-100 mt-10 pt-6 text-center text-gray-500 text-sm"
      >
        © 2026 InfiCoreWare Technologies. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
