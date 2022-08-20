import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    facts: [
        'Прообразом Чубакки стал пес режиссера.',
        'Актерам разрешили подобрать любимый цвет для своих световых мечей.',
        'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.',
        'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.',
        'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок.'
    ],
    factsNumber: 5
}


const factsSlice = createSlice({
    name: 'facts',
    initialState: initialState,
    reducers: {
        changeFactsNumber(state, action) {
            state.factsNumber = action.payload
        }
    }
})

export const { showFacts, changeFactsNumber } = factsSlice.actions

export default factsSlice.reducer