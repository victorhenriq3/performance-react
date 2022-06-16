import dynamic from 'next/dynamic';
import {memo, useState} from 'react';
import { AddProductToListWishProps } from './AddProductToWishList';
// import { AddProductToListWish } from './AddProductToWishList';
const AddProductToListWish = dynamic<AddProductToListWishProps>(() => {
    return import('./AddProductToWishList').then(mod => mod.AddProductToListWish)
}, {
    loading: () => <span>Carregando...</span>
})

interface ProductItemProps{
    product: {
        id: number
        price: number
        title: string
    }
    onAddToWishList: (id: number) => void
}

//shallow compare

function ProductItemComponent({product, onAddToWishList}: ProductItemProps){
    const [isAddingToWishList, setIsAddingToWishList] = useState(false);
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
            <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
           
           {isAddingToWishList && (
                <AddProductToListWish 
                onAddToListWish={() => onAddToWishList(product.id)}
                onRequestClose={() => setIsAddingToWishList(false)}
            />
           )}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})