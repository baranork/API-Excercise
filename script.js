function API() {

    var request = new XMLHttpRequest;
    var pokemonString = document.getElementById("search").value;
    pokemonString = pokemonString.toString().toLowerCase();
    var requestLink = "https://pokeapi.co/api/v2/pokemon/" + pokemonString;

    request.open("GET", requestLink, true);

    request.onload = function () {
        var data = JSON.parse(this.response);

        console.log(data);
        document.getElementById("name").innerHTML = data.name + " #" + data.id;
        document.getElementById("image").src = data.sprites.front_default;

        clearTypes();
        document.getElementById("typeOne").innerHTML = data.types[0].type.name;
        document.getElementById("typeOne").style.display = "inline";
        
        try{
            document.getElementById("typeTwo").innerHTML = data.types[1].type.name;  
            document.getElementById("typeTwo").style.display = "inline";
        }
        catch{
        }   
    }
    request.send();
    getInfo(pokemonString)
}


getInfo = (id) =>{
 
    var requestInfo = new XMLHttpRequest;
    var requestInfoLink = "https://pokeapi.co/api/v2/pokemon-species/" + id;
    requestInfo.open("GET", requestInfoLink, true);
    requestInfo.onload = function () {
        var dataInfo = JSON.parse(this.response);
        console.log(dataInfo);
        for (let i = 0; i < dataInfo.flavor_text_entries.length; i++){
            if (dataInfo.flavor_text_entries[i].language.name == "en"){
                document.getElementById("information").innerHTML = dataInfo.flavor_text_entries[i].flavor_text;
                break;
            }
        }
    }
    requestInfo.send();
}


clearTypes = () =>{
    document.getElementById("typeOne").innerHTML = "";
    document.getElementById("typeTwo").innerHTML = "";
    document.getElementById("typeOne").style.display = "none";
    document.getElementById("typeTwo").style.display = "none";
}