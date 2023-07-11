<script>
  export default {
    props: [
      'socialMedia'
    ],
    methods: {
      getImageUrl(imgName) {
        return  `https://raw.githubusercontent.com/ArmanSaffari/Arman-s-Portfolio/main/src/assets/icons/${imgName}`
      }
    }
  }
</script>

<template>
  <div class="container mx-auto px-4 my-16 lg:w-1/2 py-16">
    <div class="flex items-stretch">
      <div class="w-1/2 p-0 flex items-center justify-center">
        <h3
          class="font-fahkwang text-white text-3xl w-auto whitespace-nowrap tracking-widest"
        >
          Contact Me
        </h3>
      </div>
      <div class="w-2 grow-0 shrink-0 bg-gradient-to-t from-teal-500 from-10%  to-blue-700 to-90%"></div>
      <div class="w-1/2 flex flex-wrap justify-center">
        <div v-for="medium in socialMedia" class="py-2 w-full flex flex-wrap justify-center">
          <a :href="medium.link"  target="_blank" class="flex items-center">
            <img :src="getImageUrl(medium.icon)" class="h-10 ">
            <h4 class="text-white mx-4 text-lg font-semibold">{{ medium.name }}</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>