<script>
import PortfolioHeader from "./components/PortfolioHeader.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
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
    ContactMe,
  },

  data() {
    return {
      skillsArray: data.skills,
      projectsArray: data.projects
    };
  }
};


</script>

<template>
  <header>
    <PortfolioHeader />
  </header>

  <main>
    <StickyNavbar />
    <AboutMe />
    <Skills :skillsArray="skillsArray"/>
    <Projects :projectsArray="projectsArray"/>
  </main>

  <footer>
    <ContactMe />
  </footer>
</template>
