class Cat extends React.Component {

    constructor(props){
        super(props);
        this.state = {cat: null};
    }

    componentDidMount(){
        const randomButton = document.getElementById("big");
        const srandomButton = document.getElementById("small");

        randomButton.addEventListener("click", () => {
            randomButton.style.display = "none";
            srandomButton.style.display = "block";

            let a = new this.rcatget();

            a.then( (data) => {
                console.log(data);
                this.setState({
                    cat:data[0].url
                });
            })
        })

        srandomButton.addEventListener("click", ()=>{

            let a = new this.rcatget();

            a.then( (data) => {
                console.log(data);
                this.setState({
                    cat:data[0].url
                });
            })
        })

    }

    rcatget(){
        return fetch("https://api.thecatapi.com/v1/images/search?size=full")
        .then( response => response.json() )
        .catch( (error) =>{
            throw error;
        });
    }

    render(){
        return <img className="pic" src={this.state.cat} />;
    }
}

ReactDOM.render(
    <Cat />,
    document.getElementById("carea")
);
