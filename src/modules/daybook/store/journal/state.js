export default ()=>({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),//Fecha actual
            date:new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus excepturi accusantium perspiciatis? Obcaecati voluptatem consectetur, quaerat temporibus maiores facere deserunt, non enim in, hic doloribus consequatur ipsum corrupti suscipit?', 
            picture:null
        },
        {
            id: new Date().getTime()+1000,//Fecha actual
            date:new Date().toDateString(),
            text: 'natus excepturi accusantium perspiciatis? Obcaecati voluptatem consectetur, quaerat temporibus maiores facere deserunt, non enim in, hic doloribus consequatur ipsum corrupti suscipit?', 
            picture:null
        },
        {
            id: new Date().getTime()+2000,//Fecha actual
            date:new Date().toDateString(),
            text: 'sit amet consectetur adipisicing elit. Ipsa natus excepturi accusantium perspiciatis? Obcaecati voluptatem consectetur, quaerat temporibus maiores facere deserunt, non enim in, hic doloribus consequatur ipsum corrupti suscipit?', 
            picture:null
        }
    ]
})


