import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginLayout from "./layouts/LoginLayout";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import ProductLists from "./pages/products/ProductLists";
import RecipesList from "./pages/recipes/RecipesList";
import UsersList from "./pages/users/UsersList";
import PostsList from "./pages/posts/PostsList";
import CartList from "./pages/carts/CartList";
import CommentsList from "./pages/comments/CommentsList";
import TodosList from "./pages/todos/TodosList";
import QuotesList from "./pages/quotes/QuotesList";

function App() {
  return (
    <Routes>
      {/* Auth Pages */}
      <Route element={<LoginLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Admin Pages */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} /> {/* /admin -> dashboard */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="products" element={<ProductLists />} />
        <Route path="recipes" element={<RecipesList />} />
        <Route path="users" element={<UsersList />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="carts" element={<CartList />} />
        <Route path="comments" element={<CommentsList />} />
        <Route path="todos" element={<TodosList />} />
        <Route path="quotes" element={<QuotesList />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;