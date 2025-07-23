<template>
  <NuxtLayout>
    <main class="flex flex-col items-center justify-center bg-white relative">
      <div
        aria-hidden="true"
        class="h-147.5 md:h-180 w-full bg-gradient-to-b from-black to-white absolute top-0 left-0 z-0"
      >
        <div
          class="w-full h-full bg-[url(/assets/img/mask.png)] bg-no-repeat bg-cover bg-center"
        ></div>
      </div>
      <section
        class="flex flex-col items-center justify-center mt-20 relative z-1"
      >
        <h1
          class="leading-6 bg-white/[10%] text-white px-2 py-1 rounded text-base"
        >
          Welcome to T-Mobile DevEdge
        </h1>
        <p
          class="text-white text-[40px] md:text-[48px] leading-12.5 md:leading-15 font-bold mx-6 md:mx-23.5 text-left md:text-center mt-4"
        >
          Where developers lead the way in innovation.
        </p>
        <p
          class="text-white text-sm md:base leading-5 md:leading-6 mx-6 md:mx-23.5 text-left md:text-center mt-6 md:mt-2"
        >
          T-Mobile DevEdge makes it easy for developers to connect to our
          leading 5G network for building and optimizing inventive business
          solutions.
        </p>
        <img
          src="~/assets/img/video.png"
          alt="T-Mobile DevEdge platform demonstration video"
          class="w-full xl:w-230 object-fit mt-6 md:mt-16 xl:rounded-4 shadow-lg"
        />
      </section>
      <section
        class="mx-6 md:mx-11.5 flex flex-col items-start md:items-center"
      >
        <h3
          class="text-sm md:text-base leading-5 md:leading-6 text-left md:text-center mt-10 md:mt-20 mb-10 md:mb-30 xl:w-195"
        >
          In a world caught up in dizzying processes and barriers to success,
          T-Mobile DevEdge is clearing the path for developers to bring their
          ideas to life. Whether you’re building an application for an
          enterprise solution or an IoT device for a startup, we are here to
          empower you to see it through to completion. And if our network
          capabilities can give you an edge, we want to connect you to it.
        </h3>
        <h2
          class="md:text-[32px] font-bold md:leading-12 text-2xl leading-9 mb-25 md:mb-20 xl:mb-29"
        >
          Here’s how we can help.
        </h2>
      </section>
      <section
        class="flex flex-col xl:flex-row flex-wrap justify-center w-full gap-29 md:gap-25 xl:gap-5 text-black xl:max-w-318 px-6 md:px-11.5"
      >
        <div
          class="card bg-zinc-100 justify-end xl:bg-gradient-to-t xl:from-pink-900 xl:to-pink-600 xl:text-white"
        >
          <img src="~/assets/img/card1.png" class="card-image" />
          <h2 class="card-title whitespace-nowrap">Internet of Things (IoT)</h2>
          <p class="card-desc">
            Getting your IoT device ready for our network can be as simple as
            using pre-certified devices, chips, and modules—meaning you can
            accelerate your go-to-market timing and show off your concept sooner
            rather than later. If your device is complete and the hardware is
            not already certified, we can help you through the certification
            process.
          </p>
          <NuxtLink
            class="card-link"
            aria-label="Learn more about IoT solutions"
            >Learn more</NuxtLink
          >
        </div>
        <div class="card justify-end xl:justify-start">
          <img src="~/assets/img/card2.png" class="card-image" />
          <h2 class="card-title">Open Source Projects</h2>
          <p class="card-desc">
            Explore T-Mobile's open source projects that can help bolster your
            own solutions, from continuous compliance monitoring to a simplified
            secrets management solution to serverless applications.
          </p>
          <NuxtLink class="card-link">Browser projects</NuxtLink>
        </div>
        <div class="card justify-end xl:justify-start">
          <img src="~/assets/img/card3.png" class="card-image" />
          <h2 class="card-title">Solutions</h2>
          <p class="card-desc">
            Protect your organization with our Call Verification and Fraud
            Prevention APIs that help detect potentially fraudulent activity
            before it becomes an issue. And, if you're company is looking for a
            boost in call-center success, our Enhanced caller ID API lets you
            brand your company name, department, or reasons for calling to help
            increase your number of calls answered.
          </p>
          <NuxtLink class="card-link">Explore our products</NuxtLink>
        </div>
      </section>
      <section
        class="w-full mt-21.25 md:mt-18.75 xl:mt-60 flex flex-col md:flex-row container-px lg:px-[unset] lg:w-256"
      >
        <div
          class="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start"
        >
          <h2 class="slogan">
            <span>MORE</span>
            <span>TO COME</span>
            <span>IN 2022</span>
          </h2>
          <img
            src="~/assets/img/pilot.png"
            class="object-fix w-40 md:w-60 xl:w-80 md:mt-3.75"
          />
        </div>
        <div
          aria-hidden="true"
          class="bg-[#9B9B9B] w-full h-0.25 md:h-116 md:w-0.25 my-6 md:my-[unset] md:mx-10 xl:mx-15"
        ></div>
        <div class="w-full">
          <p class="text-sm md:text-base leading-5 md:leading-6 mb-6">
            Over the next year, we’ll be launching a sandbox environment and
            self-service options, plus solutions for:
          </p>
          <ul
            class="gap-4 md:gap-6 my-6 md:ml-6 flex flex-col xl:grid xl:grid-cols-[320px_1fr]"
          >
            <li
              v-for="item in solutions"
              :key="item"
              class="text-[#262626] text-lg leading-6 md:text-xl md:leading-7"
            >
              {{ item }}
            </li>
          </ul>
          <p class="text-sm md:text-base leading-5 md:leading-6 mb-10">
            Interested in helping us develop new products and features? Tell us
            what we can do to help you access the best that T-Mobile has to
            offer. We want to meet your development needs, so share your
            thoughts with us today!
          </p>
          <button
            type="button"
            class="bg-[#E20074] w-full md:w-auto px-10 py-5 flex items-center justify-center text-white text-base leading-4"
            aria-label="Share your ideas with T-Mobile"
          >
            Share you ideas
          </button>
        </div>
      </section>
      <section class="mt-30 flex flex-col items-center container-px">
        <h2
          class="text-2xl leading-[1.5] font-bold text-[#262626] mb-4 md:text-[32px] md:text-center"
        >
          We serve organizations across various verticals.
        </h2>
        <h3
          class="text-base leading-[1.5] text-[#262626] mb-10 md:mb-14 md:text-base md:text-center"
        >
          Our customer collaborations have no limits. We’ve achieved shared
          success with businesses in multiple industries and we’re always ready
          to enter new markets.
        </h3>
      </section>
      <div
        class="flex flex-row gap-5 flex-wrap items-center justify-center w-85 md:w-full"
      >
        <div
          class="flex flex-col items-center w-25 md:w-30"
          v-for="item in iconGroup"
          :key="item.label"
        >
          <img :src="item.icon" class="w-8 md:w-12 object-fit mb-4" />
          <p
            class="text-sm leading-5 md:text-lg md:leading-6 text-[#000] font-bold"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
      <section class="form-container">
        <div class="form-content">
          <div class="w-full md:w-120 mb-6 md:mb-10 xl:mb-[unset] shrink-0">
            <h2
              class="text-lg leading-6 md:text-2xl md:leading-9 font-bold mb-2"
            >
              Sign up to learn about new products.
            </h2>
            <h3 class="text-sm leading-5 md:text-base md:leading-6">
              In 2022, we’ll be launching a sandbox environment, self-service
              options, and various new products.
            </h3>
          </div>
          <form
            class="w-full flex flex-col md:flex-row gap-4 md:gap-5 xl:ml-7.5 xl:flex-1 xl:justify-end"
          >
            <input
              type="email"
              placeholder="Email"
              class="w-full md:w-95 text-base leading-6 h-14 bg-white text-black px-4"
            />
            <button
              type="submit"
              class="w-full md:w-45 h-14 text-center bg-black text-white text-lg font-bold"
            >
              Submit
            </button>
          </form>
        </div>
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

