function getPersonajes(done){
    const resultados = fetch("http://localhost:3000/rick");
    resultados.then(res => res.json())
    .then(data =>{
        done(data)
    });
}

getPersonajes(data =>{
    data.results.forEach(personaje =>{
        const article = document.createRange().createContextualFragment(/*html*/ `
        <article>
        <div class="imagen">
            <img src='${personaje.image}' alt="Personaje"> 
        </div>
        <h2>'${personaje.name}' </h2>
        <span>'${personaje.status}'</span>
</article>
` );

        const main = document.querySelector("main");
        main.append(article);

    });
})

