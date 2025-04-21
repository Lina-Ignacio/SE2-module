<template>
    <lessons-nav-bar :to="'/frontpage'" />

    <div class="flex w-full background">
      <div class="flex-1 p-6">
        <h1 class="text-2xl font-bold">SYSTEM ENGINEERING</h1>

          <pre class="mt-2">{{ overview }}</pre>
          <br>
          <h1 class="font-bold">What is system Engineering?</h1>
          <pre class="mt-2">{{ systemEngineering }}</pre>
          <br>

          <h1 class="font-bold">Types of System</h1>
          <div class="overflow-x-auto">
          <table class="table-auto w-full border-collapse border border-gray-400">
            <thead class="bg-gray-200">
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-left">System Type</th>
                <th class="border border-gray-400 px-4 py-2 text-left">Includes</th>
                <th class="border border-gray-400 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Technical Systems</td>
                <td class="border border-gray-400 px-4 py-2">Hardware + Software</td>
                <td class="border border-gray-400 px-4 py-2">Control system in a microwave oven</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Sociotechnical Systems</td>
                <td class="border border-gray-400 px-4 py-2">Technical Systems + People + Policies + Processes</td>
                <td class="border border-gray-400 px-4 py-2">Hospital patient management system</td>
              </tr>
            </tbody>
          </table>
        </div>
        <pre> {{ keyInsight }}</pre>

        <h1 class="font-bold">System Engineering vs. Software Engineering</h1>
        <pre class="mt-2">{{ SESE }}</pre>
        <br>

        <h1 class="font-bold">Key Stages of Software Engineering</h1>
          <div class="overflow-x-auto">
          <table class="table-auto w-full border-collapse border border-gray-400">
            <thead class="bg-gray-200">
              <tr>
                <th class="border border-gray-400 px-4 py-2 text-left">Stage</th>
                <th class="border border-gray-400 px-4 py-2 text-left">Explanation</th>
                <th class="border border-gray-400 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Conceptual Design</td>
                <td class="border border-gray-400 px-4 py-2">Define system goals, high level features, and feasibility</td>
                <td class="border border-gray-400 px-4 py-2">A school outlines what features it needs in a new online learning platform </td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Procurement</td>
                <td class="border border-gray-400 px-4 py-2">Decide wether to build or buy; select vendors and budget</td>
                <td class="border border-gray-400 px-4 py-2">The school chooses to buy goofle classroom</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Development</td>
                <td class="border border-gray-400 px-4 py-2">build and integrate hardware/software; define user process</td>
                <td class="border border-gray-400 px-4 py-2">Customize google classroom for grade levels</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Operation</td>
                <td class="border border-gray-400 px-4 py-2">deploy system and train users</td>
                <td class="border border-gray-400 px-4 py-2">Teachers begin using the platform; students are given log in</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Evolution</td>
                <td class="border border-gray-400 px-4 py-2">Update the system as requiremenst or technologies change</td>
                <td class="border border-gray-400 px-4 py-2">Add video conferencing and analytics later</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br>

        <h1 class="font-bold">Interdisciplinary Collaboration</h1>
        <pre class="mt-2">{{ IC }}</pre>
        <br>

        <br>
        <h1 class="font-bold">Sociotechnical Systems & Organizational Environment</h1>
        <pre class="mt-2">{{ SSOE }}</pre>

        <br>
        <h1 class="font-bold">Complexity and Emergent Properties</h1>
        <pre class="mt-2">{{ CEP }}</pre>

          <div class="overflow-x-auto">
          <table class="table-auto w-full border-collapse border border-gray-400">
            <tbody>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Functional</td>
                <td class="border border-gray-400 px-4 py-2">Whole-system abilities (e.g., air traffic control functionality)</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-4 py-2">Non-Functional</td>
                <td class="border border-gray-400 px-4 py-2">Safety, reliability, performance, and security</td>
              </tr>
            </tbody>
          </table>
        </div>
        <pre class="mt-2">{{ CEPExample }}</pre>
        <br>

        <h1 class="font-bold">Systems Success: A Subject Matter</h1>
        <pre class="mt-2">{{ SSSM }}</pre>
        <br>

        <h1 class="font-bold">Conceptual Design in Detail</h1>
        <pre class="mt-2">{{ CDD }}</pre>
        <br>

        <h1 class="font-bold">System Procurement Essentials </h1>
        <pre class="mt-2">{{ SPE }}</pre>
        <br>

        <h1 class="font-bold">System Development Process</h1>
        <pre class="mt-2">{{ SDP }}</pre>
        <br>

        <h1 class="font-bold">Operation and Evolution</h1>
        <pre class="mt-2">{{ OE }}</pre>
        <br>

        <v-divider></v-divider>
        
        <div class="button-container">
          <pre class="text-sm">
            Congratulations for making it!
            You can now asses your understanding about the lesson by taking a Quiz.
            Just clicked the quiz button.
            </pre>
          <router-link to="/seQuiz" class="hover:text-decoration-underline text-blue-600 button">Quiz</router-link>
        </div>
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import LessonsNavBar from './LessonsNavBar.vue'
  
  const overview = ref(`
    System engineering is an interdisciplinary approach to designing, integrating, 
    and managing complex systems throughout their life cycles. It ensures that all 
    components—whether hardware, software, or human—work together to meet user needs 
    and organizational goals. This involves requirements analysis, system design, 
    integration, testing, and maintenance. By taking a holistic view, system engineering 
    addresses both technical and operational aspects, making it essential for developing 
    reliable and efficient systems in fields such as aerospace, healthcare, transportation, 
    and information technology.
  `) 

  //system engineering
  const systemEngineering = ref(`
    Definition:
      Systems Engineering is a structured process involving the design, integration, management, 
      and evolution of complex systems — especially those that combine software, hardware, people, 
      organizational processes, and policies.

    Purpose:
      • To ensure that technical systems are aligned with human and organizational goals.
      • It supports not only functionality but also reliability, usability, safety, and maintainability.

      Real-World Example:
        A railway control system includes:
          • Software for scheduling and tracking trains.
          • Hardware such as signals and control boards.
          • Operators who monitor the system.
          • Organizational policies related to safety and timeliness.
  `) 

  const keyInsight = ref(`
Key Insight:
   Most real-world systems are sociotechnical. They are complex because human behavior and 
   organizational structures are unpredictable and variable.
  `)

  //System Engineering vs. Software Engineering
  const SESE = ref(`
    • Software Engineering focuses on the creation of software products.
    • Systems Engineering encompasses software but also considers:
      o How the software works with hardware.
      o How users interact with it.
      o How the organization adapts to the system.

    Example:
      In a warehouse automation system:
      • Software engineers develop the control program.
      • Systems engineers ensure the software works with robots, inventory policies, and
      human supervisors.
  `)

  //interdiciplinary colaboration
  const IC = ref(`
    Explanation:
      Engineers, managers, designers, and users often have different:
        • Languages: Same terms, different meanings.
        • Expectations: What’s important varies by discipline.
        • Boundaries: Each professional defends their area of expertise.
      Example:
        A developer says a "module" refers to a code unit. A project manager thinks it’s a
        functional group (like payroll). Miscommunication causes delay.
  `)

  //Sociotechnical Systems & Organizational Environment
  const SSOE = ref(`
    Explanation:
      These systems function within organizations, so they must adapt to:
        • Policies
        • Politics
        • Staff hierarchy
        • Job roles

      Real Case:
      A university student system must:
        • Respect data privacy laws
        • Fit into departmental workflows
        • Be accepted by faculty and admins
      If not aligned, the system may face resistance or rejection — regardless of how well
      it works technically.  
  `)

  //Complexity and Emergent Properties
  const CEP = ref(`
    What is Complexity?
      A system becomes complex when:
        • Multiple subsystems interact in unpredictable ways.
        • Small changes in one area affect others.

    Emergent Properties:
      Properties that arise only when components work together — not present in individual
      parts.
  `)

  const CEPExample = ref(`
    Example:
      A car’s braking system isn't just brakes — it includes software, sensors, tires, and road
      conditions. Together, they form an anti-lock braking system (ABS) — a functional,
      emergent property.
  `)

  //8. System Success: A Subjective Matter
  const SSSM = ref(`
   Key Idea:
    Different stakeholders define success differently, based on:
      • Their goals
      • Their perspective
      • Their experience using the system

    Case Study – Mentcare System:
      • Intended to improve mental healthcare services.
      • Managers: Happy with better data reports.
      • Nurses: Unhappy due to more documentation work and less patient time.
    Result: Seen as a success by some, failure by others.
  `)

  //conceptual design in detail
  const CDD = ref(`
   Activities:
      1. Concept Formulation: Refine vague needs into clear goals.
      2. Problem Understanding: Interview stakeholders.
      3. System Proposals: Suggest multiple options.
      4. Feasibility Study: Analyze whether it's technically and economically possible.
      5. System Architecture: Outline components and interfaces.
      6. System Vision Document: A non-technical summary for decision-makers.

    Example:
      For an e-learning system:
        • Concept: "Accessible learning anytime"
        • Stakeholders: Students, instructors, admins
        • Proposal: Moodle vs. custom app
        • Feasibility: Moodle meets 90% of needs
        • Vision doc: “CCC Learn 2.0: Learning Anywhere, Anytime”
  `)

  //System Procurement Essentials
  const SPE = ref(`
   Key Decisions:
    • Build vs. Buy: Cost, time, and features
    • System Type:
    o Off-the-shelf (ready-made)
    o Configurable (customizable, like SAP)
    o Custom-built (from scratch)

   Procurement Risks:
    • Choosing incompatible systems
    • Legal contracts limiting flexibility
    • Underestimating training needs
  `)

   //System Development Process
  const SDP = ref(`
    Steps:
      1. Requirements Engineering – Analyze user needs
      2. Architectural Design – Define system structure
      3. Requirements Partitioning – Assign to subsystems
      4. Subsystem Engineering – Build and configure parts
      5. System Integration – Combine all components
      6. System Testing – Verify functionality
      7. System Deployment – Install and deliver to users
  `)

  //Operation and Evolution
  const OE = ref(`
    Operation:
      • Train users
      • Monitor system usage
      • Solve real-world issues
      Evolution:
      • Modify the system due to:
        o Business changes
        o User feedback
        o Technological updates

      Challenges:
        • Unrecorded decisions
        • Interdependent components
        • Legacy systems with outdated designs
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