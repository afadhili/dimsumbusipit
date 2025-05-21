<script lang="ts">
  import Cart from "@lucide/svelte/icons/shopping-cart";
  import Arrow from "@lucide/svelte/icons/arrow-right";
</script>

<div
  class="min-h-screen flex flex-col md:flex-row justify-center items-center gap-4 px-8 md:px-20 bg-[url('/blob.svg')] bg-right md:bg-cover bg-no-repeat"
>
  <div
    class="w-full max-w-lg md:max-w-xl flex flex-col justify-center items-start mb-8 md:mb-0"
  >
    <h1
      class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF8C00] mb-2 md:mb-4"
    >
      Dimsum BuSipit
    </h1>
    <h2
      class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 md:mb-2"
    >
      Lezat, Fresh, Halal, dan Berkualitas!
    </h2>
    <p class="lg:text-lg text-gray-600 max-w-sm">
      Dimsum bu Sipit hadir dengan cita rasa rumahan yang premium. Setiap
      gigitan dimasak dengan bahan segar, tanpa pengawet, dan penuh cinta.
    </p>
    <div class="flex gap-4 mt-4">
      <a
        href="/products"
        class="flex items-center group gap-2 bg-[#FF8C00] text-white text-sm md:text-md lg:text-lg font-semibold rounded-lg px-6 py-2 hover:bg-[#FF8C00]/80 transition duration-300"
        >Lihat Produk <Arrow
          class="group-hover:translate-x-2 duration-300"
        /></a
      >
    </div>
  </div>

  <div class="md:w-full max-w-lg mx-8 sm:mx-20 md:mx-0">
    <img src="/readytoeat.webp" alt="dimsum" class="w-full object-cover" />
  </div>
