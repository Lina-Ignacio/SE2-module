<template>
  <LessonsNavBar :to="'/rtse'"/>

<div class="quiz">
<quiz :quizData="questions" title="QUIZ: System of Systems " />
</div>

</template>

<script setup>
import { ref } from 'vue'
import quiz from './quiz.vue'
import LessonsNavBar from '../components/LessonsNavBar.vue';

const questions = ref([
{
    text: 'What best describes a System of Systems (SoS)?',
    options: [
      'A large software developed by one team',
      'A set of independent systems working together to achieve a broader goal',
      'A single, tightly integrated software platform',
      'A newly built centralized system'
    ],
    correct: 'A set of independent systems working together to achieve a broader goal'
  },
  {
    text: 'Which of the following is a key characteristic of an SoS?',
    options: [
      'All systems must follow a unified development timeline',
      'Every system uses the same programming language',
      'Each system is operationally and managerially independent',
      'One manager controls all systems'
    ],
    correct: 'Each system is operationally and managerially independent'
  },
  {
    text: 'What type of complexity arises from having to coordinate between different organizations?',
    options: [
      'Technical complexity',
      'Managerial complexity',
      'Structural complexity',
      'Procedural complexity'
    ],
    correct: 'Managerial complexity'
  },
  {
    text: 'Which classification best fits systems voluntarily cooperating with shared governance?',
    options: [
      'Directed SoS',
      'Federated SoS',
      'Virtual SoS',
      'System Coalition'
    ],
    correct: 'Federated SoS'
  },
  {
    text: 'Why does reductionism fall short in SoS?',
    options: [
      'It doesn’t allow for software reuse',
      'It ignores the individual capabilities of systems',
      'It fails to address blurry boundaries and conflicting priorities',
      'It simplifies architecture design'
    ],
    correct: 'It fails to address blurry boundaries and conflicting priorities'
  },
  {
    text: 'In the SoS engineering process, what happens during Interface Development?',
    options: [
      'Select which systems to integrate',
      'Define the vision of the SoS',
      'Create APIs or connectors between systems',
      'Decide the organizational structure'
    ],
    correct: 'Create APIs or connectors between systems'
  },
  {
    text: 'Which architectural pattern describes a system where one central system provides UI and login services, while others plug into it?',
    options: [
      'Trading Systems',
      'Systems in a Container',
      'Systems as Data Feeds',
      'Virtual Architecture'
    ],
    correct: 'Systems in a Container'
  },
  {
    text: 'What challenge often arises when testing Systems of Systems?',
    options: [
      'APIs are always unreliable',
      'Testing is straightforward due to central management',
      'Clear requirements are always present',
      'Components change independently, making testing difficult'
    ],
    correct: 'Components change independently, making testing difficult'
  },
  {
    text: 'What does “Emergence” mean in the context of SoS?',
    options: [
      'Each system evolves separately',
      'Systems are located globally',
      'New capabilities arise from system collaboration',
      'Systems must use a single manager'
    ],
    correct: 'New capabilities arise from system collaboration'
  },
  {
    text: 'Which of the following is an example of operational independence in an SoS?',
    options: [
      'Weather stations located globally',
      'Hospital EMR works without depending on national health systems',
      'APIs being unavailable',
      'GDPR conflicting with other privacy policies'
    ],
    correct: 'Hospital EMR works without depending on national health systems'
  }

])
</script>


<style scoped>
.quiz{
  padding:3%;
}
</style>