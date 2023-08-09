<script>
import Carousel from "./Carousel.vue"

export default {
  components: {
    Carousel
  },
  data() {
    return {
      isOpen: false
    };
  },
  props: [
    'viewingProject'
  ],
  methods: {
    closeModal() {
      console.log('clicked!')
      this.$emit('close')
    },
    getImageUrl(imgName) {
      return  `https://raw.githubusercontent.com/ArmanSaffari/Arman-s-Portfolio/main/src/assets/icons/${imgName}`
    }
  },
};
</script>

<template>
  <transition name="modal">
    <div class="w-screen fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black opacity-50 w-full" @click = "closeModal"></div>
      <div class="bg-slate-950 md:w-1/2 border boredr-white relative rounded-lg shadow-lg p-4 w-full overflow-y-auto max-h-screen">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <img src="../assets/icons/closeWhite.svg" />
        </button>
        <div>
          <div class="p-2">
            <h1 class="text-2xl font-fahkwang text-center font-outline-teal my-3">{{ viewingProject.title }} </h1>
            <div class="flex flex-wrap">
              <!-- <Carousel :imagesLink="viewingProject.bannerUrl" /> -->
              <div>
                <h3 class="text-lg text-white font-semibold">Features:</h3>
                <ul class="mx-4">
                  <li v-for="feature in viewingProject.features"
                  class="text-slate-300 text-sm m-2 list-disc">
                  {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full p-2">
            <h3 class="text-lg text-white font-semibold">Technologies Used:</h3>
            <div v-for="tech in viewingProject.technologies"
              class="w-auto flex border border-white m-2 p-2 rounded-lg 
              hover:bg-gradient-to-br from-teal-500 from-20% to-blue-700 to-80%
              hover:shadow-lg hover:shadow-cyan-500/50 hover:text-white" >
              <div class=" bg-white rounded-lg h-20 aspect-square p-1 flex items-center justify-center">
                <img :alt="tech.name"
                class="object-contain	"
                :src="getImageUrl(tech.icon)" />
              </div>
              <div class="text-slate-300 px-2">
                <h3 class="text-sm font-bold">{{ tech.name }}</h3>
                <p class="text-xs">{{ tech.description }}</p>
              </div>
            </div>
          </div>
          <div class="p-2">
            <Carousel :imagesLink="viewingProject.bannerUrl" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>