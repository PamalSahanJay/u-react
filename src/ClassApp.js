import { Component } from "react";
import ClassCard from "./ui/ClassCard";

class ClassApp extends Component {
    constructor(props) {
        console.log("constructor updating")
        super(props)
        this.state = {
            card:
                [
                    {
                        id: "0001",
                        name: "Pamal Sahan",
                        title: "Software Engineer",
                        image: "https://avatars.githubusercontent.com/u/97784561"
                    },
                    {
                        id: "0002",
                        name: "Nuwan Dhanushka",
                        title: "Software Engineer",
                        image: "https://avatars.githubusercontent.com/u/97784561"
                    },
                    {
                        id: "0003",
                        name: "Asiri Senith",
                        title: "Software Engineer",
                        image: "https://avatars.githubusercontent.com/u/97784561"
                    }
                ]
            ,
            showCard: true,
        }
    }

    componentDidMount() {
        console.log("parent component did mount")
    } 
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("parent should componet update")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {message : "parent this is message"};
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log("parent component did update", snapshot)
    }


    showCardHandler = () => {
        this.setState({ showCard: !this.state.showCard })
    }

    deleteHandler = (index) => {
        console.log(this.state.card.length)
        const card_copy = [...this.state.card]
        card_copy.splice(index, 1)
        this.setState({ card: card_copy })
    }

    changeNameHandler = (event, id) => {
        const cardIndex = this.state.card.findIndex(card => card.id === id)
        const copy_card = [...this.state.card]
        copy_card[cardIndex].name = event.target.value
        this.setState({ card: copy_card })
    }


    render() {
        console.log("parent u render")
        const classes = ['button']

        if (this.state.length - 1 < 3) { classes.push('pink') };
        if (this.state.card.length - 1 < 1) { classes.push('yellow') }

        const cardToggle = (this.state.showCard &&
            this.state.card.map((card,index) => (
              <ClassCard
                name={card.name}
                title={card.title}
                image={card.image}
                onDelete={()=>this.deleteHandler(index)}
                key={this.state.card.id}
                onChangeName={(event)=>this.changeNameHandler(event,card.id)}
              ></ClassCard> 
            ))
          )
        
          return (
            <div className="App">
              <button className={classes.join(' ')} onClick={() => this.showCardHandler()}>show card</button>
              {cardToggle}
            </div>
          );
    }
}

export default ClassApp;
