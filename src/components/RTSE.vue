<template>

  <LessonsNavBar :to="'/frontpage'"/>
  
    <div class="flex w-full background">
      <div class="flex-1 p-6">
        <h1 class="text-2xl font-bold">REAL-TIME SOFTWARE ENGINEERING</h1>

        <pre class="mt-2">{{ overview }}</pre>
        <br>

        <h1 class="font-bold">Introduction to Real-Time Systems</h1>
        <pre class="mt-2">{{ intro }}</pre>
        <br>
        <h1 class="font-bold">Embeded System</h1>
        <pre class="mt-2">{{ ES}}</pre>
        <br>

        <h1 class="font-bold">Responsiveness and Timing</h1>
        <pre class="mt-2">{{ RT  }}</pre>
        <br>
        <h1 class="font-bold">Reactive System and Stimuli</h1>
        <pre class="mt-2">{{ RSS }}</pre>
        <br>

        <h1 class="font-bold">Architectural Patterns  in Real-Time System</h1>
        <pre class="mt-2">{{ APRTS }}</pre>
        <br>
        <h1 class="font-bold">Designing Embedded System</h1>
        <pre class="mt-2">{{ DES }}</pre>

        <br>
        <h1 class="font-bold">Timing Analysis</h1>
        <pre class="mt-2">{{ TA}}</pre>

        <br>
        <h1 class="font-bold">Real-Time Operating Systems</h1>
        <pre class="mt-2">{{ RTOS }}</pre>
        <br>

        <h1 class="font-bold">Process and Priority Managemnet</h1>
        <pre class="mt-2">{{ PPM }}</pre>
        <br>

        <h1 class="font-bold">Scheduling Strategies</h1>
        <pre class="mt-2">{{ SS }}</pre>
        <br>

        <v-divider></v-divider>
        
        <div class="button-container">
          <pre class="text-sm">
            Congratulations for making it!
            You can now asses your understanding about the lesson by taking a Quiz.
            Just clicked the quiz button.
            </pre>
          <router-link to="/rtseQuiz" class="hover:text-decoration-underline text-blue-600 button">Quiz</router-link>
        </div>
        

      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import LessonsNavBar from './LessonsNavBar.vue'

    const overview = ref(`
      Real-Time Software Engineering involves designing and developing software systems 
      that respond to inputs or events within a guaranteed time constraint. These systems
      are commonly used in critical applications where timely and predictable responses 
      are essential.
    `)
    //into
    const intro = ref(`
      A real-time system is a software system that must deliver correct results at the correct time.
      
       Example: A pacemaker must detect heartbeat irregularities and respond immediately; 
        delay can be life-threatening.
     
      ✅ Types:
         Hard Real-Time System
            The system fails if deadlines are missed.
            ➤ Example: Anti-lock braking system in cars
         Soft Real-Time System
            The system’s quality degrades, but it still works.
            ➤ Example: Video streaming (a slight lag may occur but it continues running)
    `) 

    //embedded system
    const ES = ref(`
      An embedded system is a combination of hardware and software designed for a specific function 
      within a larger system.

      🔧 Characteristics:
             Operate continuously (e.g., washing machine controller)
             Must react to unpredictable real-world stimuli
             Include direct interaction with hardware (e.g., sensors, actuators)
             Often stored in read-only memory
      🧠 Example:
        A smart thermostat that reads room temperature and controls the heater accordingly.
    `) 

    //Responsiveness and Timing
    const RT = ref(`
      The key challenge in real-time systems is ensuring a timely reaction to events.

      🧠 Example:
        In a fire alarm system, detecting smoke must immediately trigger:     
             The alarm siren
             Sprinklers
             And possibly call emergency services
    `) 

    //Reactive System and Stimuli
    const RSS = ref(`
      🔄 Periodic Stimuli
        Generated at regular intervals
        ➤ Example: Polling a temperature sensor every 100ms

      ⚡ Aperiodic Stimuli
        Occur unexpectedly and require immediate attention
        ➤ Example: A power surge detected by the system
        
      Real-time systems react to these stimuli with appropriate responses within a guaranteed time frame.
    `) 

    //Architectural Pattern in Real-Time System
    const APRTS = ref(`
      🧠 a) Observe and React Pattern
             Continuously monitors sensor values
             Reacts when thresholds are met
        🧪 Example: A smoke detector activates an alarm when smoke concentration is above the safe limit.

      🌍 b) Environmental Control Pattern
             Collects data from environment
             Makes decisions to change the environment
        🌡️ Example: A greenhouse system opens vents when it gets too hot and waters plants at set times.

      🔗 c) Process Pipeline Pattern
            Transforms input step-by-step into output
            Each stage processes and passes data to the next
       🔬 Example: A radiation detector reads signals → amplifies → filters noise → logs readings.
    `)

    //designing an embedded system 
    const DES = ref(`
      The design process for real-time systems involves:
         Platform Selection: Choose the microcontroller, OS, and tools
         Stimuli/Response Identification: What events will the system handle?
         Timing Analysis: Ensuring responses are on time
         Process Scheduling: When and how often should each task run?
    `)

    //timing analysis
    const TA = ref(`
      Ensures the system meets deadlines under worst-case conditions.
      📊 Key Factors:
         Deadline: Max allowed time for a task
         Execution Time: Time needed to complete a task
         Frequency: How often a task should run

      Example:
        In a power failure detector:
         Voltage must be checked every 4ms
         If 3 consecutive drops are detected, battery backup must start
         The backup must be fully active within 50ms
        → This requires precise scheduling and fast execution
    `)

    //real-time operating system 
    const RTOS = ref(`
      An RTOS manages tasks and ensures timely and predictable task execution.
     🧠 Components:
         Scheduler: Picks the next process to run
         Interrupt Handler: Deals with aperiodic events
         Dispatcher: Starts a task
         Resource Manager: Allocates CPU and memory
         Real-Time Clock: Controls task timing

     🛠️ Example RTOS:
         VxWorks
         FreeRTOS
         RTEMS
    `)

    //Process and priority management
    const PPM = ref(`
       Periodic processes: Run at regular intervals
       Interrupt-driven processes: Triggered by events

     🧠 Priority Levels:
         Interrupt Level: Highest; for urgent events
         Clock Level: For regular scheduled tasks
    `)

    //scheduling strategies
    const SS = ref(`
       Non-Preemptive: Once a process starts, it runs to completion
       Preemptive: Higher-priority processes can interrupt others
        
      Common Algorithms:
         Round-Robin: Equal time slices
         Rate Monotonic: More frequent tasks get higher priority
         Shortest Deadline First: Task with nearest deadline runs first

     🧠 Case Study Example: Burglar Alarm System
        🏠 System Behavior:
             Sensors detect movement, open windows/doors
             Alarm triggers lights, audible sound, and calls the police
             Switches to battery backup if power is lost

        🧠 Timing Requirements:
             Power failure must be addressed in 50ms
             System polls sensors every 0.25s

     → These constraints guide timing analysis and scheduling
    `)

  </script>

<style scoped>

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