<script>
import PortfolioHeader from "./components/PortfolioHeader.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import ProjectModal from "./components/ProjectModal.vue";
import StickyNavbar from "./components/StickyNavbar.vue";
import ContactMe from "./components/ContactMe.vue";
import data from "./assets/projects.json";

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
    }
  }
};
</script>

<template>
  <header>
    <PortfolioHeader />
  </header>

  <main>
    <StickyNavbar />
    <AboutMe id="aboutMe" />
    <Skills 
      :skillsArray="skillsArray"
      id="skills" />
    <Projects
      id="projects"
      :projectsArray = "projectsArray"
      :setViewingProject = "setViewingProject"
      :toggleModal = "toggleModal"/>

    <ProjectModal
      v-if="isModalOpen"
      @close="toggleModal"
      :viewingProject = "viewingProject"/>
  </main>

  <footer>
    <ContactMe :socialMedia = "socialMedia" />
  </footer>
</template>