<style lang="css" scoped>
@reference "tailwindcss";
.card {
  @apply w-full h-100 rounded-lg relative p-10 flex flex-col items-start bg-zinc-100;
  @variant nth-2 {
    @apply h-90;
  }
  @variant md {
    @apply !h-116 items-center;
  }
  @variant xl {
    @apply !w-145;
  }

  .card-image {
    @apply absolute object-cover -top-25 left-0 w-50;
  }
  @variant nth-1 {
    .card-image {
      @apply left-1/2 -translate-x-1/2;
      @variant md {
        @apply w-75 -top-20;
      }
      @variant xl {
        @apply -top-27 left-1/2 -translate-x-1/2;
      }
    }
  }
  @variant nth-2 {
    .card-image {
      @apply left-full -translate-x-full;
      @variant md {
        @apply left-1/2 w-70 -translate-x-1/2 -top-20;
      }
      @variant xl {
        @apply left-full -translate-x-full top-full translate-y-[calc(-100%_+_64px)];
      }
    }
  }
  @variant nth-3 {
    .card-image {
      @apply left-0 -translate-x-0;
      @variant md {
        @apply left-1/2 w-80 -translate-x-1/2 -top-20;
      }
      @variant xl {
        @apply left-1/2 -translate-x-1/2 top-full -translate-y-1/2;
      }
    }
  }
  .card-title {
    @apply md:text-[32px] md:leading-12 text-2xl leading-9 font-bold;
  }

  .card-desc {
    @apply text-sm leading-5 md:text-base md:leading-6 mb-6 text-left md:text-center line-clamp-10;
  }

  .card-link {
    @apply text-base leading-6 underline font-bold text-center w-full;
  }
}
.form-container {
  @apply flex justify-center w-full mt-20 md:mt-30 bg-gradient-to-r from-[#870B4A] to-[#E20074] px-6 md:px-11 xl:px-32.5 py-12;
  @variant xl {
    @apply px-0;
  }
  .form-content {
    @apply flex flex-col xl:items-center xl:flex-row  w-full text-white items-start;
    @variant xl {
      @apply w-295 flex-row;
    }
  }
}
.slogan {
  span {
    @apply block font-bold whitespace-nowrap leading-[1];
    &:nth-child(1) {
      @apply text-[64px] text-[#F280BA];
      @variant md {
        @apply text-[88px];
      }
      @variant xl {
        @apply text-[110px] leading-[120px];
      }
    }
    &:nth-child(2) {
      @apply text-[38px] text-[#6A6A6A];
      @variant md {
        @apply text-[52px];
      }
      @variant xl {
        @apply text-[64px] leading-[56px];
      }
    }
    &:nth-child(3) {
      @apply text-[50px] text-[#F280BA];
      @variant md {
        @apply text-[68px];
      }
      @variant xl {
        @apply text-[88px] leading-[72px];
      }
    }
  }
}
.container-px {
  @apply px-[24px] md:px-[46px];
}
</style>
