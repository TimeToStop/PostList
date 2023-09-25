import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import { postsAPI } from "./api/PostAPI";
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";

const store = configureStore({
    reducer: {
        [postsAPI.reducerPath]: postsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsAPI.middleware)
});

const router = createBrowserRouter([
    {
        path: "/posts/:id",
        element: <PostPage />
    },
    {
        path: "/posts",
        element: <MainPage />
    },
    {
        path: "/*",
        element: <Navigate to="/posts" />
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
