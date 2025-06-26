const {createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_blue.jpg')
        const link = ref('https://www.camt.cmu.ac.th.')
        const inStock = ref(true)
        const onSale = ref(true)
        const inventory =ref(100)

        return {
            product,
            image,
            link,
            inStock,
            inventory,
            onSale

        }
    }
    
}).mount('#app')



