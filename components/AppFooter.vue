<template>
  <footer
    class="bg-black text-white flex flex-col px-[48px] py-[48px] md:px-[46px] md:pt-[60px] md:pb-[40px] xl:pl-[130px] xl:pt-[54px] xl:pb-[63px] text-[16px] leading-[24px]"
  >
    <img
      src="~/assets/img/logo.png"
      alt="logo"
      class="w-[140px] object-fit mb-[35px]"
    />
    <section
      class="flex flex-col md:flex-row gap-[32px] md:grid md:grid-cols-4 md:gap-[10px]"
    >
      <ul
        class="grid grid-cols-[1fr_155px] md:grid-cols-1 font-bold gap-[16px] md:gap-[24px]"
      >
        <NuxtLink>About</NuxtLink>
        <NuxtLink>IoT (Internet of Things)</NuxtLink>
        <NuxtLink>Open Source</NuxtLink>
        <NuxtLink>Contact</NuxtLink>
        <NuxtLink>Log In</NuxtLink>
      </ul>
      <div>
        <NuxtLink class="font-bold mb-[16px] xl:mb-[4px] block"
          >Solution</NuxtLink
        >
        <ul class="gap-[8px] grid grid-cols-1">
          <NuxtLink>Fraud Prevention</NuxtLink>
          <NuxtLink>Call Verification</NuxtLink>
          <NuxtLink>5G Location Services</NuxtLink>
          <NuxtLink>Enhanced Caller ID</NuxtLink>
          <NuxtLink>IoT Developer Kit</NuxtLink>
        </ul>
      </div>
      <div>
        <NuxtLink class="font-bold mb-[16px] xl:mb-[4px] block">Terms</NuxtLink>
        <ul class="gap-[8px] flex flex-col">
          <NuxtLink >Privacy Center</NuxtLink>
          <NuxtLink>Privacy Policy</NuxtLink>
          <NuxtLink >Fraud Prevent Data Use Policy</NuxtLink>
          <NuxtLink>Terms & Conditions</NuxtLink>
          <NuxtLink>Do Not Sell My Data</NuxtLink>
        </ul>
      </div>
      <div>
        <NuxtLink class="font-bold mb-[16px] xl:mb-[4px] block"
          >Support</NuxtLink
        >
        <ul>
          <NuxtLink class="block mb-2">General FAQ</NuxtLink>
          <NuxtLink class="block mb-2">API documentation</NuxtLink>
          <NuxtLink class="block mb-2">IoT documentation</NuxtLink>
          <NuxtLink class="block mb-0">Open Source documentation</NuxtLink>
        </ul>
      </div>
    </section>
    <div class="flex items-center justify-between mt-[48px] md:mt-[40px]">
      <p class="leading-[28px] w-[156px] md:w-[unset] text-[14px]">
        Copyright © 2022 T-Mobile. All Rights Reserved.
      </p>
      <a class="flex items-center gap-[16px] xl:mr-[150px] md:mr-[40px]">
        <img
          src="~/assets/img/twitter.png"
          alt="twitter"
          class="w-[24px] h-[24px]"
        />
        <span class="text-[16px] leading-[24px] hidden md:block"
          >Follow us on Twitter</span
        >
      </a>
    </div>
  </footer>
</template>
