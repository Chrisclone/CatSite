class Cat extends React.Component {
    constructor(props){
        super(props);
        this.state = {cat:null}
    }

    componentDidMount(){
        const randomButton = document.getElementById("big");
        const srandomButton = document.getElementById("small");

        randomButton.addEventListener("click", () => {
            randomButton.style.display = "none";
            srandomButton.style.display = "block";
        })
    }

    rcatget(){
        const req = new XMLHttpRequest();

        req.onreadystatechange = ()=>{
            if (req.readyState == 4 && req.status == 200) {

                console.log(req.responseText);
                this.response = req.responseText;

            }
        }

        req.open("GET","https://api.thecatapi.com/v1/images/search?size=full",true);

        req.send();
    }

    render(){
        return <div>{this.state.cat}</div>;
    }
}

ReactDOM.render(
    <Cat />,
    document.getElementById("carea")
);
