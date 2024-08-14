import {all} from 'redux-saga/effects'
import { watcherLogin, watcherRegistration } from './registrationsaga'
import { watcherAccount } from './accountsaga'
import { watcherTutorial } from './tutorialsaga'



export function* rootSaga()
{
    yield all([watcherRegistration(),watcherLogin(),watcherAccount(),watcherTutorial()])
}