<script setup lang="ts">
// Terms & Conditions page — static legal content.
import { FileText, ShieldCheck, BookOpen, Cpu, Wallet, Lock, Mail } from "lucide-vue-next";
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-slate-950 px-6 md:px-16 py-16 transition-colors duration-300"
  >
    <!-- Heading -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-bold text-sky-600 dark:text-sky-400">
        Terms & Conditions
      </h1>

      <p class="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-8">
        Please read these terms carefully before using InfiCoreWare Technologies’
        services, training programs, embedded product development, and industrial solutions.
      </p>
    </div>

    <!-- Main Content -->
    <div
      class="max-w-6xl mx-auto bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-700 rounded-3xl p-8 md:p-12 shadow-xl space-y-8"
    >
      <!-- Section 1 -->
      <div
        class="p-6 rounded-2xl border border-sky-100 dark:border-slate-700 bg-sky-50 dark:bg-slate-800 hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4 mb-4">
          <FileText class="w-7 h-7 text-sky-500 dark:text-sky-400" />
          <h2 class="text-2xl font-bold text-sky-700 dark:text-sky-400">
            1. Acceptance of Terms
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 leading-8">
          By accessing InfiCoreWare Technologies’ services, website, products,
          or training programs, you agree to comply with these terms and conditions.
        </p>
      </div>

      <!-- Section 2 -->
      <div
        class="p-6 rounded-2xl border border-sky-100 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4 mb-4">
          <BookOpen class="w-7 h-7 text-sky-500 dark:text-sky-400" />
          <h2 class="text-2xl font-bold text-sky-700 dark:text-sky-400">
            2. Training Programs
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 leading-8">
          Our embedded systems, IoT, AI, EV, and Industry 4.0 training programs
          are strictly for educational purposes. Course materials, modules,
          and intellectual content must not be copied, shared, or resold.
        </p>
      </div>

      <!-- Section 3 -->
      <div
        class="p-6 rounded-2xl border border-sky-100 dark:border-slate-700 bg-sky-50 dark:bg-slate-800 hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4 mb-4">
          <Cpu class="w-7 h-7 text-sky-500 dark:text-sky-400" />
          <h2 class="text-2xl font-bold text-sky-700 dark:text-sky-400">
            3. Product Development & IP
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 leading-8">
          All embedded product designs, IoT architectures, PCB layouts,
          firmware, and industrial innovations developed by InfiCoreWare Technologies
          remain protected under intellectual property laws.
        </p>
      </div>

      <!-- Section 4 -->
      <div
        class="p-6 rounded-2xl border border-sky-100 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4 mb-4">
          <Wallet class="w-7 h-7 text-sky-500 dark:text-sky-400" />
          <h2 class="text-2xl font-bold text-sky-700 dark:text-sky-400">
            4. Payments & Refund Policy
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 leading-8">
          Payments made for courses, consulting, product development,
          or industrial services are subject to our refund policy.
          Refund eligibility depends on the service agreement.
        </p>
      </div>

      <!-- Section 5 -->
      <div
        class="p-6 rounded-2xl border border-sky-100 dark:border-slate-700 bg-sky-50 dark:bg-slate-800 hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4 mb-4">
          <Lock class="w-7 h-7 text-sky-500 dark:text-sky-400" />
          <h2 class="text-2xl font-bold text-sky-700 dark:text-sky-400">
            5. Privacy Policy
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 leading-8">
          Personal data collected through our platform will remain confidential
          and used only for communication, training enrollment, and service delivery.
        </p>
      </div>

      <!-- Section 6 -->
      <div
        class="p-6 rounded-2xl border border-sky-100 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4 mb-4">
          <ShieldCheck class="w-7 h-7 text-sky-500 dark:text-sky-400" />
          <h2 class="text-2xl font-bold text-sky-700 dark:text-sky-400">
            6. Limitation of Liability
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 leading-8">
          InfiCoreWare Technologies is not responsible for any indirect damages,
          business interruptions, or technical failures arising from
          the use of our services or products.
        </p>
      </div>

      <!-- Section 7 -->
      <div
        class="p-6 rounded-2xl border border-sky-100 dark:border-slate-700 bg-sky-50 dark:bg-slate-800 hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4 mb-4">
          <Mail class="w-7 h-7 text-sky-500 dark:text-sky-400" />
          <h2 class="text-2xl font-bold text-sky-700 dark:text-sky-400">
            7. Contact Information
          </h2>
        </div>

        <p class="text-gray-700 dark:text-gray-300 mb-4">
          For any questions regarding these terms, contact us:
        </p>

        <a
          href="mailto:contact.inficoretech@gmail.com"
          class="text-sky-600 dark:text-sky-400 font-semibold hover:text-sky-800 dark:hover:text-sky-300 transition break-all"
        >
          contact.inficorewaretechnologies@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>