let newArra1 = []
function getInfo() {
    axios.get(`https://swapi.dev/api/films/2`).then(response => {
        let newArray = response.data.characters
        console.log(newArray)
        newArray.map(i=>{
            let a=document.createElement('span')
        a.innerHTML=i
         document.body.append(a)
            
        })
        // newArray.map(i => {
        //     axios.get(i).then(response => {
        //         newArra1.push(response.data.name)
                
        //     })
            
        // })
        
    })
    

}
// const fulC =()=>{
//   const a=  document.createElement('span')
//   a.innerHTML='allala'
// document.body.append(a)
//     }
// document.querySelector('#download').onclick=fulC
document.querySelector('#download').onclick = getInfo



// let arra=[1,2,3,4,5]
// const abs=()=>{
//     arra.map(i=>{
//         let a=document.createElement('span')
//         a.innerHTML=i
//         document.body.append(a)

//     })

// }
// abs();

