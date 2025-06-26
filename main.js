const {createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('helooo')

        return {
            product,
            description
        }
    }
    
}).mount('#app')


