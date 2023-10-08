import { createApp } from 'vue'
//引入全局组件 
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import App from '@/App.vue'
// 清除默认样式
import '@/style/reset.scss'

const app = createApp(App)
app.component('HospitalTop',HospitalTop)
app.mount('#app')

