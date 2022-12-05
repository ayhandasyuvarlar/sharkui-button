import React from 'react'
import styles from './styles.module.css'

export const Button = ({ text, color, handlerClick }) => {
  return (
    <button
      className={styles.color}
      onClick={() => {
        handlerClick
      }}
    >
      Example Component: {text}
    </button>
  )
}
