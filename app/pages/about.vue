<template>
  <div class="min-h-screen bg-white px-6 md:px-16 py-16 relative overflow-hidden">
    
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
        expectations through Embedded Systems, IoT, AI, EV, and Product Development.
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
        <h3 class="text-2xl font-bold text-sky-600 mb-6">
          Core Expertise
        </h3>

        <ul class="space-y-4 text-gray-700">
          <li class="flex items-center gap-3">
            <span class="text-sky-500 text-xl">✔</span>
            Embedded Systems Development
          </li>

          <li class="flex items-center gap-3">
            <span class="text-sky-500 text-xl">✔</span>
            IoT Product Engineering
          </li>

          <li class="flex items-center gap-3">
            <span class="text-sky-500 text-xl">✔</span>
            PCB Design & Manufacturing
          </li>

          <li class="flex items-center gap-3">
            <span class="text-sky-500 text-xl">✔</span>
            AI Edge Computing
          </li>

          <li class="flex items-center gap-3">
            <span class="text-sky-500 text-xl">✔</span>
            EV System Innovation
          </li>

          <li class="flex items-center gap-3">
            <span class="text-sky-500 text-xl">✔</span>
            Industrial Automation
          </li>
        </ul>
      </div>
    </div>

    <!-- Vision & Mission -->
    <div class="grid md:grid-cols-2 gap-8 relative z-10">
      
      <!-- Vision -->
      <div
        class="bg-sky-50 border border-sky-100 text-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-500"
      >
        <h3 class="text-2xl font-bold mb-4 text-sky-600">
          Our Vision
        </h3>

        <p class="text-gray-700 leading-8">
          To become a leading innovation hub in engineering education,
          product development, and industrial transformation.
        </p>
      </div>

      <!-- Mission -->
      <div
        class="bg-blue-50 border border-blue-100 text-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-500"
      >
        <h3 class="text-2xl font-bold mb-4 text-blue-600">
          Our Mission
        </h3>

        <p class="text-gray-700 leading-8">
          To build future-ready engineers through practical learning,
          industrial exposure, and innovative technology solutions.
        </p>
      </div>
    </div>
  </div>
</template>