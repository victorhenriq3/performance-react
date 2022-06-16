
export interface AddProductToListWishProps{
    onAddToListWish: () => void
    onRequestClose: () => void
}

export function AddProductToListWish({onAddToListWish, onRequestClose}: AddProductToListWishProps){
    return (
        <span>
            Deseja adicionar aos favoritos?
            <button onClick={onAddToListWish}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}