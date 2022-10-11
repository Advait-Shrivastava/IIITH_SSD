import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    // const history = useHistory();
    const [authenticated, setauthenticated] = useState(null);

    async function populateQuote() {
        const req = await fetch('http://localhost:1337/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        console.log(data)
        // if (data.status === 'ok') {
        //     setQuote(data.quote)
        // } else {
        //     alert(data.error)
        // }
    }

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //         const user = jwt.decode(token)
    //         if (!user) {
    //             localStorage.removeItem('token')
    //             // history.replace('/login')
    //             navigate('/login');
    //         } else {
    //             populateQuote()
    //         }
    //     }
    // }, [])

    // return<h1>Hello World</h1>
}

export default Dashboard