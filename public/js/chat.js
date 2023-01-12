const socket = io();

socket.on('counterUpdated', (count)=>{
    console.log(`CounterUpdated: ${count}`); 
})

const elem = document.getElementById('increment');
elem.addEventListener('click', ()=>{
    socket.emit('increment')
    console.log("clicked!")
})



