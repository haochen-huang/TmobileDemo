<template>
  <header
    class="h-[80px] bg-white flex items-center justify-between px-6 md:px-12 xl:px-32 border-b border-gray-300 sticky top-0 z-10"
  >
    <div aria-hidden="true">
      <img src="@/assets/img/logo.svg" alt="logo" />
    </div>
    <nav
      class="absolute xl:static bottom-0 left-0 bg-gray-100 xl:bg-white overflow-hidden transition-all duration-300 transform-[translateY(100%)] xl:transform-[translateY(0%)] opacity-0 xl:opacity-100 items-center xl:flex text-sm whitespace-nowrap w-full xl:w-auto z-5 xl:h-auto"
      :class="{
        'opacity-100': isShowMenu,
        'h-[300px]': isShowMenu,
        'h-[0px]': !isShowMenu,
      }"
      :style="{}"
    >
      <ul
        class="flex items-center flex-col xl:flex-row"
        :class="{ flex: isShowMenu }"
      >
        <li
          class="px-[24px] py-[12px] cursor-pointer xl:h-auto h-[50px] flex items-center"
          v-for="item in navList"
          :key="item.name"
          :class="item.extraClass"
        >
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
        <li class="xl:h-auto h-[50px] flex items-center">
          <NuxtLink
            to="/"
            class="px-[24px] py-[6px] xl:py-[12px] rounded-[22px] xl:rounded-[0px] xl:ml-[24px] cursor-pointer bg-pink-600 text-white"
          >
            Get Involved
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="items-center flex xl:hidden">
      <button class="p-1 cursor-pointer" @click="toggleMenu">
        <img src="@/assets/img/menu.svg" alt="menu" />
      </button>
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
// const NavtitemHeight = 50;
// const navRef = ref<HTMLElement>();
// watch(isShowMenu, (newVal) => {
//   if (newVal) {
//     navRef.value!.style.opacity = "1";
//     navRef.value!.style.height =
//       (navList.value.length + 1) * NavtitemHeight + "px";
//   } else {
//     navRef.value!.style.opacity = "0";
//     navRef.value!.style.height = "0px";
//   }
// });
</script>
