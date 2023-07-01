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
      skillsArray: data.skills
    };
  }
};


</script>

<template>
  <header>
    <PortfolioHeader />
    <StickyNavbar />
  </header>

  <main>
    <AboutMe />
    <Skills :skillsArray="skillsArray"/>
    <Projects />
  </main>

  <footer>
    <ContactMe />
  </footer>
</template>
