<template>
   <div
    id="Projects"
    class="container mx-auto px-4 my-40 lg:w-1/2 overflow-hidden"
  >
    <h3
      class="relative text-right font-fahkwang text-3xl w-1/2 whitespace-nowrap tracking-widest"
    >
      Projects
    </h3>
    <div class="left-0 border-b-8 w-1/2 border-myOrange h-0"></div>
    <div id="skills" class="w-full pb-4">
      <div
        class="flex justify-start p-0 mt-12 w-full h-96 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
      >
        <div class="relative w-1/2 m-0 rounded-lg overflow-hidden">
          <img
            src="../assets/images/font-infography.jpg"
            class="absolute object-cover -left-[10%] -top-1/4 h-full w-full rounded-[50%] border border-gray-400"
          />
        </div>
        <div class="w-1/2 py-2">
          <h5 class="text-2xl font-fahkwang font-bold mt-32">
            Project Title
          </h5>
          <div class="projectLangs flex my-2 gap-1">
            <img
              class="h-5 inline rounded-md"
              src="../assets/icons/html.svg"
            />
            <img
              class="h-5 inline rounded-md"
              src="../assets/icons/javascript.svg"
            />
          </div>
          <div class="projectDescription">
            <h4 class="text-md font-semibold">Description:</h4>
            <p class="ext-md">This is my first project!</p>
          </div>
          <div class="projectLinks">
            <h4 class="my-2 font-semibold text-md">View The Project Here:</h4>
            <div class="flex gap-2">
              <a
                href="#"
                class="flex items-center border-2 border-gray-700 hover:bg-myOrange p-1 rounded-lg text-bold"
              >
                <div class="flex items-center gap-1">
                  <span class="text-sm font-semibold">Github</span>
                  <img class="h-5 inline" src="../assets/icons/github.svg" />
                </div>
              </a>
              <a
                href="#"
                class="flex items-center border-2 border-gray-700 hover:bg-myOrange p-1 rounded-lg text-bold"
              >
                <div class="flex items-center gap-1">
                  <span class="text-sm font-semibold">Demo</span>
                  <span class="material-symbols-rounded">play_arrow</span>
                </div>
              </a>
            </div>
          </div>
          <div class="projectFeatures py-2">
            <button type="button">See All Features Here!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>