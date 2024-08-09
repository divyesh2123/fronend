import {all} from 'redux-saga/effects'
import { watcherRegistration } from './registrationsaga'



export function* rootSaga()
{
    yield all([watcherRegistration()])
}