<template>
  <header class="header">
    <div class="w-full xl:w-295 flex items-center justify-between">
      <div aria-hidden="true">
        <img class="object-fit" src="@/assets/img/logo.svg" alt="logo" />
      </div>
      <nav
        class="nav"
        :class="{
          'opacity-100': isShowMenu,
          'opacity-0': !isShowMenu,
          'h-75': isShowMenu,
          'h-0': !isShowMenu,
        }"
      >
        <ul
          class="flex items-center flex-col xl:flex-row"
          :class="{ flex: isShowMenu }"
        >
          <li
            class="px-6 py-3 cursor-pointer xl:h-auto h-12.5 flex items-center"
            v-for="item in navList"
            :key="item.name"
            :class="item.extraClass"
          >
            <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
          </li>
          <li class="xl:h-auto h-12.5 flex items-center">
            <NuxtLink
              to="/"
              class="px-6 py-1.5 xl:py-3 rounded-5.5 xl:rounded-none xl:ml-6 cursor-pointer bg-pink-600 text-white"
            >
              Get Involved
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="items-center flex xl:hidden">
        <button class="p-1 cursor-pointer" @click="toggleMenu">
          <img
            src="@/assets/img/menu.svg"
            class="object-fit w-8 md:w-12"
            alt="menu"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { isMobile } = useMobile();
const navList = ref([
  {
    name: "About",
    path: "/",
  },
  {
    name: "Solutions",
    path: "/",
    extraClass: "text-pink-600",
  },
  {
    name: "Iot",
    path: "/",
  },
  {
    name: "Open Source",
    path: "/",
  },
  {
    name: "Support",
    path: "/",
  },
]);
const isShowMenu = ref(false);
const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value;
};
</script>

<style lang="css" scoped>
@reference "tailwindcss";

.header {
  @apply h-20 bg-white w-full flex justify-center border-b border-gray-300 sticky top-0 z-10 px-6;
  @variant xl {
    @apply px-0;
  }
  @variant md {
    @apply px-12;
  }
}
.header-content {
  @apply w-full flex items-center justify-between;
  @variant xl {
    @apply w-295;
  }
}
.nav {
  @apply absolute  bottom-0 left-0 bg-gray-100  overflow-hidden transition-all duration-300 translate-y-full items-center  text-sm whitespace-nowrap w-full z-5;

  @variant xl {
    @apply flex w-auto translate-y-0 opacity-100 bg-white static !h-auto;
  }
}
</style>
