<template>
    <lessons-nav-bar :to="'/frontpage'"/>

    <div class="flex w-full background">
      <div class="flex-1 p-6">
        <h1 class="text-2xl font-bold">SYSTEM OF SYSTEMS</h1>
  
        <pre class="mt-2">{{ overview }}</pre>
        <br />
  
        <h1 class="font-bold">📌What is System of Systems?</h1>
        <pre class="mt-2">{{ SoS }}</pre>
        <br />
  
        <h2 class="text-xl font-semibold mt-6 mb-2">📌Essential Characteristics of SoS</h2>
        <div class="overflow-x-auto">
          <table class="table-auto w-full border-collapse border border-gray-400">
            <thead class="bg-gray-200">
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-left">Characteristic</th>
                <th class="border border-gray-400 px-4 py-2 text-left">Description</th>
                <th class="border border-gray-400 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Operational Independence</td>
                <td class="border border-gray-400 px-4 py-2">Each system can operate on its own.</td>
                <td class="border border-gray-400 px-4 py-2">Hospital EMR works without the national health portal.</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Managerial Independence</td>
                <td class="border border-gray-400 px-4 py-2">Each system is managed separately.</td>
                <td class="border border-gray-400 px-4 py-2">Universities use different LMS platforms.</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Emergence</td>
                <td class="border border-gray-400 px-4 py-2">New capabilities emerge from the system as a whole.</td>
                <td class="border border-gray-400 px-4 py-2">Ride-sharing + maps = real-time route prediction.</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Evolutionary Development</td>
                <td class="border border-gray-400 px-4 py-2">Systems evolve independently over time.</td>
                <td class="border border-gray-400 px-4 py-2">Cloud services update APIs without coordination.</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Geographic Distribution</td>
                <td class="border border-gray-400 px-4 py-2">Systems exist in different locations.</td>
                <td class="border border-gray-400 px-4 py-2">Weather stations across the globe.</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Heterogeneity</td>
                <td class="border border-gray-400 px-4 py-2">Systems use different platforms or languages.</td>
                <td class="border border-gray-400 px-4 py-2">One system in Java, another in Python.</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Data-Intensive</td>
                <td class="border border-gray-400 px-4 py-2">High volume of data exchange.</td>
                <td class="border border-gray-400 px-4 py-2">Banking systems sharing user data.</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <br />
        <br>
        <h2 class="text-xl font-semibold mt-6 mb-2">📌System Complexity</h2>
        <pre class="mt-2">{{ SC }}</pre> 
  
        <h1 class="font-bold">Types of Complexity</h1>  
        <div class="overflow-x-auto">
          <table class="table-auto w-full border-collpase border border-gray-400">
            <thead class="bg-gray-200">
                <tr>
                  <th class="border border-gray-400 px-4 py-2 text-left">Type</th>
                  <th class="border border-gray-400 px-4 py-2 text-left">Description</th>
                  <th class="border border-gray-400 px-4 py-2 text-left">Example</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Technical Complexity</td>
                <td class="border border-gray-400 px-4 py-2">Difficulties due to different programming languages, protocols, or platforms.</td>
                <td class="border border-gray-400 px-4 py-2">Combining a mobile app with an old mainframe system.</td>
              </tr>
  
              <tr>
                <td class="border border-gray-400 px-4 py-2">Manegerial Complexity</td>
                <td class="border border-gray-400 px-4 py-2">Coordination issues between different managers or departments.</td>
                <td class="border border-gray-400 px-4 py-2">Government agencies with different priorities on a shared project.</td>
              </tr>
  
              <tr>
                <td class="border border-gray-400 px-4 py-2">Governance Complexity</td>
                <td class="border border-gray-400 px-4 py-2">Legal or policy conflicts that affect system interactions.</td>
                <td class="border border-gray-400 px-4 py-2">GDPR in Europe vs. data policies in other countries.</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <br><br>
        <h2 class="text-xl font-semibold mt-6 mb-2">📌 Classification of SoS</h2>
        <br>
        <h1 class="font-bold">Intuitive Classification</h1>  
        <div class="overflow-x-auto">
          <table class="table-auto w-full border-collpase border border-gray-400">
            <thead class="bg-gray-200">
                <tr>
                  <th class="border border-gray-400 px-4 py-2 text-left">Type</th>
                  <th class="border border-gray-400 px-4 py-2 text-left">Description</th>
                  <th class="border border-gray-400 px-4 py-2 text-left">Example</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Organizational SoS</td>
                <td class="border border-gray-400 px-4 py-2">Governance lies within one organization.</td>
                <td class="border border-gray-400 px-4 py-2">A company using ERP systems across HR, finance, and inventory.</td>
              </tr>
  
              <tr>
                <td class="border border-gray-400 px-4 py-2">Federated SoS</td>
                <td class="border border-gray-400 px-4 py-2">Voluntary cooperation with shared governance.</td>
                <td class="border border-gray-400 px-4 py-2">EU countries sharing a financial transaction system.</td>
              </tr>
  
              <tr>
                <td class="border border-gray-400 px-4 py-2">System Coalition</td>
                <td class="border border-gray-400 px-4 py-2">No formal governance; just informal cooperation.</td>
                <td class="border border-gray-400 px-4 py-2">Public schools using third-party tools under district agreement.</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <br> <br>
        <h1 class="font-bold">Maier's Classification</h1>  
        <div class="overflow-x-auto">
          <table class="table-auto w-full border-collpase border border-gray-400">
            <thead class="bg-gray-200">
                <tr>
                  <th class="border border-gray-400 px-4 py-2 text-left">Type</th>
                  <th class="border border-gray-400 px-4 py-2 text-left">Description</th>
                  <th class="border border-gray-400 px-4 py-2 text-left">Example</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Directed SoS</td>
                <td class="border border-gray-400 px-4 py-2">Controlled by one managing entity.</td>
                <td class="border border-gray-400 px-4 py-2">A military system integrating air, land, and sea units.</td>
              </tr>
  
              <tr>
                <td class="border border-gray-400 px-4 py-2">Collaborative SoS</td>
                <td class="border border-gray-400 px-4 py-2">No central authority; components share common goals.</td>
                <td class="border border-gray-400 px-4 py-2">A joint research platform used by multiple universities.</td>
              </tr>
  
              <tr>
                <td class="border border-gray-400 px-4 py-2">Virtual SoS</td>
                <td class="border border-gray-400 px-4 py-2">Loosely connected; no formal structure.</td>
                <td class="border border-gray-400 px-4 py-2">Volunteer-driven open-source software ecosystems.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br>
  
        <h1 class="font-bold">📌Why Reductionism Falls Short? </h1>
        <pre class="mt-2">{{ WRSF }}</pre>
        <br>
  
        <h1 class="font-bold">📌SoS Engineering Process</h1>
        <pre class="mt-2">{{ SoSEP }}</pre>
        <br>
        
        <h1 class="font-bold">📌Interfaces and Unified UIs</h1>
        <pre class="mt-2">{{ UI }}</pre>
        <br>
  
        <h1 class="font-bold">📌Testing System of Systems</h1>
        <pre class="mt-2">{{ TSS }}</pre>
        <br>
  
        <h1 class="font-bold">📌Architectural Pattern</h1>
        <pre class="mt-2">{{ AP }}</pre>
        <br>

        <v-divider></v-divider>
        
        <div class="button-container">
          <pre class="text-sm">
            Congratulations for making it!
            You can now asses your understanding about the lesson by taking a Quiz.
            Just clicked the quiz button.
            </pre>
          <router-link to="/sosQuiz" class="hover:text-decoration-underline text-blue-600 button">Quiz</router-link>
        </div>
  
      </div>
    </div>
  </template>
  
  
  
  
  <script setup>
    import { ref } from 'vue'
    import LessonsNavBar from './LessonsNavBar.vue'
  
    // Overview
    const overview = ref(`
      A System of Systems refers to a collection of independent systems that work together to 
      provide a more complex and comprehensive capability than each system could provide alone. 
      These individual systems are operationally and managerially independent, yet they 
      collaborate to achieve a common goal.
    `)
  
    // What is system of systems
    const SoS = ref(`
      📝 Description:
  
          A System of Systems (SoS) is a collection of independent systems that are operationally 
          and managerially independent, but collaborate to deliver a greater, combined capability.
          These systems are not built from scratch. Instead, they are integrated from existing, 
          independently developed systems.
  
      📌 Key Characteristics:
           No single manager for all parts.
           Each component system may follow its own policies and evolution timeline.
  
      🎓 Example:
          An emergency management platform integrates the following:
             🚓 Police system for dispatching units
             🚑 Ambulance system for medical emergencies
             🚒 Fire department system Each has its own software, staff, and control—but together 
            they handle national emergencies.
    `)
  
    //system complexity
    const SC = ref(`
      📝 Description:
          System complexity increases as more components interact, especially when those components 
          are managed separately.
    `)
  
    //why reductionism falls short
    const WRSF = ref(`
      📝 Description:
          Reductionism means breaking a system into parts, solving each part, and reassembling it to
          understand the whole. This works for simple systems, but fails for SoS.
  
      ⚠️ Why It Fails in SoS:
           Boundaries are blurry.
           Multiple owners = conflicting priorities.
           Political, legal, and social factors often override logic.
  
      🤝 Example:
          A COVID tracking system combining airlines, hospitals, and immigration fails if each group 
          refuses to share all data due to privacy laws or politics.
      `)
  
    //SoS engineering process
    const SoSEP = ref(`
      📝 Description:
          Designing SoS requires a unique, iterative engineering process because the components are 
          pre-existing and managed independently.
  
      ⚙️ Steps:
          1. Conceptual Design – Define high-level vision and purpose.
          e.g., A smart education system to connect teachers, students, and admins.
          2. System Selection – Choose existing systems to integrate.
          e.g., Moodle LMS, Google Drive, and Zoom.
          3. Architectural Design – Plan how systems will interact.
          e.g., Decide that Zoom will be embedded within Moodle UI.
          4. Interface Development – Build APIs or connectors.
          e.g., Create login SSO so one account accesses all services.
          5. Integration & Deployment – Test and launch the system together.
          e.g., Roll out in pilot schools before full release.
    `)
  
    //Interfaced and unified UIs
    const UI = ref(`
      📝 Description:
          Interfaces (APIs) are critical to connect systems; unified UIs give users a seamless experience.
  
      🧩 Challenges:
           Systems may not expose APIs.
           Different design principles make unified UI difficult.
           Adding new systems may break the UI.
    
      🎨 Example:
          In iLearn, students log in once and access grades, resources, and Zoom—all from one dashboard.
    `)
  
    //Testing System of Systems
    const TSS = ref(`
      📝 Description:
          Testing SoS is difficult because of changing systems, lack of clear requirements, and 
          limited control over components.
  
      ✔️ Agile Testing Strategies:
           Test in small increments.
           Use automation for regression.
           Involve multiple stakeholders in feedback and validation.
  
      🤝 Example:
          When integrating a payment gateway into an e-commerce system, tests must adapt to changes in
          third-party APIs.
    `)
  
    //Architectural pattern
    const AP= ref(`
      📡 A. Systems as Data Feeds
           Principal system gathers data.
           Others provide data but don’t interact directly.
      🔎 Example:
          A weather app pulls temperature data from stations and satellites, but those systems don’t 
          interact.
  
      🧩 B. Systems in a Container
           One system provides core services like login, storage, or UI.
           Other systems “plug into” it.
      
      🔎 Example:
          Google Workspace where Docs, Slides, and Gmail are accessible under one login and interface.
  
      💱 C. Trading Systems
           All systems interact freely.
           No single system is in control.
  
      🔎 Example:
          Cryptocurrency networks where wallets, exchanges, and blockchains operate autonomously but trade
          data with each other.
    `)
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
  