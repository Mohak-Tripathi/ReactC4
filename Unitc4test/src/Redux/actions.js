export const userStatus="STATUS"
export const orders="ORDERS"


export const addStatus=(data)=>{
    return {
        type:userStatus,
        payload:data

    }
}

export const ALLOrders=(data)=>{
    return {
        type:orders,
        payload:data
    }
}