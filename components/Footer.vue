<script setup lang="ts">
import logo from "../assets/images/logo.png"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-vue-next"
</script>

<template>
  <footer class="bg-white border-t border-sky-100">
    <div class="px-6 md:px-16 py-14">
      <div class="grid md:grid-cols-4 gap-10">

        <!-- Logo + About -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <img
              :src="logo"
              alt="InfiCore Logo"
              class="w-14 h-14 rounded-full object-cover border border-sky-200 shadow-md"
            />

            <h2 class="text-2xl font-bold tracking-wider">
              <span class="text-black">Infi</span>
              <span class="text-sky-600">Core</span>
              <span class="text-black">Ware</span>
            </h2>
          </div>

          <p class="text-gray-600 leading-7">
            Engineering Infinite Possibilities through Embedded Systems,
            IoT Solutions, AI Edge Computing, EV Innovation, and
            Industry-Focused Training Programs.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-5 text-sky-600">
            Quick Links
          </h3>

          <div class="flex flex-col gap-3 text-gray-600">
            <NuxtLink
              to="/"
              class="hover:text-sky-500 transition duration-300"
            >
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
        <div>
          <h3 class="text-xl font-bold mb-5 text-sky-600">
            Contact Us
          </h3>

          <div class="space-y-4 text-gray-600">

            <div class="flex gap-3 items-start">
              <Phone class="w-5 h-5 text-sky-500 mt-1" />
              <a
                href="tel:+919789738080"
                class="hover:text-sky-500 transition"
              >
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
              <span>
                Coimbatore, Tamil Nadu, India
              </span>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-xl font-bold mb-5 text-sky-600">
            Follow Us
          </h3>

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