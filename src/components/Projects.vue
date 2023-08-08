<script>
import Carousel from "./Carousel.vue"

  export default {
    data() {
      return {
        showProjects: "All",
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
      },
      toggleFilterItems() {
        this.showFilterItems = !this.showFilterItems;
      },
      changeFilter (category) {
        this.showProjects = category
      },
      hideProject (categories) {
        if (this.showProjects == 'All' || categories.includes(this.showProjects)) {
          return false
        } else {
          return true
        }
      },
      countProjects(projects, category) {
        let count = 0;
        projects.map(project => {
          if (project.categories.includes(category)) {
            count++;
          }
        })
        return count
      }
    }
  };
</script>

<template>
  <div
    class="container mx-auto px-4 my-16 lg:w-1/2 overflow-hidden"
  >
    <h3
      class=" relative text-white text-right font-fahkwang text-3xl w-1/2 whitespace-nowrap tracking-widest"
    >
      Projects
    </h3>
    <div class="left-0 w-1/2 h-2 bg-gradient-to-r from-teal-500 from-30%  to-blue-700 to-90%"></div>
  
    <div class="flex my-4 gap-2 items-end">
      <h5 class="text-white text-sm sm:text-lg  font-semibold mr-2">Filter: </h5>
      <button tupe="button" 
        class="text-xs sm:text-sm font-bold text-slate-950 bg-white self-center px-2 py-[1px] mr-2 rounded-md"
        :class="{'bg-gradient-to-t from-teal-500  to-blue-700': showProjects == 'All' }"
        @click="changeFilter('All')" >
        All ({{ projectsArray.length }})
      </button>
      <button tupe="button" 
        class="text-xs sm:text-sm font-bold text-slate-950 bg-white self-center px-2 py-[1px] mr-2 rounded-md"
        :class="{ 'bg-gradient-to-t from-teal-500  to-blue-700': showProjects == 'Front-End' }"
        @click="changeFilter('Front-End')">
        Front-End ({{ countProjects( projectsArray, 'Front-End') }})
      </button>
      <button tupe="button" 
        class="text-xs sm:text-sm font-bold text-slate-950 bg-white self-center px-2 py-[1px] mr-2 rounded-md"
        :class="{ 'bg-gradient-to-t from-teal-500  to-blue-700': showProjects == 'Back-End' }"
        @click="changeFilter('Back-End')">
        Back-End ({{ countProjects( projectsArray, 'Back-End') }})
      </button>
      <button tupe="button" 
        class="text-xs sm:text-sm font-bold text-slate-950 bg-white self-center px-2 py-[1px] mr-2 rounded-md"
        :class="{ 'bg-gradient-to-t from-teal-500  to-blue-700': showProjects == 'Design' }"
        @click="changeFilter('Design')">
        Design ({{ countProjects( projectsArray, 'Design') }})
      </button>
    </div>

    <div class="w-full pb-4 flex flex-wrap">
      <div
        v-for="project in projectsArray" :key="project.id"
        class="flex flex-wrap justify-start items-start p-4 mt-12 w-full
          border border-white rounded-lg shadow text-white
          hover:shadow-lg hover:shadow-cyan-500/50"
        
        :class="{ hidden: hideProject( Array.from(project.categories) ) }"
      >
        
      <div class="w-full p-2 xl:w-1/2 xl:pr-2">
          <h5 class="text-2xl font-fahkwang font-bold flex mr-1">
            {{ project.title }}
            
          </h5>
          <strong v-for="cat in project.categories"
              class="text-xs text-slate-950 bg-gradient-to-t from-teal-500  to-blue-700  self-center px-2 py-[1px] mr-2 rounded-md"> 
              {{ cat }}
            </strong>
          <div class="projectLangs flex my-2 gap-1">
            <img
            v-for="lang in project.ProgrammingLanguages"
              class="h-10 inline rounded-md p-1 hover:bg-white/25"
              :src="getImageUrl(`${lang}.svg`)"
            />
          </div>
          
        </div>

        <div class="relative w-full m-0 overflow-hidden xl:w-1/2">
          <Carousel :imagesLink="project.bannerUrl" />
        </div>

        <div class="w-full">
          <div class="projectDescription">
            <h4 class="text-md font-semibold">Description:</h4>
            <p class="text-md pl-2">{{ project.briefDescription }}</p>
          </div>
          <div class="projectLinks">
            <h4 class="my-2 font-semibold text-md">View The Project Here:</h4>
            <div class="flex gap-2 flex-wrap pl-2">
              <a
                v-for="link in project.links"
                target="_blank"
                :href="link.url"
                class="flex items-center border-2 border-white hover:bg-white hover:text-black p-1 rounded-lg text-bold group"
              >
                <div class="flex items-center gap-1">
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
          <div class="projectFeatures py-2 hover:font-bold pl-">
            <button type="button" @click = "showProjectModal(project.id)">See All Features Here!</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
