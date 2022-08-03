import React from "react";
import { MdAccessTime } from 'react-icons/md'
import { OrderBox, OrderInfo } from './style'

export default function OrderActive(props) {

    return (
        <OrderBox>
            <MdAccessTime style={{ fontSize: 50 }} color={'#ffffff'}/>
            <OrderInfo>
                <h4><b>Pedido em andamento</b></h4>
                <p>{props.restaurantName}</p>
                <span>Subtotal: R$ {props.totalPrice.toFixed(2).toString().replace(".", ",")}</span>
            </OrderInfo>
        </OrderBox>

    )
}