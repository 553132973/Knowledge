import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM,DATA_ITEM ,BOOK_ITEM} from './actionTypes'

export const changeInputAction = (value) =>({
        type:CHANGE_INPUT,
        value
})

export const addItemAction = () =>({
    type:ADD_ITEM
})

export const deleteItem = (index) =>({
    type:DELETE_ITEM,
    index
})

export const dataAction = (data) =>({
    type:DATA_ITEM,
    data
})

export const bookListAction = (list) =>({
    type:BOOK_ITEM,
    list
})