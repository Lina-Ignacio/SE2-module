<template>
  <div class="background">
    <!-- Navigation Bar -->
    <div class="nav-bar">
      <div class="nav-links">
        <router-link to="/" class="hover:underline">Home</router-link>
        <span></span>
        <router-link to="/about" class="hover:underline">About</router-link>
      </div>
    </div>

    <hr />

    <!-- Main Content -->
    <div class="content">
      <div class="image-wrapper">
        <img
          src="https://www.ksotl.com/hosted/images/17/654ba7a9f046938e1a886958de671e/maxresdefault.jpg"
          alt="Software Engineering"
          class="image"
        />
      </div>

      <div class="main-heading">
        <h1>Welcome to <br />Software Engineering 2</h1>
      </div>

      <div class="button-container">
        <router-link to="/frontPage" class="button-link">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #006a71;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Navigation Bar */
.nav-bar {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background-color: #48a6a7;
}

.nav-links > * {
  margin-left: 8px;
  color: white;
  text-decoration: none;
}

/* Main Content */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
}

/* Image Section */
.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px;
}

.image {
  width: 100%;
  max-width: 550px;
  height: auto;
  border-radius: 12px;
}

/* Heading */
.main-heading h1 {
  font-size: 2rem;
  color: white;
  margin: 16px 0;
  line-height: 1.4;
}

/* Button */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.button-link {
  display: inline-block;
  background-color: #ffffff;
  color: #006a71;
  padding: 10px 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
}

.button-link:hover {
  background-color: #e0f7f7;
  color: #004d4d;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-bar {
    justify-content: center;
    flex-wrap: wrap;
  }

  .main-heading h1 {
    font-size: 1.5rem;
  }

  .button-link {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .main-heading h1 {
    font-size: 1.2rem;
  }

  .image {
    max-width: 90%;
  }

  .button-link {
    width: 100%;
    max-width: 200px;
  }
}
</style>
