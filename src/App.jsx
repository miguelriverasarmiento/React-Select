import React from 'react'
import Select from 'react-select'
import makeAnaimated from 'react-select/animated'

const animatedComponents = makeAnaimated()

function App() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <div style={{width: '30%'}}>
      <Select 
        isMulti
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[0], options[2]]}
        options={options} 
        onChange={(selectedOption) => console.log(selectedOption)}/>
    </div>
  )
}

export default App
