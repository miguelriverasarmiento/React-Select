import React from 'react'
import AsyncSelect from 'react-select/async'
import makeAnaimated from 'react-select/animated'

const animatedComponents = makeAnaimated()

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  const styles = {

    control:(styles) => {
      console.log(styles)
      return {
        ...styles,
        backgroundColor: 'black',
      }
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: 'yellow'
      }
    },
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: '#EEE0CB',
        color: 'red'
      }
    }
  }

function App() {

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      
      const filteredOptions = options.filter(option => 
        option.label
         .toLocaleLowerCase()
         .includes(searchValue.toLocaleLowerCase()))
      
        callback(filteredOptions)
    }, 2000)
  }

  return (
    <div style={{width: '70%'}}>
      <AsyncSelect 
        closeMenuOnSelect={false}
        components={animatedComponents}
        loadOptions={loadOptions}
        defaultOptions
        onChange={(selectedOption) => console.log(selectedOption)}
        styles={styles}
        />
    </div>
  )
}

export default App
