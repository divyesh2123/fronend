import {all} from 'redux-saga/effects'
import { watcherLogin, watcherRegistration } from './registrationsaga'
import { watcherAccount } from './accountsaga'



export function* rootSaga()
{
    yield all([watcherRegistration(),watcherLogin(),watcherAccount()])
}