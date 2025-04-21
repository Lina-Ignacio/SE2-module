import {createRouter, createWebHistory} from 'vue-router'
import about from './components/About.vue'
import home from './components/Home.vue'
import frontPage from './components/FrontPage.vue'
import sose from './components/SOSE.vue'
import se from './components/SE.vue'
import sos from './components/SoS.vue'
import rtse from './components/RTSE.vue'
import soseQuiz from './quizzes/SOSEQuiz.vue'
import seQuiz from './quizzes/SEQuiz.vue'
import sosQuiz from './quizzes/SoSQuiz.vue'
import rtseQuiz from './quizzes/RTSEQuiz.vue'

const routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
    {path: '/frontPage', component: frontPage},
    {path: '/sose', component: sose},
    {path: '/se', component: se},
    {path: '/sos', component: sos},
    {path: '/rtse', component: rtse},
    {path: '/soseQuiz', component: soseQuiz},
    {path: '/seQuiz', component: seQuiz},
    {path: '/sosQuiz', component: sosQuiz},
    {path: '/rtseQuiz', component: rtseQuiz}
]

export default createRouter({
    history: createWebHistory(),
    routes
})