<script>
import PortfolioHeader from "./components/PortfolioHeader.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import ProjectModal from "./components/ProjectModal.vue";
import StickyNavbar from "./components/StickyNavbar.vue";
import ContactMe from "./components/ContactMe.vue";
import data from "./assets/projects.json";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    PortfolioHeader,
    StickyNavbar,
    AboutMe,
    Skills,
    Projects,
    ProjectModal,
    ContactMe,
  },

  data() {
    return {
      skillsArray: data.skills,
      projectsArray: data.projects,
      socialMedia: data.socialMedia,
      bannerImage: data.bannerImage,
      isModalOpen: false,
      viewingProject: null
    };
  },
  methods: {
    setViewingProject(i) {
      this.viewingProject = data.projects[i-1]
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    beforeEnter (el) {
      el.style.opacity = 0;
      // el.style.transform = 'translateY(150px)';
    },
    enter (el, done) {
      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            id: el.id,
            toggleActions: "restart pause resume pause",
            start: "top 75%",
            end: "300px 75%",
            scrub: true,
            // markers: true,
          }
      });
      
      tl.to(el, {
          opacity: 1,
          y: '-=100',
          duration: 2,
          ease: "power1.in",
          onComplete: done
        });
    },
  }
};
</script>

<template>
  <header>
    <PortfolioHeader ref="portfolioHeader" :bannerImage="bannerImage"/>
  </header>

  <main>
    <StickyNavbar />

    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <AboutMe id="aboutMe" />
    </transition>

    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <Skills 
        :skillsArray="skillsArray"
        id="skills" ref="skills"/>
    </transition>

    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <Projects
        id="projects"
        :projectsArray = "projectsArray"
        :setViewingProject = "setViewingProject"
        :toggleModal = "toggleModal"/>
    </transition>
    
    <ProjectModal
      v-if="isModalOpen"
      @close="toggleModal"
      :viewingProject = "viewingProject"/>
  </main>

  <footer>
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <ContactMe 
        id="contactMe"
        :socialMedia = "socialMedia" />
    </transition>
  </footer>
</template>
