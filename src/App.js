import { useEffect, useRef, useState } from 'react';
import './App.css';
import Card from './ui/Card'
// import { faker } from '@faker-js/faker';
import axios from "axios";

function App() {
  // const [initialName, setname] = useState("Anita Weber")
  const [showCard, setShowCard] = useState(true);
  const [card, setcard] = useState([]);

  const [id, setId] = useState(1);
  const [showCardOne, setShowCardOne] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data)
        setcard(res.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res.data)
        setShowCardOne(res.data)
      })
  },[id])

  const showCardHandler = () => {
    setShowCard(!showCard)
  }

  const deleteHandler = (index) => {
    console.log(card.length)
    const card_copy = [...card]
    card_copy.splice(index, 1)
    setcard(card_copy)
  }

  const changeNameHandler = (event, id) => {
    const cardIndex = card.findIndex(card => card.id === id)
    const copy_card = [...card]
    copy_card[cardIndex].name = event.target.value
    setcard(copy_card)
  }

  const changeOneNameHandler = (event) => {
    const copy_card = {...card}
    copy_card.name = event.target.value
    setShowCardOne(copy_card)
  }

  const classes = ['button', 'buttonStyle']

  if (card.length < 3) { classes.push('pink') }
  if (card.length - 1 < 1) { classes.push('yellow') }

  const cardToggle = (showCard &&
    card.map((card, index) => (
      <Card
        name={card.name}
        title={card.email}
        onDelete={() => deleteHandler(index)}
        key={card.id}
        onChangeName={(event) => changeNameHandler(event, card.id)}
      ></Card>
    ))
  )

  return (
    <div className="App2">
      <div className='column'>
        <button className={classes.join(' ')} onClick={() => showCardHandler()}>show card</button>
        <div>{cardToggle}</div>
      </div>
      <div className='column'>
        <input className='inputStyle' value={id} onChange={e => setId(e.target.value)}></input>
        <div>
          <Card
            name={showCardOne.name}
            title={showCardOne.email}
            key={showCardOne.id}
            onChangeName={(event) => changeOneNameHandler(event, card.id)}
          ></Card>
        </div>
      </div>

    </div>

  );
}

export default App;


