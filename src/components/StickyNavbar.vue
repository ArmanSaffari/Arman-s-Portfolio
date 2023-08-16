<script>
export default {
  methods: {
    handleNavigate(id) {
      console.log("inside handleNavigate")
      this.$emit('navigateTo', id);
    }
  }
};
</script>

<template>
  <div class="container mx-auto py-2 lg:w-3/4 sticky top-0 z-50 bg-slate-950">
    <div class="lg:w-2/3 mx-auto">
      <div id="buttons" class="flex flex-rowfont-bold font-fahkwang text-sm sm:text-xl md:text-2xl">
        <a class=" w-1/4 mr-2 p-0 h-full text-center text-white 
            hover:bg-gradient-to-l from-teal-600 from-10%  to-blue-700 to-90% 
            hover:translate-y-1 transition-all hover:text-slate-950 ease-in-out
            rounded-2xl cursor-pointer" @click="handleNavigate('aboutMe')">
          About Me
        </a>
        <a class=" w-1/4 mr-2 p-0 h-full text-center text-white 
            hover:bg-gradient-to-l from-teal-600 from-10%  to-blue-700 to-90% 
            hover:translate-y-1 transition-all hover:text-slate-950 ease-in-out
            rounded-2xl cursor-pointer" @click="handleNavigate('skills')">
          Skills
        </a>
        <a class=" w-1/4 mr-2 p-0 h-full text-center text-white 
            hover:bg-gradient-to-l from-teal-600 from-10%  to-blue-700 to-90% 
            hover:translate-y-1 transition-all hover:text-slate-950 ease-in-out
            rounded-2xl cursor-pointer" @click="handleNavigate('projects')">
          Projects
        </a>
        <a class=" w-1/4 mr-2 p-0 h-full text-center text-white 
            hover:bg-gradient-to-l from-teal-600 from-10%  to-blue-700 to-90% 
            hover:translate-y-1 transition-all hover:text-slate-950 ease-in-out
            rounded-2xl cursor-pointer" @click="handleNavigate('contactMe')">
          Contact Me
        </a>
      </div>
    </div>
  </div>
</template>

