export const AddComma = (price: string) => {
const formatingPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
return formatingPrice
}

