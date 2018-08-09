import Vue from 'vue';
import App from './App';

new Vue({
    render: h => h(App) // refactor of function(h) {return h(App)};
}).$mount('#app'); // same as el: '#app', where to render to the DOM