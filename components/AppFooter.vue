<template>
  <footer class="footer-container">
    <div class="footer-content">
      <img
        src="~/assets/img/logo.png"
        alt="logo"
        class="w-35 object-fit mb-9"
      />
      <section class="flex flex-col md:flex-row gap-8 justify-between">
        <ul
          class="grid grid-cols-[1fr_156px] md:grid-cols-1 font-bold gap-4 md:gap-6"
        >
          <NuxtLink>About</NuxtLink>
          <NuxtLink>IoT (Internet of Things)</NuxtLink>
          <NuxtLink>Open Source</NuxtLink>
          <NuxtLink>Contact</NuxtLink>
          <NuxtLink>Log In</NuxtLink>
        </ul>
        <div>
          <NuxtLink class="list-title">Solution</NuxtLink>
          <ul class="footer-list">
            <NuxtLink>Fraud Prevention</NuxtLink>
            <NuxtLink>Call Verification</NuxtLink>
            <NuxtLink>5G Location Services</NuxtLink>
            <NuxtLink>Enhanced Caller ID</NuxtLink>
            <NuxtLink>IoT Developer Kit</NuxtLink>
          </ul>
        </div>
        <div>
          <NuxtLink class="list-title">Terms</NuxtLink>
          <ul class="footer-list">
            <NuxtLink>Privacy Center</NuxtLink>
            <NuxtLink>Privacy Policy</NuxtLink>
            <NuxtLink>Fraud Prevent Data Use Policy</NuxtLink>
            <NuxtLink>Terms & Conditions</NuxtLink>
            <NuxtLink>Do Not Sell My Data</NuxtLink>
          </ul>
        </div>
        <div>
          <NuxtLink class="list-title">Support</NuxtLink>
          <ul class="footer-list">
            <NuxtLink>General FAQ</NuxtLink>
            <NuxtLink>API documentation</NuxtLink>
            <NuxtLink>IoT documentation</NuxtLink>
            <NuxtLink>Open Source documentation</NuxtLink>
          </ul>
        </div>
      </section>
      <div class="flex items-center justify-between mt-12 md:mt-10">
        <p class="leading-7 w-39 md:w-[unset] text-sm">
          Copyright © 2022 T-Mobile. All Rights Reserved.
        </p>
        <a class="flex items-center gap-4 xl:mr-0 md:mr-10">
          <img src="~/assets/img/twitter.png" alt="twitter" class="w-6 h-6" />
          <span class="text-base leading-6 hidden md:block"
            >Follow us on Twitter</span
          >
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@reference "tailwindcss";
.list-title {
  @apply font-bold mb-4 xl:mb-1 block;
}
.footer-container {
  @apply bg-black text-white flex justify-center px-12 py-12 text-base leading-6;
}
.footer-content {
  @apply flex flex-col justify-between w-full;
  @variant xl {
    @apply w-295;
  }
}
.footer-list {
  a {
    @apply block mb-2;
    &:last-of-type {
      @apply mb-0;
    }
  }
}
</style>
