<template>
  <NuxtLayout>
    <main class="flex flex-col items-center justify-center bg-white relative">
      <div
        aria-hidden="true"
        class="h-[590px] md:h-[720px] w-full bg-gradient-to-b from-black to-white absolute top-0 left-0 z-0"
      >
        <div
          class="w-full h-full bg-[url(/assets/img/mask.png)] bg-no-repeat bg-cover bg-center"
        ></div>
      </div>
      <section
        class="flex flex-col items-center justify-center mt-[80px] relative z-1"
      >
        <h1
          class="leading-[24px] bg-white/[10%] text-white px-[8px] py-[4px] rounded-[4px] text-md"
        >
          Welcome to T-Mobile DevEdge
        </h1>
        <p
          class="text-white text-4xl md:text-5xl leading-[50px] md:leading-[60px] font-bold mx-[24px] md:mx-[94px] text-left md:text-center mt-[16px]"
        >
          Where developers lead the way in innovation.
        </p>
        <p
          class="text-white text-sm md:base leading-[20px] md:leading-[24px] mx-[24px] md:mx-[94px] text-left md:text-center mt-[24px] md:mt-[8px]"
        >
          T-Mobile DevEdge makes it easy for developers to connect to our
          leading 5G network for building and optimizing inventive business
          solutions.
        </p>
        <img
          src="~/assets/img/video.png"
          alt="T-Mobile DevEdge platform demonstration video"
          class="w-full xl:w-[920px] object-fit mt-[24px] md:mt-[64px] xl:rounded-[16px] shadow-[0_8px_24px_0_rgba(0,0,0,0.15),0_-8px_24px_0_rgba(0,0,0,0.10)]"
        />
      </section>
      <section
        class="mx-[24px] md:mx-[46px] flex flex-col items-start md:items-center"
      >
        <h3
          class="text-sm md:text-base leading-[20px] md:leading-[24px] text-left md:text-center mt-[40px] md:mt-[80px] mb-[40px] md:mb-[120px] xl:w-[780px]"
        >
          In a world caught up in dizzying processes and barriers to success,
          T-Mobile DevEdge is clearing the path for developers to bring their
          ideas to life. Whether you’re building an application for an
          enterprise solution or an IoT device for a startup, we are here to
          empower you to see it through to completion. And if our network
          capabilities can give you an edge, we want to connect you to it.
        </h3>
        <h2
          class="md:text-3xl font-bold md:leading-[48px] text-2xl leading-[36px] mb-[100px] md:mb-[80px] xl:mb-[116px]"
        >
          Here’s how we can help.
        </h2>
      </section>
      <section
        class="flex flex-col xl:flex-row flex-wrap justify-center w-full gap-[116px] md:gap-[100px] xl:gap-[20px] text-black xl:max-w-[1272px] px-[24px] md:px-[46px]"
      >
        <div
          class="card bg-zinc-100 justify-end xl:bg-gradient-to-t xl:from-pink-900 xl:to-pink-600 xl:text-white"
        >
          <img
            src="~/assets/img/card1.png"
            class="absolute w-[200px] md:w-[300px] object-cover top-0 left-0 translate-y-[-50%] md:left-1/2 md:top-[-80px] md:translate-x-[-50%] md:translate-y-[0%]"
          />
          <h2
            class="md:text-[32px] md:leading-[48px] text-[24px] leading-[36px] font-bold whitespace-nowrap"
          >
            Internet of Things (IoT)
          </h2>
          <p
            class="text-sm leading-[20px] md:text-md md:leading-[24px] mb-[24px] text-left md:text-center line-clamp-10"
          >
            Getting your IoT device ready for our network can be as simple as
            using pre-certified devices, chips, and modules—meaning you can
            accelerate your go-to-market timing and show off your concept sooner
            rather than later. If your device is complete and the hardware is
            not already certified, we can help you through the certification
            process.
          </p>
          <NuxtLink
            class="text-md leading-[24px] underline font-bold text-center w-full"
            aria-label="Learn more about IoT solutions"
            >Learn more</NuxtLink
          >
        </div>
        <div class="card justify-end xl:justify-start">
          <img
            src="~/assets/img/card2.png"
            class="absolute w-[200px] md:w-[280px] object-cover top-0 right-0 translate-y-[-50%] md:left-1/2 md:top-[-80px] md:translate-x-[-50%] md:translate-y-[0%] xl:top-[unset] xl:bottom-[-64px] xl:left-[100%] xl:translate-x-[-100%]"
          />
          <h2
            class="md:text-[32px] md:leading-[48px] text-[24px] leading-[36px] font-bold"
          >
            Open Source Projects
          </h2>
          <p
            class="text-sm leading-[20px] md:text-md md:leading-[24px] mb-[24px] text-left md:text-center line-clamp-10"
          >
            Explore T-Mobile’s open source projects that can help bolster your
            own solutions, from continuous compliance monitoring to a simplified
            secrets management solution to serverless applications.
          </p>
          <NuxtLink
            class="text-md leading-[24px] underline font-bold text-center w-full"
            >Browser projects</NuxtLink
          >
        </div>
        <div class="card justify-end xl:justify-start">
          <img
            src="~/assets/img/card3.png"
            class="absolute w-[200px] md:w-[320px] object-cover top-0 left-0 translate-y-[-50%] md:left-1/2 md:top-[-80px] md:translate-x-[-50%] md:translate-y-[0%] xl:top-[100%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%]"
          />
          <h2
            class="md:text-[32px] md:leading-[48px] text-[24px] leading-[36px] font-bold"
          >
            Solutions
          </h2>
          <p
            class="text-sm leading-[20px] md:text-md md:leading-[24px] mb-[24px] text-left md:text-center line-clamp-10"
          >
            Protect your organization with our Call Verification and Fraud
            Prevention APIs that help detect potentially fraudulent activity
            before it becomes an issue. And, if you’re company is looking for a
            boost in call-center success, our Enhanced caller ID API lets you
            brand your company name, department, or reasons for calling to help
            increase your number of calls answered.
          </p>
          <NuxtLink
            class="text-md leading-[24px] underline font-bold text-center w-full"
            >Explore our products</NuxtLink
          >
        </div>
      </section>
      <section
        class="w-full mt-[85px] md:mt-[75px] xl:mt-[240px] flex flex-col md:flex-row container-px lg:px-[unset] max-w-[1024px]"
      >
        <div
          class="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start"
        >
          <h2>
            <span
              class="font-bold text-[64px] leading-[1] block text-[#F280BA] tracking-[-2.56px] md:text-[88px] md:tracking-[-3.52px] xl:text-[110px] xl:tracking-[-4.4px]"
              >MORE</span
            >
            <span
              class="font-bold text-[38px] leading-[1] block text-[#6A6A6A] tracking-[0.76px] md:text-[52px] md:tracking-[1.04px] xl:text-[64px] xl:tracking-[1.28px] whitespace-nowrap"
              >TO COME</span
            >
            <span
              class="font-bold text-[50px] leading-[1] block text-[#F280BA] tracking-[-1.5px] md:text-[68px] md:tracking-[-2.04px] xl:text-[88px] xl:tracking-[-2.64px]"
              >IN 2022</span
            >
          </h2>
          <img
            src="~/assets/img/pilot.png"
            class="object-fix w-[160px] md:w-[240px] xl:w-[320px] md:mt-[15px]"
          />
        </div>
        <div
          aria-hidden="true"
          class="bg-[#9B9B9B] w-full h-[1px] md:h-[464px] md:w-[1px] my-[24px] md:my-[unset] md:mx-[40px] xl:mx-[60px]"
        ></div>
        <div class="w-full">
          <p
            class="text-sm md:text-base leading-[20px] md:leading-[24px] mb-[24px]"
          >
            Over the next year, we’ll be launching a sandbox environment and
            self-service options, plus solutions for:
          </p>
          <ul
            class="gap-[16px] md:gap-[24px] my-[24px] md:ml-[24px] flex flex-col xl:grid xl:grid-cols-[320px_1fr]"
          >
            <li
              v-for="item in solutions"
              :key="item"
              class="text-[#262626] text-[18px] leading-[24px] md:text-[20px] md:leading-[28px]"
            >
              {{ item }}
            </li>
          </ul>
          <p
            class="text-sm md:text-base leading-[20px] md:leading-[24px] mb-[40px]"
          >
            Interested in helping us develop new products and features? Tell us
            what we can do to help you access the best that T-Mobile has to
            offer. We want to meet your development needs, so share your
            thoughts with us today!
          </p>
          <button
            type="button"
            class="bg-[#E20074] w-full md:w-auto px-[40px] py-[20px] flex items-center justify-center text-white text-base leading-[16px]"
            aria-label="Share your ideas with T-Mobile"
          >
            Share you ideas
          </button>
        </div>
      </section>
      <section class="mt-[120px] flex flex-col items-center container-px">
        <h2
          class="text-3xl leading-[1.5] font-bold text-[#262626] mb-[16px] md:text-[30px] md:text-center"
        >
          We serve organizations across various verticals.
        </h2>
        <h3
          class="text-base leading-[1.5] text-[#262626] mb-[40px] md:mb-[56px] md:text-[16px] md:text-center"
        >
          Our customer collaborations have no limits. We’ve achieved shared
          success with businesses in multiple industries and we’re always ready
          to enter new markets.
        </h3>
      </section>
      <div
        class="flex flex-row gap-[20px] flex-wrap items-center justify-center w-[340px] md:w-full"
      >
        <div
          class="flex flex-col items-center w-[100px] md:w-[120px]"
          v-for="item in iconGroup"
          :key="item.label"
        >
          <img
            :src="item.icon"
            class="w-[32px] md:w-[48px] object-fit mb-[16px]"
          />
          <p
            class="text-[14px] leading-[20px] md:text-[18px] md:leading-[24px] text-[#000] font-bold"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
      <section
        class="mt-[80px] md:mt-[120px] flex flex-col xl:items-center xl:flex-row bg-gradient-to-r from-[#870B4A] to-[#E20074] px-[24px] md:px-[44px] xl:px-[130px] py-[48px] w-full text-white items-start"
      >
        <div
          class="w-full md:w-[480px] mb-[24px] md:mb-[40px] xl:mb-[unset] shrink-0"
        >
          <h2
            class="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px] font-bold mb-[8px]"
          >
            Sign up to learn about new products.
          </h2>
          <h3
            class="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]"
          >
            In 2022, we’ll be launching a sandbox environment, self-service
            options, and various new products.
          </h3>
        </div>
        <form
          class="w-full flex flex-col md:flex-row gap-[16px] md:gap-[20px] xl:ml-[30px] xl:flex-1 xl:justify-end"
        >
          <input
            type="email"
            placeholder="Email"
            class="w-full md:w-[380px] text-[16px] leading-[24px] h-[56px] bg-white text-black px-[16px]"
          />
          <button
            type="submit"
            class="w-full md:w-[180px] h-[56px] text-center bg-black text-white text-[18px] font-bold"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import icon1 from "~/assets/img/icon1.png";
import icon2 from "~/assets/img/icon2.png";
import icon3 from "~/assets/img/icon3.png";
import icon4 from "~/assets/img/icon4.png";
import icon5 from "~/assets/img/icon5.png";

useHead({
  title: "T-Mobile DevEdge",
  meta: [{ name: "description", content: "T-Mobile DevEdge" }],
});

const iconGroup = [
  {
    label: "Finance",
    icon: icon1,
  },
  {
    label: "Technology",
    icon: icon2,
  },
  {
    label: "Retail",
    icon: icon3,
  },
  {
    label: "Communication",
    icon: icon4,
  },
  {
    label: "Energy",
    icon: icon5,
  },
];
const solutions = [
  "Asset tracking",
  "XR enablement",
  "Improved mobile customer interaction",
  "Supply chain management",
  "Autonomous vehicles",
  "IoT Developer Kit",
  "A faster, easier, and more affordable certification process",
];
</script>

<style>
@reference "tailwindcss";

.card {
  @apply w-full xl:w-[580px] h-[400px] md:h-[464px] rounded-[16px] relative p-[40px] flex flex-col items-start md:items-center bg-zinc-100;
}
</style>
