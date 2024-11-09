interface TTProps {
    price: number
    discount:number
    isInstallment: boolean
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: TTProps):number => {
    const discountedPrice = price * (1 - discount / 100);

    if (isInstallment) {
        return discountedPrice / months;
    }

    return discountedPrice;
};


const tprops: TTProps = { price: 100000, discount: 25, isInstallment: true, months: 12 }

const price = totalPrice(tprops);
console.log(price); 