import React from 'react'
// import styles from './styles.css'

const List = (props) => {
  return (
    <div>
      <p>{props.list.name}</p>
      <p>{props.list.description}</p>
      <p>{props.list.email}</p>
      <p>{props.list.hours}</p>

    </div>
  )
}

export default List
