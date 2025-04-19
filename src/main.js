import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithubSquare, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faPhone, faEnvelope, faTwitter, faGithubSquare, faLinkedin, faFacebookSquare )

const pinia = createPinia()

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
