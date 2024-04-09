let app = () => {
    let form = document.querySelector(".form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let input = document.querySelector(".input").value;
        if (input.length == 8) {
            getData(input);
        } else {
            alert("CPF inválido")
        }
    })


    let getData = (value) => {
        let url = `https://viacep.com.br/ws/${value}/json/`
        fetch(url).then((response) => {
            response.json().then((data) => {
                showData(data);
            })
        })
    }

    //CEP
    let showData = (data) => {
        let ul = document.querySelector(".list");


        let cep = document.createElement("li");
        cep.setAttribute("class", "listsub");
        ul.appendChild(cep);
        cep.innerHTML = `${data.cep}`;


        //RUA
        let rua = document.createElement("li");
        rua.setAttribute("class", "listsub");
        ul.appendChild(rua);
        rua.innerHTML = `${data.logradouro}`;


        //BAIRRO
        let bairro = document.createElement("li");
        bairro.setAttribute("class", "listsub");
        ul.appendChild(bairro);
        bairro.innerHTML = `${data.bairro}`;


        //LOCALIDADE
        let localidade = document.createElement("li");
        localidade.setAttribute("class", "listsub");
        ul.appendChild(localidade);
        localidade.innerHTML = `${data.localidade}`;


        //UF
        let uf = document.createElement("li");
        uf.setAttribute("class", "listsub");
        ul.appendChild(uf);
        uf.innerHTML = `${data.uf}`;
    }
}

app();
