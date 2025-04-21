<template>
    <lessons-nav-bar :to="'/frontpage'" />

    <div class="flex w-full background">
      <div class="flex-1 p-6">
        <h1 class="text-2xl font-bold">SERVICE-ORIENTED SOFTWARE ENGINEERING</h1>

        <pre class="mt-2">{{ overview }}</pre>

        <h1 class="font-bold">Web Services</h1>
        <pre class="mt-2">{{ webService }}</pre>
        
        <h1 class="font-bold">Real Life Examples</h1>
        <pre class="mt-2">{{ example1 }}</pre>

        <h1 class="font-bold">Benifits of Service-Oriented Approach</h1>
        <pre class="mt-2">{{ benefits  }}</pre>
      
        <h1 class="font-bold">Real Life Examples</h1>
        <pre class="mt-2">{{ example2 }}</pre>

        <h1 class="font-bold">Service-Oriented Architecture</h1>
        <pre class="mt-2">{{ architecture  }}</pre>
    
        <h1 class="font-bold">Services as Reusable Component</h1>
        <pre class="mt-2">{{ service }}</pre>

        <h1 class="font-bold">Service Engineering</h1>
        <pre class="mt-2">{{ serviceEngineering }}</pre>

        <h1 class="font-bold">Service Implementation and Deployment</h1>
        <pre class="mt-2">{{ implementationAndDeployment }}</pre>

        <v-divider></v-divider>
        
        <div class="button-container">
          <pre class="text-sm">
            Congratulations for making it!
            You can now asses your understanding about the lesson by taking a Quiz.
            Just clicked the quiz button.
            </pre>
          <router-link to="/soseQuiz" class="hover:text-decoration-underline text-blue-600 button">Quiz</router-link>
        </div>

      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import LessonsNavBar from './LessonsNavBar.vue'

    const overview = ref(`
      Service-Oriented Software Engineering is the application of software engineering principles to the design, 
      development, deployment, and maintenance of service-based systems. It combines traditional software engineering 
      with Service-Oriented Architecture (SOA) principles to build systems composed of loosely coupled, reusable, and
      interoperable services.
    `)
  
    const webService = ref(`
      A web service is a specific instance of a broader concept of a service—defined as “an act or performance offered 
      by one party to another. Although the process may be tied to a physical product, the performance is essentially 
      intangible and does not normally result in ownership of any of the factors of production.” The core idea of a 
      service lies in its intangible nature and independence from the consuming application. In this context, service 
      providers can create specialized, reusable services that are not bound to a specific application or organization. 
      These services can then be accessed and utilized by various users and systems across different domains, promoting 
      interoperability, reuse, and flexibility in software development.
    `) //dito mo lagay yung lesson

    const example1 = ref(`
      Imagine you're building an e-commerce website that sells handmade crafts. You want to allow customers to pay 
      using credit cards or e-wallets. Instead of building your own payment processing system (which would be complex, 
      risky, and costly), you decide to integrate a payment service like Stripe.
    `) //dito ang examples

    const benefits = ref(`
      Services, whether internal or external to an organization, enable the development of applications that integrate 
      multiple sources. Service providers publish service information, allowing authorized users to discover and use them. 
      A key feature of service-oriented systems is dynamic binding, allowing applications to select services at deployment 
      or runtime, making them adaptive to changes. The architecture supports composing new services by combining existing ones. 
      Services are often consumed on a pay-per-use basis, reducing the need for maintaining rarely-used components. 
      This results in lighter, more efficient applications, particularly for mobile devices, and allows computationally intensive 
      tasks to be offloaded to external services, enhancing performance.
    `) //dito mo lagay yung lesson

    const example2 = ref(`
      An in-car information system provides drivers with real-time updates on weather, road traffic, local points of interest, 
      and more. This system is integrated with the car’s GPS receiver, allowing it to determine the vehicle’s current location. 
      Based on that location, the system dynamically accesses a variety of external information services, such as traffic data 
      providers, weather forecasting services, and local directory APIs.The information is then delivered through the car’s audio 
      system on a specific channel, and can be customized to the driver's preferred language.
    `) //dito ang examples

    const architecture = ref(`
      It is a means of developing distributed systems where the components are stand-alone services. These services may execute 
      on different computers, provided by different service providers. Standard protocols have been developed to support 
      communication and information exchange between these services.
    `)

    const service = ref(`
      A service is a loosely-coupled, reusable software component that encapsulates discrete functionality. It can be distributed 
      and programmatically accessed. A web service is a type of service that is accessed using standard Internet protocols and 
      XML-based communication.
    `)

    const serviceEngineering = ref(`
      The process of developing services for reuse in service-oriented applications involves designing the service as a reusable 
      abstraction that can be utilized across different systems. The service should encapsulate generally useful functionality 
      and be robust and reliable. Additionally, it must be well-documented to ensure that it can be easily discovered and understood 
      by potential users. 
    `)

    const implementationAndDeployment = ref(`
      Programming services involves using a standard programming language or a workflow language. After development, the service 
      must be tested by creating input messages and verifying that the output messages produced are as expected.Deployment includes 
      publicizing the service and installing it on a web server. Modern servers typically provide support for service installation. 
    `)


   

    //dito yung questions
    const questions = [
  {
      text: 'What is love?',
      options: ['I dunno', 'love is sweet', 'love is shit'],
      correct: 'I dunno'
  },
  {
      text: '1+1',
      options: ['2', '5', '7'],
      correct: '2'
  }
  ]
  </script>

<style scoped>
    /* Navigation Bar */
  .nav-bar {
    display: flex;
    justify-content: flex-start;
    padding: 16px;
    background-color: #006a71;
  }
  
  .nav-links > * {
    margin-left: 8px;
    color: white;
    text-decoration: none;
  }

  .background{
    padding: 3%;
  }

  .button{
  display: inline-block;
  color: #ffffff;
  background-color: #006a71;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  text-decoration: none; /* removes underline */
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  width: 20%;
  }

  .button-container {
  display: flex;
  justify-content: flex-start; /* aligns the button to the right */
  align-items: center;
  margin-top: 2rem; /* add some spacing from above content */
  gap: 1rem;
  }

</style>