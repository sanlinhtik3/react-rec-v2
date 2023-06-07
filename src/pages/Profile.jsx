import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const {id} = useParams()
    console.log(id)

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/user/skill')
    }



  return (
    <>
    <h1>Profile Id: {id}</h1>
    <button onClick={handleHome}>Navigate to Home</button>
    </>
  )
}

export default Profile