import axios from 'axios'
import React from 'react'

const DynamicSearch = () => {

    const handleRemoveAll = () => {
        axios.post('http://localhost:8080/api/v1/deleteall')
        .then(res => {
            if(res===200){
                return 'all deleted'
            }else{
                return 'something was wrong'
            }
        })
    }

  return (
    <div>
      <button onClick={() => handleRemoveAll()}>Remove All</button>
    </div>
  )
}

export default DynamicSearch
