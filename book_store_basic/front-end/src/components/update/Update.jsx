import axios from 'axios'
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../layout/Layout'

const Update = () => {
    let navigate = useNavigate()
    let {id} = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleChange2= (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const updateBody = {
          userName: name,
          Email: email,
        };
      
        try {
          const response = await axios.post(`http://localhost:8080/api/v1/update/${id}`, updateBody);
      
          if (response.status === 200) {
            navigate('/');
          } else {
            console.error('Update failed');
          }
        } catch (error) {
          console.error('Update error:', error);
        }
      
        setName('');
        setEmail('');
      };

      
  return (
    <Layout>
        <h1>hello....welcone to the update file</h1>
      <form onSubmit={handleSubmit}>

        <input className='bg-gray-200' type="text" name='username' value={name} onChange={handleChange} />
        <input className='bg-gray-200' type="text" name='email' value={email} onChange={handleChange2} />
        <button type="submit">update</button>

      </form>
    </Layout>
  )
}

export default Update
