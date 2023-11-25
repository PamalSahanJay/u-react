import { useState } from 'react';
import './App.css';
import Card from './ui/Card'
import { faker } from '@faker-js/faker';

function App() {
  // const [initialName, setname] = useState("Anita Weber")
  const [showCard, setShowCard] = useState(true);
  const [card, setcard] = useState([
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
  ])

  const showCardHandler = () => {
    setShowCard(!showCard)
  }

  const deleteHandler = (index) => {
    console.log(card.length)
    const card_copy = [...card]
    card_copy.splice(index,1)
    setcard(card_copy)
  }

  const changeNameHandler = (event, id) => {
    const cardIndex = card.findIndex(card => card.id === id)
    const copy_card = [...card]
    copy_card[cardIndex].name = event.target.value
    setcard(copy_card)

  }

  const buttonStyle = {
    backgroundColor: null
  }

  //if(card.length < 3) {buttonStyle.backgroundColor= 'pink'}
  if(card.length < 1) {buttonStyle.backgroundColor= 'purple'}

  // const changeNameHandler = (name) => {
  //   setname(name)
  //   console.log("this is changeNameHandler")
  // }

  // const changeInputHandler = (event) => {
  //   console.log(event)
  //   setname(event.target.value)
  // }

  // const buttonList = (
  //   <div>
  //     <button className="button">YES</button>
  //     <button className="button button3">NO</button>
  //   </div>
  // )

  const cardToggle = (showCard &&
      card.map((card,index) => (
        <Card
          name={card.name}
          title={card.title}
          image={card.image}
          onDelete={()=>deleteHandler(index)}
          key={card.id}
          onChangeName={(event)=>changeNameHandler(event,card.id)}
        ></Card> 
      ))
    )


  // <Card
  //   name={`${faker.person.firstName()} ${faker.person.lastName()}`}
  //   title={faker.person.jobTitle()}
  //   image={faker.image.avatarGitHub()}
  //   // onChangeName={() => changeNameHandler("chamath deshan")}
  //   // onChangeInput={changeInputHandler}
  // >
  //   {/* {buttonList} */}
  // </Card> : null)

  return (
    <div className="App">
      <button className="button" style={buttonStyle} onClick={() => showCardHandler()}>show card</button>
      {cardToggle}

    </div>
  );
}

export default App;


