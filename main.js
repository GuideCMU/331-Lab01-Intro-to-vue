const {createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_blue.jpg')
        const link = ref('https://www.camt.cmu.ac.th.')
        const inStock = ref(true)
        const onSale = ref(true)
        const inventory =ref(100)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green'},
            {id: 2235, color: 'blue'}
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])

        return {
            product,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes


        }
    }
    
}).mount('#app')



