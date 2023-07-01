<script>
  import Pic from '../assets/icons/html.svg'
  export default {
    data() {
      return {
        showTooltip: false
      }
    },
    props: [
      'skillsArray',
    ],
    methods: {
      getImageUrl(imgName) {
        return  `https://raw.githubusercontent.com/ArmanSaffari/Arman-s-Portfolio/main/src/assets/icons/${imgName}`
        //  Pic
      }
    }
  };
</script>

<template>
  <div
    id="skills"
    class="container mx-auto px-4 my-40 lg:w-1/2 overflow-hidden"
  >
    <h3
      class="relative left-1/2 font-fahkwang text-3xl w-full whitespace-nowrap tracking-widest"
    >
    Skills

    </h3>
    <div
      class="relative left-1/2 border-b-8 w-7/12 border-myOrange h-0"
    ></div>
    <div id="skills" class="w-full pb-4">
      <div
        class="relative p-8 mt-12 w-full bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
      >
        <h5
          class="bg-white pr-1 absolute -top-6 -left-1 text-4xl font-extrabold font-fahkwang text-white font-outline-grey rounded-br-2xl"
        >
          Front End
        </h5>
        <div class="flex gap-4 justify-evenly"> 
          <img
          v-for="skill in skillsArray.frontEnd" :key="skill.id"
          :alt="skill.name"
          class="h-20 inline rounded-lg"
          v-bind:src="getImageUrl(skill.imgFileName)"
          />
        </div>
      </div>

      <div
        class="relative p-8 mt-12 w-full bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
      >
        <h5
          class="bg-white pr-1 absolute -top-6 -left-1 text-4xl font-extrabold font-fahkwang text-white font-outline-grey rounded-br-2xl"
        >
          Back End
        </h5>
        <div class="flex gap-4 justify-evenly"> 
          <img
          v-for="skill in skillsArray.backEnd" :key="skill.id"
          :alt="skill.name"
          class="h-20 inline rounded-lg"
          v-bind:src="getImageUrl(skill.imgFileName)"
          />
        </div>
      </div>

      <div
        class="relative p-8 mt-12 w-full bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
      >
        <h5
          class="bg-white pr-1 absolute -top-6 -left-1 text-4xl font-extrabold font-fahkwang text-white font-outline-grey rounded-br-2xl"
        >
          Design
        </h5>
        <div class="flex gap-4 justify-evenly flex-wrap"> 
          <img
          v-for="skill in skillsArray.design" :key="skill.id"
          :alt="skill.name"
          class="h-20 inline rounded-lg"
          v-bind:src="getImageUrl(skill.imgFileName)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

