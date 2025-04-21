<template>
  <div class="nav-bar">
    <div class="nav-links">
      <span></span>
      <router-link to="/" class="hover:underline">Home</router-link>
      <span></span>
      <router-link to="/about" class="hover:underline">About</router-link>
    </div>
  </div>

  <!-- Entire content is now inside the green background -->
  <div class="background">
    <div class="container">
      <div class="right">
        <h1 class="text-header">
          You may now start your <br /> journey in Software Engineering 2
        </h1>
        <div class="grid-container">
          <div class="sose">
            <v-icon start>mdi-server</v-icon>
            <router-link to="/sose" class="link">Service-Oriented System Engineering</router-link>
          </div>
          <div class="sose">
            <v-icon start>mdi-cogs</v-icon>
            <router-link to="/se" class="link">Systems Engineering</router-link>
          </div>
          <div class="sose">
            <v-icon start>mdi-graph</v-icon>
            <router-link to="/sos" class="link">System of Systems</router-link>
          </div>
          <div class="sose">
            <v-icon start>mdi-clock-outline</v-icon>
            <router-link to="/rtse" class="link">Real-Time Software Engineering</router-link>
          </div>
        </div>
      </div>
      <h1 class="happy-text">Happy Learning!</h1>
    </div>
  </div>
</template>

<style scoped>
.background {
  min-height: 100vh;
  width: 100%;
  background-color: #48a6a7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}

.nav-bar {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background-color: #006a71;
}

.nav-links > * {
  margin-left: 8px;
  color: white;
  text-decoration: none;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.text-header {
  font-size: 2.5rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: white;
  text-align: center;
}

.happy-text {
  font-size: 2.5rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 30px;
}

.sose {
  width: 100%;
  padding: 20px;
  background-color: #006a71;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;
}

.link {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.4;
  padding: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .text-header,
  .happy-text {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .text-header,
  .happy-text {
    font-size: 1.5rem;
  }

  .link {
    font-size: 0.95rem;
  }

  .sose {
    padding: 15px;
  }
}
</style>
