import * as React from 'react'
import PropTypes from 'prop-types'
import './App.css'

function App() {
  const welcome = {
    greeting: 'Hello',
    title: 'React'
  }
  const items = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author:  'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author:  'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]
  return (
    <>
      <Greeting text={welcome} />
      <List list={items} />
    </>
  )
}

function Greeting(props) {
  function showMsg(obj){
    return `${obj.greeting}, ${obj.title}`
  }
  return(
    <h1>{showMsg(props.text)}</h1>
  )
}

Greeting.propTypes = {
  text: PropTypes.shape({
    greeting: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

function List(props){
  return(
    <ul>
      {props.list.map(item => {
        return(
          <Item key={item.objectID} obj={item} />
        )
      })}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      objectID: PropTypes.number.isRequired
    })
  ).isRequired
}


function Item(props) {
  console.log(props);
  return(
    <li>
      <p>title: {props.obj.title}</p>
      <a href={props.obj.url}>{props.obj.title}</a>
      <p>author: {props.obj.author}</p>
      <p>points: {props.obj.points}</p>
    </li>
  )
}

Item.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
}

export default App
