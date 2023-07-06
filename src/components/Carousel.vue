<script>
export default {
  props: [
    "imagesLink"
    ],
  data() {
    return {
      currentImageIndex: 0
    };
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagesLink.length;
    },
    previousImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.imagesLink.length) % this.imagesLink.length;
    }
  }
}
</script>


<template>
  <div class="relative rounded-lg shadow-lg inset-0 w-full overflow-hidden">
    <div class="absolute w-full h-full flex justify-between items-center p-3">
      <button @click="previousImage" class="flex justify-center items-center hover:bg-black/20 h-10 w-10 rounded-full">
        <img src="../assets/icons/prev2.svg" />
      </button>
      <button @click="nextImage" class="flex justify-center items-center hover:bg-black/20 h-10 w-10 rounded-full">
        <img src="../assets/icons/next2.svg" />
      </button>
    </div>
    <img :src="imagesLink[currentImageIndex]" class="w-full h-auto" />
  </div>
</template>