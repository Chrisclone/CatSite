const search = document.getElementsByClassName("sbutton")[0];

search.addEventListener("click", ()=>{
    const text = document.getElementById("query");
    console.log(text.value);
    text.value = "";
})

function catGet(){
    const req = new XMLHttpRequest();

    req.onreadystatechange = ()=>{
        if (req.readyState == 4 && req.status == 200) {
            let cat = req.responseText;
        }
    }

    req.open("GET","https://api.thecatapi.com/v1/images/search?size=full",true);
    req.send();
}

class Cat extends React.Component {
    render(){
        let a = new catGet();
        return a.cat;
    }
}

ReactDOM.render(
    <Cat />,
    document.getElementById("carea")
);
