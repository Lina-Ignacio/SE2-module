<template>
    <div class="p-6 max-w-xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
  
      <form @submit.prevent="checkAnswers" >
        <div v-for="(question, index) in quizData" :key="index">
          <p class="font-medium mb-2">{{ index + 1 }}. {{ question.text }}</p>
          <div class="options">
            <label
              v-for="(option, i) in question.options"
              :key="i"
              class="flex items-center gap-2"
            >
              <input
                type="radio"
                :name="'question-' + index"
                :value="option"
                v-model="userAnswers[index]"
                class="accent-blue-600"
              />
              {{ option }}
            </label>
          </div>

          <!-- Feedback after submission -->
            <div v-if="score !== null" class="space">
            <span
                v-if="userAnswers[index] === question.correct"
                class="text-green-600 font-medium"
            >
                ✅ Correct
            </span>
            <span
                v-else
                class="text-red-600 font-medium"
            >
                ❌ Incorrect — Correct answer: {{ question.correct }}
            </span>
            </div>
        </div>
  
        <button
          type="submit"
          class="button"
        >
          Submit
        </button>
  
        <div v-if="score !== null" >
          <h2>You scored {{ score }} out of {{ quizData.length }} </h2>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref, watch } from 'vue'

    const props = defineProps({
    quizData: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        default: 'Quiz'
    }
    })

    const userAnswers = ref([])
    const score = ref(null)

    // Watch quizData and initialize userAnswers
    watch(
    () => props.quizData,
    (newQuiz) => {
        userAnswers.value = new Array(newQuiz.length).fill(null)
    },
    { immediate: true }
    )

    const checkAnswers = () => {
    let correctCount = 0
    props.quizData.forEach((q, index) => {
        if (userAnswers.value[index] === q.correct) {
        correctCount++
        }
    })
    score.value = correctCount
    }

  </script>
  
  <style scoped>
  .button{
    background-color: green;
    color: azure;
    border-radius: 10px;
    width: 10%;
    font-size: 1.5rem;
    margin: 2%;
  }
  .options{
    display: flex;
    flex-direction: column;
    padding: 1%;
  }
  .space{
    margin:1%;
    margin-top: 0%;
  }
  </style>