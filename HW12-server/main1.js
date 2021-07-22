function getCharacters() {
    let content = document.getElementById('content');
    let buttonContent = document.getElementById('buttonContent');

    content.innerHTML = ''
    buttonContent.innerHTML = ''
    axios.get(`https://swapi.dev/api/films/2`)
        .then(r => {
            const characters = r.data.characters;

            characters.map(l => {
                axios.get(l)
                    .then(p => {
                        const name = p.data.name;
                        const birth = p.data.birth_year;
                        const id = p.data.url.slice(-3).replaceAll('/', '')
                        let gender = p.data.gender;
                        gender == 'female' ? gender = `<img class="gendericon" src="icons/female.png" >` : gender = `<img class="gendericon" src="icons/male.png"  >`
                        content.insertAdjacentHTML('beforeend', `<div class="character-info">
                <img src="photos/${id}.jpeg" class="photo"><br>
                <b>Name:</b> ${name}<br> <b>Date of birth:</b> ${birth} <br> <b>Gender:</b> ${gender} </div>`)
                    })
            })
        })
}
document.querySelector('#getFiveEpisod').onclick = getCharacters




function showPlanet() {
    let content = document.getElementById('content');
    let buttonContent = document.getElementById('buttonContent');
    buttonContent.insertAdjacentHTML('beforeend', `<button id="Next"> Next</button> `)
    buttonContent.insertAdjacentHTML('beforeend', `<button id="Back"> Back</button>`)
    let next = document.getElementById('Next')
    let back = document.getElementById('Back')
    let page = 1;
    let url = `https://swapi.dev/api/planets/?page=${page}`
    back.style.display = 'none'
    axios.get(url)
        .then(r => {
            const name = r.data.results
            name.map(i => {
                content.insertAdjacentHTML('beforeend', `<div class="planet"><span>${i.name}</span></div> `)

            })
        })
    next.addEventListener('click', () => {
        content.innerHTML = ''
        page += 1;
        if (page == 6) {
            next.style.display = 'none'
        }
        else if (page > 1) {
            back.style.display = ''
        }

        getPlanets(page)
    })
    back.addEventListener('click', () => {
        content.innerHTML = ''
        page -= 1;
        if (page < 6) {
            next.style.display = ''
        }
        if (page == 1) {
            back.style.display = 'none'
        }
        getPlanets(page)
    })

    content.innerHTML = ''
    function getPlanets(page) {
        let url = `https://swapi.dev/api/planets/?page=${page}`
        axios.get(url)
            .then(r => {
                const name = r.data.results
                name.map(i => {
                    content.insertAdjacentHTML('beforeend', `<div class="planet"><span>${i.name}</span></div> `)

                })

            })
    }

}




document.querySelector('#showPlanet').onclick = showPlanet

