<template>
    <LessonsNavBar :to="'/rtse'"/>

  <div class="quiz">
  <quiz :quizData="questions" title="QUIZ: Real-Time Software Engineering " />
  </div>

</template>

<script setup>
import { ref } from 'vue'
import quiz from './quiz.vue'
import LessonsNavBar from '../components/LessonsNavBar.vue';

const questions = ref([
  {
    text: 'What is the primary characteristic of a real-time system?',
    options: [ 
              'High graphic performance',
              'Delivers correct results eventually',
              'Delivers correct results at the correct time',
              'Works only with user input'
            ],
    correct: 'Delivers correct results at the correct time'
  },
  {
    text: 'Which of the following is a hard real-time system?',
    options: [
      'Online shopping cart',
      'Video conferencing software',
      'Anti-lock braking system',
      'Social media feed loader'
    ],
    correct: 'Anti-lock braking system'
  },
  {
    text: 'What defines an embedded system?',
    options: [
      'Can run any general-purpose application',
      'Designed for gaming only',
      'Combination of hardware and software for a specific function',
      'Focuses on database management'
    ],
    correct: 'Combination of hardware and software for a specific function'
  },
  {
    text: 'What is an example of a periodic stimulus in a real-time system?',
    options: [
      'Fire detected by a smoke sensor',
      'Motion detected by a camera',
      'Polling a temperature sensor every 100ms',
      'Pressing a panic button'
    ],
    correct: 'Polling a temperature sensor every 100ms'
  },
  {
    text: 'In the Observe and React pattern, what happens when a threshold is met?',
    options: [
      'The system reboots',
      'The system performs an immediate response',
      'The user is prompted to take action',
      'Nothing; it’s logged only'
    ],
    correct: 'The system performs an immediate response'
  },
  {
    text: 'What does Timing Analysis in real-time systems ensure?',
    options: [
      'User satisfaction',
      'System power usage is minimized',
      'Tasks meet deadlines even in worst-case conditions',
      'The interface looks modern'
    ],
    correct: 'Tasks meet deadlines even in worst-case conditions'
  },
  {
    text: 'Which component of an RTOS selects the next task to run?',
    options: [
      'Real-Time Clock',
      'Dispatcher',
      'Scheduler',
      'Resource Manager'
    ],
    correct: 'Scheduler'
  },
  {
    text: 'Which scheduling strategy allows high-priority processes to interrupt others?',
    options: [
      'Non-preemptive',
      'Round-robin',
      'Preemptive',
      'First-Come, First-Served'
    ],
    correct: 'Preemptive'
  },
  {
    text: 'In the Burglar Alarm System case study, how often are the sensors polled?',
    options: [
      'Every 1 second',
      'Every 50 milliseconds',
      'Every 0.25 seconds',
      'Every 5 seconds'
    ],
    correct: 'Every 0.25 seconds'
  },
  {
    text: 'What scheduling algorithm prioritizes tasks based on how soon their deadlines are?',
    options: [
      'Round-Robin',
      'Rate Monotonic',
      'Shortest Deadline First',
      'Clock Level'
    ],
    correct: 'Shortest Deadline First'
  }

])
</script>


<style scoped>

  .quiz{
    padding:3%;
  }
</style>