</div>
<div class="min-h-screen">
  <h1
    class="text-3xl md:text-4xl text-center font-bold text-[#FF8C00] mx-4 md:mx-20 mt-16"
  >
    Featured Products
  </h1>
  <hr class="border-t-2 border-[#FF8C00] w-16 mx-auto my-4" />
  <p
    class="text-center md:text-lg font-semibold text-gray-500 mb-8 mx-4 sm:mx-20"
  >
    Temukan produk dimsum kami yang paling populer dan nikmati cita rasa terbaik
    dari Bu Sipit!
  </p>

  <div
    class="grid auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[40%] lg:auto-cols-[27%] bg-[url('/waves.svg')] bg-cover bg-bottom bg-no-repeat px-8 sm:px-20 grid-flow-col place-items-center gap-4 py-4 overflow-x-auto snap-x scroll-smooth snap-mandatory"
    style="scrollbar-width: thin; scrollbar-color: #ffffff transparent"
  >
    <div class="bg-white shadow-lg p-4 relative snap-center">
      <div class="w-full overflow-hidden">
        <img
          src="/dimsum_keju.jpeg"
          alt="Dimsum"
          class="object-cover"
          style="aspect-ratio: 1/1"
          loading="lazy"
        />
      </div>

      <div class="flex flex-col justify-between items-center mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mt-2 text-center">
          Dimsum Keju
        </h3>
        <p class="text-gray-600 text-center">
          Dimsum keju yang creamy dan lezat, siap memanjakan lidah Anda!
        </p>
        <button
          class="flex items-center gap-2 bg-[#FF8C00] text-white font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-[#FF8C00]/80 transition duration-300"
          >Pesan Sekarang <Cart /></button
        >
      </div>

      <span
        class="text-xl font-semibold absolute top-6 right-6 bg-[#FF8C00] text-white rounded-full py-2 px-4"
        >36K</span
      >
    </div>
    <div class="bg-white shadow-lg p-4 relative snap-center">
      <div class="w-full overflow-hidden">
        <img
          src="/dimsum_keju.jpeg"
          alt="Dimsum"
          class="object-cover"
          style="aspect-ratio: 1/1"
          loading="lazy"
        />
      </div>

      <div class="flex flex-col justify-between items-center mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mt-2 text-center">
          Dimsum Keju
        </h3>
        <p class="text-gray-600 text-center">
          Dimsum keju yang creamy dan lezat, siap memanjakan lidah Anda!
        </p>
        <button
          class="flex items-center gap-2 bg-[#FF8C00] text-white font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-[#FF8C00]/80 transition duration-300"
          >Pesan Sekarang <Cart /></button
        >
      </div>

      <span
        class="text-xl font-semibold absolute top-6 right-6 bg-[#FF8C00] text-white rounded-full py-2 px-4"
        >36K</span
      >
    </div>
    <div class="bg-white shadow-lg p-4 relative snap-center">
      <div class="w-full overflow-hidden">
        <img
          src="/dimsum_keju.jpeg"
          alt="Dimsum"
          class="object-cover"
          style="aspect-ratio: 1/1"
          loading="lazy"
        />
      </div>

      <div class="flex flex-col justify-between items-center mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mt-2 text-center">
          Dimsum Keju
        </h3>
        <p class="text-gray-600 text-center">
          Dimsum keju yang creamy dan lezat, siap memanjakan lidah Anda!
        </p>
        <button
          class="flex items-center gap-2 bg-[#FF8C00] text-white font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-[#FF8C00]/80 transition duration-300"
          >Pesan Sekarang <Cart /></button
        >
      </div>

      <span
        class="text-xl font-semibold absolute top-6 right-6 bg-[#FF8C00] text-white rounded-full py-2 px-4"
        >36K</span
      >
    </div>
    <div class="bg-white shadow-lg p-4 relative snap-center">
      <div class="w-full overflow-hidden">
        <img
          src="/dimsum_keju.jpeg"
          alt="Dimsum"
          class="object-cover"
          style="aspect-ratio: 1/1"
          loading="lazy"
        />
      </div>

      <div class="flex flex-col justify-between items-center mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mt-2 text-center">
          Dimsum Keju
        </h3>
        <p class="text-gray-600 text-center">
          Dimsum keju yang creamy dan lezat, siap memanjakan lidah Anda!
        </p>
        <button
          class="flex items-center gap-2 bg-[#FF8C00] text-white font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-[#FF8C00]/80 transition duration-300"
          >Pesan Sekarang <Cart /></button
        >
      </div>

      <span
        class="text-xl font-semibold absolute top-6 right-6 bg-[#FF8C00] text-white rounded-full py-2 px-4"
        >36K</span
      >
    </div>
    <div class="bg-white shadow-lg p-4 relative snap-center">
      <div class="w-full overflow-hidden">
        <img
          src="/dimsum_keju.jpeg"
          alt="Dimsum"
          class="object-cover"
          style="aspect-ratio: 1/1"
          loading="lazy"
        />
      </div>

      <div class="flex flex-col justify-between items-center mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mt-2 text-center">
          Dimsum Keju
        </h3>
        <p class="text-gray-600 text-center">
          Dimsum keju yang creamy dan lezat, siap memanjakan lidah Anda!
        </p>
        <button
          class="flex items-center gap-2 bg-[#FF8C00] text-white font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-[#FF8C00]/80 transition duration-300"
          >Pesan Sekarang <Cart /></button
        >
      </div>

      <span
        class="text-xl font-semibold absolute top-6 right-6 bg-[#FF8C00] text-white rounded-full py-2 px-4"
        >36K</span
      >
    </div>
    <div class="bg-white shadow-lg p-4 relative snap-center">
      <div class="w-full overflow-hidden">
        <img
          src="/dimsum_keju.jpeg"
          alt="Dimsum"
          class="object-cover"
          style="aspect-ratio: 1/1"
          loading="lazy"
        />
      </div>

      <div class="flex flex-col justify-between items-center mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mt-2 text-center">
          Dimsum Keju
        </h3>
        <p class="text-gray-600 text-center">
          Dimsum keju yang creamy dan lezat, siap memanjakan lidah Anda!
        </p>
        <button
          class="flex items-center gap-2 bg-[#FF8C00] text-white font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-[#FF8C00]/80 transition duration-300"
          >Pesan Sekarang <Cart /></button
        >
      </div>

      <span
        class="text-xl font-semibold absolute top-6 right-6 bg-[#FF8C00] text-white rounded-full py-2 px-4"
        >36K</span
      >
    </div>
  </div>
</div>
<div class="h-16"></div>
