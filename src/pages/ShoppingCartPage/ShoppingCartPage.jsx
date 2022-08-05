import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/BASE_URL'
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css';
import GlobalContext from '../../context/GlobalContext';
import useRequestData from '../../hooks/useRequestData';
import Swal from 'sweetalert2';
import axios from 'axios'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import { goToFeed } from '../../routes/Coordinator';
import { useProtectedPage } from '../../hooks/UseProtectPage';
import { 
    RestaurantContainer, 
    HeaderContainer, 
    ContainerMain, 
    ProductImage, 
    Description, 
    DivPayment, 
    Container,
    ButtonTwo, 
    CartItems, 
    EmptyCar,
    DivValue, 
    Shipping,
    BoxImage,
    Button,
    BoxProducts
} from './styled'

export default function ShoppingCartPage() {
    useProtectedPage();
    const navigate = useNavigate();
    const { states, setters } = useContext(GlobalContext);
    const [valueToPay, setValueToPay] = useState(0)
    const [value, setValue] = useState('')
    const [control, setControl] = useState(0)
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const getAddress = useRequestData([], `${BASE_URL}/profile/address`)
    const getActiveOrder = useRequestData({}, `${BASE_URL}/active-order`)
    const details = states.cartShop.length > 0 && states?.cartShop[0].RestaurantDetails    
    const timeOrder = details && details.deliveryTime * 60 * 1000
    const address = getAddress.data.address
    const notify = () => toast.error('Removido')

    const handleChange = (ev) => {
        setValue(ev.target.value)
    }

    useEffect(() => {
        onChangeValue()
    }, [states.cartShop])


    const onChangeValue = () => {
        let priceToPay = 0
        states.cartShop.forEach((prod) => {
            priceToPay += Number(prod.Price) * prod.Quantity
        })
        const valueShipping = renderCart === false ? 0 : details.shipping
        setValueToPay(priceToPay + valueShipping)
    }

    const removeItemCart = (itemToRemove) => {
        const index = states.cartShop.findIndex((i) => i.ProductId === itemToRemove.ProductId)
        const newCart = [...states.cartShop]

        if (newCart[index].Quantity === 1) {
            newCart.splice(index, 1)
        } else {
            newCart[index].Quantity -= 1
        }
        notify()
        setters.setCartShop(newCart)
        setCount(count - 1)
    }

    const confirmPayment = (id) => {
        const productPay = []

        states.cartShop && states.cartShop.forEach((prod) => {
            productPay.push({
                id: prod.ProductId,
                quantity:  parseInt(prod.Quantity) ? parseInt(prod.Quantity) : 1 ,

            })
        })

        const body = {
            products: productPay,
            paymentMethod: value
        }
        if (getActiveOrder.data.order === null) {
            axios
                .post(`${BASE_URL}/restaurants/${id}/order`, body,
                    {
                        headers: {
                            auth: localStorage.getItem('token')
                        }
                    })
                .then((response) => {
                    setLoading(true)
                    setControl(control + 1)
                    setTimeout(() => {
                        setLoading(false)
                        setControl(control + 1)
                    }, timeOrder)
                    if (response.status === 200)
                        setters.setCartShop([])
                        goToFeed(navigate)
                })
            setControl(control + 1)
            let timeInterval
            Swal.fire({
                title: 'Processando pagamento',
                html: 'Pagamento processado em <b></b> segundos',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlCointainer().querySelector('b')
                    timeInterval = setInterval(() => {
                        b.textcContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timeInterval)
                }
            })
                .then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {

                    }
                    states.setCartShop([])
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Já existe um pedido em andamento!'
            })
        }

    }

    const renderCart = states.cartShop && states.cartShop.map((prod, i) => {

        return (
            <Container key={i}>
                <BoxImage>
                    <ProductImage src={prod.Image} alt={'foto do produto'} />
                </BoxImage>
                <Description>
                    <h4>{prod.Name}</h4>
                    <p>{prod.Description}</p>
                    <h3>R$ {prod.Price.toFixed(2).toString().replace(".", ",")}</h3>
                </Description>
                <CartItems>
                    <p>{prod.Quantity}</p>
                </CartItems>
                <div>
                    <Button onClick={() => removeItemCart(prod)}>Remover</Button>
                </div>
            </Container>
        )
    })

    return (
        <>
            <Header button={true} text="Meu Carrinho" />
            <ContainerMain margin={getActiveOrder.data.order ? true : false}>
                <ToastContainer position='top-center' autoClose={1000} />
                <HeaderContainer>
                    <div>
                        <p>Endereço de entrega</p>
                        {getAddress.loading ? <h4><b>Carregando...</b></h4> : 
                        <h4><b>{address && address.street}, {address && address.number}</b></h4>
                    }
                    </div>
                </HeaderContainer>

                {states.cartShop.length > 0 ? (
                    <>
                        <RestaurantContainer>
                            <h4>{details && details.name}</h4>
                            <p>{details && details.address}</p>
                            <p>{details && details.deliveryTime - 10} - {details && details.deliveryTime} min</p>
                        </RestaurantContainer>

                        <BoxProducts>
                            {renderCart}
                        </BoxProducts>

                        <Shipping>
                            <h4>Frete R${details && details.shipping},00</h4>
                        </Shipping>
                        <DivValue>
                            <h4>SUBTOTAL</h4>
                            <h3>R$ {valueToPay.toFixed(2).toString().replace(".", ",")}</h3>
                        </DivValue>
                        <DivPayment>
                            <p>Forma de pagamento</p>
                            <hr />
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                                    <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                                </RadioGroup>
                            </FormControl>
                        </DivPayment>

                        <div>
                            {
                                renderCart === false ?

                                    <ButtonTwo
                                        variant='contained'
                                        type='submit'
                                    >
                                        <b>Confirmar</b>
                                    </ButtonTwo>
                                    :
                                    <ButtonTwo
                                        variant='contained'
                                        type='submit'
                                        onClick={() => confirmPayment(details.id)}
                                    >
                                        <b>Confirmar</b>
                                    </ButtonTwo>
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <p>Carrinho vazio</p>
                        <EmptyCar>
                            <Shipping>
                                <h4>Frete R$ 0,00</h4>
                            </Shipping>
                            <DivValue>
                                <h4>SUBTOTAL</h4>
                                <h3>R$ 00,00</h3>
                            </DivValue>
                            <DivPayment>
                                <p>Forma de pagamento</p>
                                <hr />
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                                        <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                                    </RadioGroup>
                                </FormControl>
                            </DivPayment>
                        </EmptyCar>
                    </>
                )}
                <Footer />
            </ContainerMain>
        </>
    )
}