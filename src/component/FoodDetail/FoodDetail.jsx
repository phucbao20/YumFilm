import React, { useEffect, useState } from 'react';
import { Container, Col, Form, Row, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { createFood, deleteFood, selectById, updateFood } from '../../service/FoodService';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { selectById } from '../../service/FoodService';

export const FoodDetail = () => {

    const [foodName, setFoodName] = useState("")
    const [foodPrice, setFoodPrice] = useState(0)
    const [descriptionFood, setDescriptionFood] = useState("")
    const [quantityFood, setQuantityFood] = useState("")
    const [imageFood, setImageFood] = useState("")

    const { id } = new useParams()
    const navigate = new useNavigate()
    console.log(id);

    useEffect(() => {
        if (id) {
            selectById(id)
                .then(response => {
                    console.log(response.data);
                    setFoodName(response.data.foodName)
                    setFoodPrice(response.data.price)
                    setDescriptionFood(response.data.description)
                    setQuantityFood(response.data.quantity)
                    setImageFood(response.data.foodImage)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [id])
    function handleUpdate() {
        let food = {
            "foodId": id,
            "foodName": foodName,
            "price": foodPrice,
            "quantity": quantityFood,
            "description": descriptionFood,
            "foodImage": imageFood
        }
        updateFood(food)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    function handleAdd() {
        let food = {
            "foodName": foodName,
            "price": foodPrice,
            "quantity": quantityFood,
            "description": descriptionFood,
            "foodImage": imageFood
        }
        console.log(food);
        createFood(food)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    notify("Thêm thành công", null, "success")
                    navigate("/manager")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    function handleDelete() {
        // deleteFood(foodId)
        deleteFood(id)
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    notify("Xóa thành công", null, "success")
                    navigate("/manager")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    function notify(title, message, sticker) {
        Swal.fire({
            "title": title,
            text: message,
            icon: sticker
        });
    }

    return (
        <div className='min-h-[50rem] bg-slate-950'>
            <div className="container border min-h-[50rem]">
                <Form className='row text-white' >
                    <Row className='float-start col-5 row'>
                        <div className='col-12'>
                            <h1 className="details__title">{foodName}</h1>
                        </div>
                        <div className="col-12 ">
                            <div className="card__cover mb-5">
                                <div className="card__cover">
                                    <img src={`../src/image/${imageFood}`} alt="" />
                                    <input name="showImage" src='' hidden />
                                </div>
                            </div>
                            <Button>
                                <input type="file" className="price__btn" name="fileImage" />
                            </Button>
                        </div>
                    </Row>
                    <Row className='col-7'>
                        <Row className="mb-3 pt-5 ">
                            <FormGroup as={Col} controlId="formGridEmail">
                                <FormLabel>Tên món ăn</FormLabel>
                                <FormControl
                                    value={foodName}
                                    type="text"
                                    placeholder="Tên món"
                                    onChange={(e) => setFoodName(e.target.value)}

                                />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Giá</FormLabel>
                                <FormControl value={foodPrice} type="text" placeholder="giá" onChange={(e) => setFoodPrice(e.target.value)} />
                            </FormGroup>
                        </Row>

                        <FormGroup as={Col} controlId="formGridPassword">
                            <FormLabel>Mô tả</FormLabel>
                            <FormControl value={descriptionFood} as="textarea" type="text" placeholder="Mô tả" style={{ height: '100px' }}
                                onChange={(e) => setDescriptionFood(e.target.value)} />
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridPassword">
                            <FormLabel>Số lượng</FormLabel>
                            <FormControl value={quantityFood} type="text" placeholder="Số lượng" onChange={(e) => setQuantityFood(e.target.value)} />
                        </FormGroup>
                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <Button variant="primary" onClick={handleAdd}>Thêm</Button>
                            </div>
                            <div className="col-lg-3">
                                <Button variant="primary" onClick={handleUpdate}>Sửa</Button>
                            </div>
                            <div className="col-lg-3">
                                <Button variant="primary" onClick={handleDelete}>Xóa</Button>
                            </div>
                            <div className="col-lg-3">
                                <Button variant="primary" onClick={() => navigate("/")}>Quay lại</Button>
                            </div>
                        </div>
                    </Row>
                </Form>
            </div>
        </div>
    );
};