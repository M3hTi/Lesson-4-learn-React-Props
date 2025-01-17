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
  return(
    <h1>{props.text.greeting}, {props.text.title}</h1>
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
          <li key={item.objectID}>
            <p>title: {item.title}</p>
            <a href={item.url}>{item.title}</a>
            <p>author: {item.author}</p>
            <p>points: {item.points}</p>
          </li>
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

export default App
