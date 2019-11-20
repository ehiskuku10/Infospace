import Core from './Core'
import { reducer as formReducer } from 'redux-form'

export const reducers = {
    Core: Core,
    form: formReducer
};