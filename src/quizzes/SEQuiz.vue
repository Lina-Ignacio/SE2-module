<template>
    <LessonsNavBar :to="'/se'"/>

    <div class="quiz">
      <quiz :quizData="questions" title="QUIZ: Software Engineering " />
    </div>

    <v-divider></v-divider>

    <pre class="text-sm">
        Congratulations for making it!
        You can now assess your understanding about the lesson by reviewing the correct answers.
    </pre>

</template>

<script setup>
import { ref } from 'vue'
import quiz from './quiz.vue'
import LessonsNavBar from '../components/LessonsNavBar.vue';

const questions = ref([
{
    text: 'What is the primary goal of System Engineering?',
    options: [
      'To write efficient code',
      'To manage individual hardware parts',
      'To integrate and manage complex systems holistically',
      'To replace outdated systems'
    ],
    correct: 'To integrate and manage complex systems holistically'
  },
  {
    text: 'Which of the following is a sociotechnical system?',
    options: [
      'Mobile game app',
      'Microwave oven timer',
      'Hospital patient management system',
      'Smart light bulb'
    ],
    correct: 'Hospital patient management system'
  },
  {
    text: 'What distinguishes Systems Engineering from Software Engineering?',
    options: [
      'Systems Engineering ignores user feedback',
      'Software Engineering handles hardware too',
      'Systems Engineering includes people, processes, and hardware',
      'Software Engineering is more focused on policy compliance'
    ],
    correct: 'Systems Engineering includes people, processes, and hardware'
  },
  {
    text: 'In the Conceptual Design stage, what is one of the first tasks?',
    options: [
      'Develop the code',
      'Formulate a clear concept from vague needs',
      'Perform system integration',
      'Train the end-users'
    ],
    correct: 'Formulate a clear concept from vague needs'
  },
  {
    text: 'Which of the following best describes an emergent property of a system?',
    options: [
      'The number of bugs in the code',
      'Functionality of a single component',
      'Properties that arise only when parts work together',
      'Database table structure'
    ],
    correct: 'Properties that arise only when parts work together'
  },
  {
    text: 'In the system development process, what comes after subsystem engineering?',
    options: [
      'System Integration',
      'Requirements Partitioning',
      'System Deployment',
      'Conceptual Design'
    ],
    correct: 'System Integration'
  },
  {
    text: 'What is a risk during system procurement?',
    options: [
      'Training users too early',
      'Using open-source software',
      'Choosing incompatible systems',
      'Having too many options'
    ],
    correct: 'Choosing incompatible systems'
  },
  {
    text: 'Which of the following is an example of a stakeholder conflict?',
    options: [
      'Developers forgetting to push code',
      'Nurses disliking a system that managers approve',
      'Users choosing the wrong password',
      'Delayed update deployment'
    ],
    correct: 'Nurses disliking a system that managers approve'
  },
  {
    text: 'What does the System Vision Document do?',
    options: [
      'Replaces technical design',
      'Contains only cost estimates',
      'Summarizes the system in non-technical terms for decision-makers',
      'Describes the code logic'
    ],
    correct: 'Summarizes the system in non-technical terms for decision-makers'
  },
  {
    text: 'What makes most real-world systems complex?',
    options: [
      'Too many hardware components',
      'Unpredictable human and organizational behavior',
      'Constant internet access',
      'Expensive hardware'
    ],
    correct: 'Unpredictable human and organizational behavior'
  }
])
</script>


<style scoped>
.quiz{
  padding:3%;
}
</style>