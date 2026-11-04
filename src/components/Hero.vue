<template>
  <section id="home" class="relative isolate overflow-hidden border-b border-line/70">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-36 -top-32 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)] opacity-80"
    ></div>
    <div
      class="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.08fr_.92fr] md:gap-10 md:py-24 lg:px-10 lg:py-28"
    >
      <div class="order-2 md:order-1">
        <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs">
          <span class="size-1.5 rounded-full bg-accent"></span>
          IT project manager · delivery-minded · people-first
        </div>
        <h1 class="max-w-3xl text-[clamp(2.8rem,8vw,5.75rem)] font-semibold leading-[.99] tracking-[-0.075em]">
          Turning complex technology into
          <span class="text-accent"> successful delivery.</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Hi, I’m Nam Pham — an IT project manager with 5 years of experience guiding
          cross-functional teams from discovery to launch. I bring people, plans, and
          technology together to deliver useful outcomes.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            class="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-page shadow-lg shadow-accent/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="#work"
          >
            View project experience <span aria-hidden="true">↗</span>
          </a>
          <a class="font-bold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" href="#contact">
            Let’s connect <span aria-hidden="true">→</span>
          </a>
        </div>
        <div class="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-6" aria-label="Career highlights">
          <div class="grid gap-1">
            <strong class="text-base font-bold sm:text-lg">5 years</strong>
            <span class="text-xs leading-5 text-muted sm:text-sm">project management</span>
          </div>
          <div class="grid gap-1">
            <strong class="text-base font-bold sm:text-lg">End to end</strong>
            <span class="text-xs leading-5 text-muted sm:text-sm">planning to launch</span>
          </div>
          <div class="grid gap-1">
            <strong class="text-base font-bold sm:text-lg">Team first</strong>
            <span class="text-xs leading-5 text-muted sm:text-sm">clear, calm delivery</span>
          </div>
        </div>
      </div>
      <div class="relative order-1 mx-auto w-full max-w-[25rem] md:order-2 md:justify-self-end">
        <div aria-hidden="true" class="absolute -inset-3 -rotate-3 rounded-[2rem] bg-accent-soft/70"></div>
        <img
          class="relative block aspect-[4/4.5] w-full rounded-[1.75rem] object-cover shadow-[var(--shadow)]"
          src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/564642863_1532196388136755_367711209752114432_n.jpg?stp=dst-jpg_tt6&amp;cstp=mx1920x1280&amp;ctp=s1920x1280&amp;_nc_cat=107&amp;_nc_map=urlgen_bucketless&amp;ccb=1-7&amp;_nc_sid=6ee11a&amp;_nc_ohc=vVfkFdtdynAQ7kNvwGrnqxj&amp;_nc_oc=AdpxbWQKZMQFEoSDBRaHpgVBKNh02Md4aoBsP1uABwdC_a1fuPolXB-WVYxf5bidNcTXLIqZIHnyGPonUmgu_tfy&amp;_nc_zt=23&amp;_nc_ht=scontent.fhan14-5.fna&amp;_nc_gid=yDiYo7pnEbVhLA5fWqQBaw&amp;_nc_ss=7b2a8&amp;oh=00_AQT0v7UD4WaKzgHNodK-90I_9wKzort5YIRO70pfnu10YA&amp;oe=6AEF893F"
          alt="Runner training on an outdoor path"
          fetchpriority="high"
        />
        <div class="absolute -bottom-5 left-2 rounded-2xl border border-line bg-surface px-5 py-3 shadow-[var(--shadow)] sm:-left-10">
          <span class="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">Focused on</span>
          <span id="clock" class="text-lg font-extrabold tracking-tight">Delivery</span>
        </div>
      </div>
    </div>
  </section>
</template>
