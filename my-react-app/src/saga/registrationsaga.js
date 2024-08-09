import { call, put, takeLeading } from "redux-saga/effects";
import { registrationService } from "../service/registrationservice";
import { UserError, UserRequest, UserSuc } from "../slice/registration";

export function* abc(data)
{
    try
    {
    let p = yield call(registrationService,data.payload);

    yield put(UserSuc(p.data));
    }
    catch(error)
    {
        yield put(UserError(error));
    }

}

export function* watcherRegistration()
{
    yield takeLeading(UserRequest().type,abc);

}