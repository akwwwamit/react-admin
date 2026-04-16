import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import LoginLayout from "./layouts/LoginLayout";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";

import ProductLists from "./pages/products/ProductLists";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";

import RecipesList from "./pages/recipes/RecipesList";
import AddRecipes from "./pages/recipes/AddRecipes";
import EditRecipes from "./pages/recipes/EditRecipes";

import UsersList from "./pages/users/UsersList";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";

import PostsList from "./pages/posts/PostsList";
import AddPost from "./pages/posts/AddPost";
import EditPost from "./pages/posts/EditPost";

import CartList from "./pages/carts/CartList";

import CommentsList from "./pages/comments/CommentsList";
import AddComment from "./pages/comments/AddComment";
import ManageComment from "./pages/comments/ManageComment";

import TodosList from "./pages/todos/TodosList";
import AddTodo from "./pages/todos/AddTodo";
import EditTodo from "./pages/todos/EditTodo";

import QuotesList from "./pages/quotes/QuotesList";
import AuthGuard from "./guard/AuthGuard";


function App() {
  return (
    <><ToastContainer />
    <Routes>
      {/* Auth Pages */}
      <Route element={<LoginLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Admin Pages */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AuthGuard />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<ProductLists />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products/:id" element={<EditProduct />} />

          <Route path="recipes" element={<RecipesList />} />
          <Route path="add-recipe" element={<AddRecipes />} />
          <Route path="recipes/:id" element={<EditRecipes />} />

          <Route path="users" element={<UsersList />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="user/:id" element={<EditUser />} />

          <Route path="posts" element={<PostsList />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="post/:id" element={<EditPost />} />

          <Route path="carts" element={<CartList />} />

          <Route path="comments" element={<CommentsList />} />
          <Route path="comments/:id" element={<AddComment />} />
          <Route path="add-comment" element={<AddComment />} />
          <Route path="comment/:id" element={<ManageComment />} />
          

          <Route path="todos" element={<TodosList />} />
          <Route path="add-todo" element={<AddTodo />} />
          <Route path="todo/:id" element={<EditTodo />} />

          <Route path="quotes" element={<QuotesList />} />
        </Route>
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Login />} />
    </Routes></>

    
  );
}

export default App;