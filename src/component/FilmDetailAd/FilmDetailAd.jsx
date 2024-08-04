import React, { useEffect, useState } from 'react'
import "./FilmDetail.scss"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaPlus } from "react-icons/fa";
import { getAllFilmDetailAdmin } from '../../service/ADminFilmService'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container } from 'react-bootstrap';
import { selectAll } from '../../service/FoodService';

const FilmDetail = () => {
    const [fimlDetailAdmin, setFilmDetailAdmin] = useState([]);
    // const history = useHistory();
    const navigate = new useNavigate()
    useEffect(() => {
        getAllFilmDetailAdmin()
            .then((response) => {
                console.log(response.data);
                setFilmDetailAdmin(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const [listFood, setListFood] = useState([])

    useEffect(() => {
        selectAll()
            .then(resp => {
                console.log(resp.data);
                setListFood(resp.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(listFood);

    const handleClick = (filmId) => {
        navigate(`/film/${filmId}`)
        // history.push(`/film/${filmId}`);
        // history.push(`/film`);
    };

    return (
        <body className='w-full h-full bg-slate-800'>
            <section className='Film w-full h-full pt-3'>
                <div className=' container'>
                    <h1 className=' text-white'>Danh Sách Phim</h1>
                </div>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="container mb-2"
                >
                    <Tab eventKey="home" title="Phim">
                        <Link to={"/film/create"} className='Button-Create'>
                            <FaPlus className='Plus' />
                            Thêm phim
                        </Link>
                        <div className='Film-Content container flex flex-wrap justify-between py-3 w-full h-full gap-y-8'>
                            {
                                fimlDetailAdmin.map((film) =>
                                    <div className='Content-Left flex justify-end w-1/2 h-1/4 p-4'>
                                        <div className='Image-Left'>
                                            <img className='Image-Film rounded' src={`../src/image/${film.filmImage}`} alt="" />
                                        </div>
                                        <div className='ContentBody-Left mx-3 w-[400px]'>
                                            <div>
                                                <h3 className='TitleFilm'>{film.filmName}</h3>
                                                <div className='Icon flex *:mx-2 text-white'>
                                                    <p>{film.rate}</p>
                                                    <p>HD</p>
                                                    <p>{film.age}+  </p>
                                                </div>
                                                <div className='Genre py-2'>
                                                    <span className='GenreFilm text-white'>{film.filmType}</span>
                                                </div>
                                            </div>
                                            <div className='Mota py-2 pt-3 flex-1'>
                                                <div className='Description-Box w-full text-justify h-[170px]'>
                                                    {film.description}
                                                </div>
                                            </div>
                                            <button className='Button btn  text-white w-[150px] self-end' onClick={() => handleClick(film.filmId)}>Chỉnh Sửa</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Món ăn">

                        <Button className='float-end me-24' onClick={() => navigate(`/manager/food-detail`)}>Thêm đồ ăn</Button>
                        <Container>

                            <section className='flex flex-wrap gap-1'>
                                {
                                    listFood.map((value) =>
                                        <Card style={{ width: '18rem' }}>
                                            <div className='h-[15rem] w-full'>
                                                <CardImg variant="top" className='h-full w-full object-cover'
                                                 src={value.foodImage} 
                                                />
                                            </div>
                                            <CardBody>
                                                <CardTitle>{value.foodName}</CardTitle>
                                                <CardText thousandSeparator={true}>
                                                    {Math.ceil(value.price).toLocaleString() + " VND"}
                                                </CardText>
                                                <Button variant="primary" onClick={() => navigate(`/food-detail/${value.foodId}`)} >Sửa</Button>
                                            </CardBody>
                                        </Card>
                                    )
                                }

                            </section>
                        </Container>
                    </Tab>
                    <Tab eventKey="contact" title="Ghế">
                        Tab content for Contact
                    </Tab>
                </Tabs>

            </section>
        </body>
    )
}

export default FilmDetail