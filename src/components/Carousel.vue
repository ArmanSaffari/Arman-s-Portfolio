<script>
export default {
  props: [
    "imagesLink"
    ],
  data() {
    return {
      currentImageIndex: 0,
      autoplayInterval: null
    };
  },
  mounted() {
    this.startAutoplay();
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagesLink.length;
    },
    previousImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.imagesLink.length) % this.imagesLink.length;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextImage();
      }, 3000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    handleMouseOver() {
      this.stopAutoplay();
    },
    handleMouseLeave() {
      this.startAutoplay();
    }
  }
}
</script>


<template>
  <div class="relative rounded-lg inset-0 w-full aspect-video overflow-hidden my-2"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave">
    <div class="absolute w-full h-full flex justify-between items-center p-3">
      <button @click="previousImage" class="flex justify-center items-center hover:bg-black/20 h-10 w-10 rounded-full">
        <img src="../assets/icons/prev2.svg" />
      </button>
      <button @click="nextImage" class="flex justify-center items-center hover:bg-black/20 h-10 w-10 rounded-full">
        <img src="../assets/icons/next2.svg" />
      </button>
    </div>
    <img :src="imagesLink[currentImageIndex]" class="w-full h-full object-contain self-center" />
  </div>
</template>