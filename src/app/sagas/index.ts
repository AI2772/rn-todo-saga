import { all, call } from "redux-saga/effects";
import todoSaga from "./todoSaga";


function* rootSaga() {
    yield all([
        call(todoSaga)
    ]);
}

export default rootSaga