<template>
    <LessonsNavBar :to="'/sose'"/>

    <div class="quiz">
      <quiz :quizData="questions" title="QUIZ: Software-Oriented Software Engineering " />
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
    text: 'What is Service-Oriented Software Engineering?',
    options: [
      'A method for developing user interfaces',
      'The application of software engineering principles to service-based systems',
      'The development of standalone applications',
      'A method for deploying applications on the cloud'
    ],
    correct: 'The application of software engineering principles to service-based systems'
  },
  {
    text: 'What is the core idea of a service in a Service-Oriented Architecture (SOA)?',
    options: [
      'It is a physical product offered by one party',
      'It is tangible and leads to the ownership of resources',
      'It is intangible and independent from the consuming application',
      'It is a custom-built product for a specific client'
    ],
    correct: 'It is intangible and independent from the consuming application'
  },
  {
    text: 'Which of the following is an example of using a service in a real-world scenario?',
    options: [
      'Building a custom payment system for an e-commerce website',
      'Using a third-party payment service like Stripe for an e-commerce website',
      'Creating a new browser to browse the web',
      'Developing a web service for customer feedback'
    ],
    correct: 'Using a third-party payment service like Stripe for an e-commerce website'
  },
  {
    text: 'What is one of the key benefits of the Service-Oriented Approach?',
    options: [
      'Services can only be used within a specific organization',
      'Services are typically less flexible than traditional systems',
      'Services can be consumed on a pay-per-use basis',
      'Service providers must maintain all components internally'
    ],
    correct: 'Services can be consumed on a pay-per-use basis'
  },
  {
    text: 'What does dynamic binding in a service-oriented system allow?',
    options: [
      'The ability to lock services to specific users',
      'The ability for applications to select services at deployment or runtime',
      'The ability to bind services only during testing',
      'The ability to bind services in a static manner'
    ],
    correct: 'The ability for applications to select services at deployment or runtime'
  },
  {
    text: 'Which of the following is a real-life example of a service-oriented system?',
    options: [
      'A static website that displays information about a product',
      'An in-car information system that provides real-time updates from various external services',
      'A standalone database used by a single company',
      'A desktop application for offline use'
    ],
    correct: 'An in-car information system that provides real-time updates from various external services'
  },
  {
    text: 'What is a key feature of service-oriented systems in terms of service composition?',
    options: [
      'Services must always be customized for each user',
      'Services can be dynamically composed by combining existing ones',
      'Services are bound to specific organizations',
      'Services cannot be reused across different domains'
    ],
    correct: 'Services can be dynamically composed by combining existing ones'
  },
  {
    text: 'What is a web service?',
    options: [
      'A software that is tied to a specific application',
      'A type of service accessed through internet protocols and XML-based communication',
      'A hardware component used for communication',
      'A system that doesn’t require any network connectivity'
    ],
    correct: 'A type of service accessed through internet protocols and XML-based communication'
  },
  {
    text: 'What does service engineering involve?',
    options: [
      'Designing services to be tightly coupled to applications',
      'Developing services that can only be used within a specific organization',
      'Designing services as reusable abstractions for use across different systems',
      'Ensuring services are not reusable'
    ],
    correct: 'Designing services as reusable abstractions for use across different systems'
  },
  {
    text: 'What is involved in the deployment of a service?',
    options: [
      'Developing services for a single use',
      'Publicizing the service and installing it on a web server',
      'Designing the service without any consideration for its deployment',
      'Making services available only to internal users'
    ],
    correct: 'Publicizing the service and installing it on a web server'
  }
])
</script>

<style scoped>
.quiz{
  padding:3%;
}
</style>