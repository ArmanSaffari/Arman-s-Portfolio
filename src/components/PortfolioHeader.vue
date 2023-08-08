<script>
  import gsap from 'gsap';
  export default {
    props: [
      'bannerImage'
    ],
    methods: {
      getImageUrl(imgName) {
        return  `https://raw.githubusercontent.com/ArmanSaffari/Arman-s-Portfolio/main/src/assets/icons/${imgName}`
      },
      beforeEnter (el) {
        el.querySelector('#bannerImage').style.opacity = 0;
        el.querySelector('#bannerImage').style.transform = 'translateY(80px)';
        el.querySelector('#title').style.transform = 'scale(0)';
        el.querySelector('#name').style.opacity = 0;
      
      },
      enter (el, done) {
        let tl = gsap.timeline({
          defaults: {
            duration: 1,
            ease: "power1-out" 
          },
        })
        tl.to('#title', { scale: 1} )
          .to('#bannerImage', { opacity: 1, y: '-=80'}, 0.5)
          .to('#name', { opacity: 1, durtion: 3}, 0.5)
        
      },
    }
  }
</script>
<template>
  <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
  <div class="container mx-auto px-4 mt-20 lg:w-1/2">
    <div class="w-full flex px-4 flex-wrap sm:flex-nowrap items-stretch pb-0">
      
      <img
        id="bannerImage"
        :src="bannerImage"
        alt="Arman Saffari"
        class="inline w-full sm:w-1/2 "
      />
    
      <h1
      id="name"
        class="font-fahkwang text-4xl text-slate-950 font-outline-teal mb-2 sm:text-6xl w-full font-extrabold tracking-wide self-end text-center"
      >
        ARMAN SAFFARI
      </h1>
    </div>
    <div
    id="title"
      class="w-full p-6 bg-gradient-to-bl from-teal-500 from-20%  to-blue-700 to-90% rounded-xl text-white mb-5"
    >
      <h3
        class="text-2xl sm:text-4xl font-fahkwang text-slate-950 font-semibold tracking-wider text-center sm:text-right"
      >
        Full Stack Developer
      </h3>
    </div>
  </div>
</transition>
</template>
