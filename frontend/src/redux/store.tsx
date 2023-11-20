import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // github: github,
  },
  middleware: [sagaMiddleware],
});
// sagaMiddleware.run(watchFetchData);

export default store;
