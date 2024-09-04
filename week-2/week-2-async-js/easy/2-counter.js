function counter(time){
    const timeInS = time * 1000
    let counter = 1

    function incremenetCounter(){
        console.log(counter)
        counter++
        setTimeout(incremenetCounter, timeInS)
    }
    incremenetCounter()
}

counter(1)