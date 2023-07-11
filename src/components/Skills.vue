<script>
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
      }
    }
  };
</script>

<template>
  <div
    id="skills"
    class="container mx-auto px-4 my-16 py-16 lg:w-1/2 overflow-hidden"
  >
    <h3
      class="relative text-white  left-1/2 font-fahkwang text-3xl w-full first-line:whitespace-nowrap tracking-widest"
    >
    Skills

    </h3>
    <div
      class="relative left-1/2 w-7/12 mb-6 bg-gradient-to-l from-teal-500 from-30%  to-blue-700 to-90% h-2"
    ></div>
    <div class="w-full flex flex-wrap items-stretch	">
      <div class="my-4 p-2 w-full md:w-1/3 ">
        <div
          class="relative p-8 w-full h-full border border-gray-400 rounded-lg 
          hover:bg-gradient-to-br from-teal-500 from-20% to-blue-700 to-80%
          hover:shadow-lg hover:shadow-cyan-500/50"
        >
          <h5
            class="pr-1 absolute -top-6 -left-1 text-4xl font-extrabold font-fahkwang font-outline-blue rounded-br-2xl"
          >
            Front End
          </h5>
          <div class="flex gap-4 justify-center flex-wrap"> 
            <img
            v-for="skill in skillsArray.frontEnd" :key="skill.id"
            :alt="skill.name"
            class="h-14 inline rounded-lg"
            v-bind:src="getImageUrl(skill.imgFileName)"
            />
          </div>
        </div>
      </div>

      <div class="my-4 p-2 w-full md:w-1/3 ">
        <div
          class="relative p-8 w-full h-full border border-gray-400 rounded-lg 
          hover:bg-gradient-to-br from-teal-500 from-20% to-blue-700 to-80%
          hover:shadow-lg hover:shadow-cyan-500/50"
        >
          <h5
            class="pr-1 absolute -top-6 -left-1 text-4xl font-extrabold font-fahkwang font-outline-sky rounded-br-2xl"
          >
            Back End
          </h5>
          <div class="flex gap-4 justify-center flex-wrap"> 
            <img
            v-for="skill in skillsArray.backEnd" :key="skill.id"
            :alt="skill.name"
            class="h-14 inline rounded-lg"
            v-bind:src="getImageUrl(skill.imgFileName)"
            />
          </div>
        </div>
      </div>

      <div class="my-4 p-2 w-full md:w-1/3">
        <div
          class="relative p-8 w-full h-full border border-gray-400 rounded-lg 
          hover:bg-gradient-to-br from-teal-500 from-20% to-blue-700 to-80%
          hover:shadow-lg hover:shadow-cyan-500/50"
        >
          <h5
            class="pr-1 absolute -top-6 -left-1 text-4xl font-extrabold font-fahkwang font-outline-teal rounded-br-2xl"
          >
            Design
          </h5>
          <div class="flex gap-4 justify-center flex-wrap"> 
            <img
            v-for="skill in skillsArray.design" :key="skill.id"
            :alt="skill.name"
            class="h-14 inline rounded-lg"
            v-bind:src="getImageUrl(skill.imgFileName)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

