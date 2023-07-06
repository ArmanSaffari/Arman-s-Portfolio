<script>
export default {
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
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black opacity-50" @click = "closeModal"></div>
      <div class="bg-slate-950 border boredr-white relative rounded-lg shadow-lg p-4 md:w-1/2 w-full">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <img src="../assets/icons/close.svg" />
        </button>
        <div>
          <div class="p-2">
            <img :src="viewingProject.bannerUrl"
            :alt="viewingProject.title"
            class="opacity-50 hover:opacity-100"/>
            <h1 class="text-xl font-fahkwang text-center font-outline-white">{{ viewingProject.title }} </h1>
            <ul class="m-4">
              <li v-for="feature in viewingProject.features"
              class="text-white text-xs list-disc">
              {{ feature }}
              </li>
            </ul>
          </div>
          <div class="flex">
            <div class="w-1/2" v-for="tech in viewingProject.technologies">
              <img :alt="tech.name"
              class="h-14 inline rounded-lg"
              :src="getImageUrl(tech.icon)" />
            </div>
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