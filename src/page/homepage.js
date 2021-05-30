import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import Navbar from '../component/navbar'
import asset from '../assets/img/samsung.png'
import { Link } from 'react-router-dom'
import axios from "axios"
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider'
import corner from '../assets/img/corner.png'
import logo from '../assets/img/logo-big.png'
// import Sidebar from '../component/sidebar'
// import '../assets/css/sidebar.css'




function LandingPage(props) {
    const [search, setSearch] = useState(null)


    const inputHandler = (e) => {
        setSearch(e.target.value)
    }


    const [data, setData] = useState([])
    const [title, setTitle] = useState([])
    const [asal, setaAsal] = useState([])
    const [pencipta, setPencipta] = useState([])
    // const { search } = props.match.params
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/LaguDaerah/?title=${search}`)
            .then((response) => {
                console.log(response.data)
                setTitle(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/LaguDaerah/?asal=${search}`)
            .then((response) => {
                console.log(response.data)
                setaAsal(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/LaguDaerah/?pencipta=${search}`)
            .then((response) => {
                console.log(response.data)
                setPencipta(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })


        axios.get(`http://localhost:5000/api/LaguDaerah`)
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [search])
    console.log(search)
    console.log('LandingPage')

    

    return (
        <div>
            <Navbar />

            <center><img src={logo} alt="logo" className="logo"/></center>
            <div className="container pt-5">

                <form className="form-inline w-100 my-lg-0">
                                <div className="form-group w-100 input-group has-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cari lagu daerah disini..."
                                        value={search}
                                        onChange={inputHandler}
                                        style={{ borderRadius: "30px", fontSize: "15px", padding: "20px", paddingLeft: "40px", width: "700px" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                    // onSubmit={<Link to="/result"></Link>}
                                    />
                                    {/* <Link to={`/${search}`}>
                                        <button type="submit" className="btn-search" style={{ backgroundColor: "white" }}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </Link> */}
                                </div>
                            </form>


                <div className="row pt-4 separator-sep">
                    <div className="col-12">
                        <div className="box">
                        <div>
                            {search ? (
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {title.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <a href={`${e.link}`}>
                                                    <div className="card">
                                                        {/* <img className="card-img" src={asset} /> */}
                                                        <div className="card-content">
                                                            <h1 className="card-header1" style={{ textAlign: "center" }} >{e.title}</h1>
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.pencipta}</h1>
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.asal}</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {asal.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <a href={`${e.link}`}>
                                                    <div className="card">
                                                        {/* <img className="card-img" src={asset} /> */}
                                                        <div className="card-content">
                                                            <h1 className="card-header1" style={{ textAlign: "center" }} >{e.title}</h1>
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.pencipta}</h1>
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.asal}</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                    {pencipta.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <a href={`${e.link}`}>  
                                                    <div className="card">
                                                        {/* <img className="card-img" src={asset} /> */}
                                                        <div className="card-content">
                                                            <h1 className="card-header1" style={{ textAlign: "center" }} >{e.title}</h1>
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.pencipta}</h1>
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.asal}</h1>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    ))}</div>
                            ) : null

                            }

                        </div>
                    </div>
                    </div>
                </div> 
            </div>
            <img src={corner} alt="corner" className="corner"/>
        </div>
    )
}

export default LandingPage
