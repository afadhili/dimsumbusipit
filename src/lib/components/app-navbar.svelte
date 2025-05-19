<script lang="ts">
  import { page } from "$app/state";
  import Menu from "@lucide/svelte/icons/menu";
  import Times from "@lucide/svelte/icons/x";
  import Instagram from "@lucide/svelte/icons/instagram";
  import Whatsapp from "@lucide/svelte/icons/phone";

  const lists = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Menu",
      href: "/products",
    },
    {
      title: "Tentang Kami",
      href: "/about",
    },
    {
      title: "Kontak",
      href: "/contact",
    },
  ];

  let sticky = false;
  $: {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        sticky = window.scrollY > 0;
      });
    }
  }

  let isOpen = false;
  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav
  class={"transition duration-300 flex items-center justify-between w-full px-4 md:px-8 lg:px-20 py-4 gap-x-4 bg-transparent " +
    (sticky
      ? "shadow-md fixed top-0 z-50 backdrop-blur-md"
      : "fixed top-0 z-50")}
>
  <a href="/" class="text-lg font-bold">
    <img
      src="/logo.png"
      alt="Logo"
      class={"mr-2 duration-300 " + (sticky ? "w-20" : "w-24")}
    />
  </a>
  <ul class="hidden md:flex items-center gap-x-6">
    {#each lists as list}
      <li>
        <a
          href={list.href}
          class={"relative font-bold hover:text-[#FF8C00] duration-300 after:w-0 after:duration-300 hover:after:w-[80%] after:h-[2px] after:rounded-full after:bg-[#FF8C00] after:block after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 " +
            (page.url.pathname === list.href
              ? "text-[#FF8C00]"
              : "text-gray-700 ")}
        >
          {list.title}
        </a>
      </li>
    {/each}
  </ul>
  <button
    class="md:hidden bg-[#FF8C00] p-2 rounded-md text-white hover:bg-[#FF8C00]/80 duration-300"
    on:click={toggleMenu}
    aria-label="Menu"
  >
    <Menu />
  </button>
  <div
    class={(isOpen ? "left-0" : "-left-full") +
      " fixed top-0 h-screen w-full bg-white z-50 duration-300 md:hidden"}
  >
    <div
      class="flex items-center justify-between w-full px-4 md:px-8 lg:px-20 py-4 gap-x-4"
    >
      <a href="/" class="text-lg font-bold">
        <img src="/logo.png" alt="Logo" class="w-24" />
      </a>
      <button
        class="md:hidden bg-[#FF8C00] p-2 rounded-md text-white hover:bg-[#FF8C00]/80 duration-300"
        on:click={toggleMenu}
        aria-label="Close"
      >
        <Times />
      </button>
    </div>
    <ul class="flex flex-col items-center gap-y-4">
      {#each lists as list}
        <li>
          <a
            href={list.href}
            class={"relative font-bold hover:text-[#FF8C00] duration-300 after:w-0 after:duration-300 hover:after:w-[80%] after:h-[2px] after:rounded-full after:bg-[#FF8C00] after:block after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 " +
              (page.url.pathname === list.href
                ? "text-[#FF8C00]"
                : "text-gray-700")}
          >
            {list.title}
          </a>
        </li>
      {/each}
    </ul>
    <div
      class="absolute bottom-4 w-full flex items-center justify-center gap-x-4"
    >
      <a
        href="https://www.instagram.com/dimsum_busipit"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-700 hover:text-[#FF8C00] duration-300"
      >
        <Instagram />
      </a>
      <a
        href="https://wa.me/6289666667555"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-700 hover:text-[#FF8C00] duration-300"
      >
        <Whatsapp />
      </a>
    </div>
  </div>
</nav>
<div class="md:hidden h-16"></div>
