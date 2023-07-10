<script>
import Carousel from "./Carousel.vue"

  export default {
    data() {
      return {
        showTooltip: false
      }
    },
    components: {
      Carousel
    },
    props: [
      'projectsArray',
      'setViewingProject',
      'toggleModal'
    ],
    methods: {
      getImageUrl(imgName) {
        return  `https://raw.githubusercontent.com/ArmanSaffari/Arman-s-Portfolio/main/src/assets/icons/${imgName}`
      },
      showProjectModal(id) {
        this.setViewingProject(id);
        this.toggleModal();
      }
    }
  };
</script>

<template>
  <div
    id="Projects"
    class="container mx-auto px-4 my-40 lg:w-1/2 overflow-hidden"
  >
    <h3
      class=" relative text-white text-right font-fahkwang text-3xl w-1/2 whitespace-nowrap tracking-widest"
    >
      Projects
    </h3>
    <div class="left-0 w-1/2 h-2 bg-gradient-to-r from-teal-500 from-30%  to-blue-700 to-90%"></div>
    <div id="projects" class="w-full pb-4">
      <div
        v-for="project in projectsArray" :key="project.id"
        class="flex flex-wrap justify-start items-center p-4 mt-12 w-full
          border border-white rounded-lg shadow text-white hover:bg-gradient-to-br from-teal-500 from-20% to-blue-700 to-80%
          hover:shadow-lg hover:shadow-cyan-500/50"
        :class="{ hidden: ![1, 2, 3, 4, 5].includes( project.id ) }"
      >
        <div class="relative w-full m-0 overflow-hidden xl:w-full">
          <Carousel :imagesLink="project.bannerUrl" />
        </div>
        <div class="w-full p-2 xl:w-full">
          <h5 class="text-2xl font-fahkwang font-bold">
            {{ project.title }}
          </h5>
          <div class="projectLangs flex my-2 gap-1">
            <img
            v-for="lang in project.ProgrammingLanguages"
              class="h-8 inline rounded-md m-1 hover:bg-gradient-to-l from-white to-white"
              :src="getImageUrl(`${lang}.svg`)"
            />
          </div>
          <div class="projectDescription">
            <h4 class="text-md font-semibold">Description:</h4>
            <p class="text-md">{{ project.briefDescription }}</p>
          </div>
          <div class="projectLinks">
            <h4 class="my-2 font-semibold text-md">View The Project Here:</h4>
            <div class="flex gap-2 flex-wrap">
              <a
                v-for="link in project.links"
                :href="link.url"
                class="flex items-center border-2 border-white hover:bg-white hover:text-black p-1 rounded-lg text-bold group"
              >
                <div class="flex items-center gap-1 ">
                  <span class="text-sm font-semibold">{{ link.name }}</span>
                  <div class="inline relative m-0 p-0 h-5 w-5">
                    <img class=" absolute top-0 left-0 h-5 w-5 group-hover:hidden"
                    :src="getImageUrl(link.icon)" />
                    <img class="absolute top-0 left-0 h-5 w-5 hidden group-hover:block" v-if="link.hoverIcon"
                    :src="getImageUrl(link.hoverIcon)" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="projectFeatures py-2 hover:font-bold">
            <button type="button" @click = "showProjectModal(project.id)">See All Features Here!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
