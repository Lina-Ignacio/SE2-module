<template>
    <div class="nav-bar">
      <div class="nav-links">
        <router-link to="/" class="hover:text-decoration-underline text-blue-100 flex items-center gap-2">
          <i class="mdi mdi-arrow-left text-xl"></i>
          Back
        </router-link>
      </div>
    </div>
  
    <div class="background">
      <div class="content">
        <h1>🖥️ About This Project</h1>
        <pre class="pre-box">{{ project }}</pre>
        <br />
  
        <h1>📌 Overview</h1>
        <pre class="pre-box">{{ overview }}</pre>
        <br />
  
        <h1>📩 Contact</h1>
        <pre class="pre-box">{{ contact }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const project = ref(`
    Title: SE2Module
    Type: Software Engineering 2 Learning System 
    Course: Software Engineering II
    Institution: Laguna College of Business and Arts
    Year: 2025
  `)
  
  const overview = ref(`
    This project is a web-based learning module specifically designed to introduce 
    and educate students about the core concepts of Software Engineering. 
    It serves as an interactive and structured platform where users can access 
    various learning materials, including topics, lessons, and assessments related to 
    the discipline. The module was developed as a course requirement for Software 
    Engineering, with the goal of enhancing the learning experience through digital means.
  
    The system follows a modular structure, allowing users to navigate through different 
    chapters or lessons such as Service-Oriented Software Engineering, Software Engineering, 
    System of Systems, and Real-Time Software Engineering. Each topic includes explanations, 
    examples, and quiz-type assessments to reinforce understanding.
  `)
  
  const contact = ref(`
    For inquiries or collaboration:
    📧 group1@gmail.com
  `)
  </script>
  
  <style scoped>
  .background {
    padding: 5%;
    background-color: #48a6a7;
    min-height: 100vh;
  }
  
  .content {
    max-width: 960px;
    margin: auto;
    color: white;
    font-family: sans-serif;
  }
  
  h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  .pre-box {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 8px;
    white-space: pre-wrap; /* So long lines wrap */
    word-wrap: break-word;
    font-size: 1rem;
    line-height: 1.5;
    overflow-x: auto;
  }
  
  /* Navigation */
  .nav-bar {
    display: flex;
    justify-content: flex-start;
    padding: 16px;
    background-color: #077f81;
  }
  
  .nav-links > * {
    margin-left: 8px;
    color: white;
    text-decoration: none;
  }
  
  /* Responsive tweaks */
  @media (max-width: 768px) {
    .content {
      padding: 0 10px;
    }
  
    h1 {
      font-size: 1.5rem;
    }
  
    .pre-box {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 1.3rem;
    }
  
    .pre-box {
      font-size: 0.9rem;
    }
  }
  </style>
  