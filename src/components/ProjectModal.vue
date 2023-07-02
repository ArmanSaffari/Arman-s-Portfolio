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
  },
};
</script>

<template>
  <transition name="modal">
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black opacity-50" @click = "closeModal"></div>
      <div class="bg-white relative rounded-lg shadow-lg p-4 md:w-1/2 w-full">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <img src="../assets/icons/close.svg" />
        </button>
        <h1 class="text-4xl">Hiiiii {{ viewingProject.title }}</h1>
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