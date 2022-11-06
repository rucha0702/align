import React from 'react'

const Question = (props)=> {
    const question = props.question
  return (
    <div>
        <div>
            {question}
        </div>
    </div>
  )
}

export default Question