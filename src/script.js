const search = document.getElementsByClassName("sbutton")[0];

search.addEventListener("click", ()=>{
    const text = document.getElementById("query");
    console.log(text.value);
    text.value = "";
})

class Cat extends React.Component {
    render(){
        return null
    }
}

/*ReactDOM.render(
    <Cat />,
    document.getElementById("carea")
);*/
