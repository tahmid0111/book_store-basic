import {useState, useEffect} from 'react'
import SingleData from './SingleData'

const DataList = () => {
    const [datas, setDatas] = useState([])

    useEffect(()=> {
        fetch('http://localhost:8080/api/v1/read')
        .then(res => res.json())
        .then(result => setDatas(result.data))
    }, [datas])
  return (
    <div>
      <div className='px-5 mx-auto grid grid-cols-12'>
        {
          datas.map((item, i) => <SingleData key={i} item={item} />)
        }
      </div>
    </div>
  )
}

export default DataList
