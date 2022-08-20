import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: 'Бирюлин Юрий Олегович',
    age: 24,
    avatar: 0,
    photos: [
        'https://cspromogame.ru//storage/upload_images/avatars/3958.jpg',
        'https://cspromogame.ru//storage/upload_images/avatars/3981.jpg'
    ]
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        download(state, action) {
            if (action.payload !== '')
                state.photos.unshift(action.payload)
            else alert('Неправильный ввод')
        },
        changeAvatar(state, action) {
            state.avatar = action.payload-0
        }
    }
})

export const { download, changeAvatar } = profileSlice.actions

export default profileSlice.reducer