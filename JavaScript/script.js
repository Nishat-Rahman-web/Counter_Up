let result = document.querySelectorAll('.counter')

let arr = Array.from(result)

arr.map((item) =>{
    
    let i = 0 
    let count = ()=>{
        i++
        item.innerHTML = i
        // condition
        if(i == item.dataset.num){
            clearInterval(stop)
        }
    }
    let stop = setInterval(()=>{
        count()
    },1000 / item.dataset.num)
})
