import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Components
import Layout from './components/layout/Layout'; 
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

// Contexts
import UserProvider from './context/userContext/user.context';
import CartProvider from './context/cartContext/cart.context';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'product/:id', element: <SingleProduct /> },
        { path: 'cart', element: <Cart /> },
      ],
    },
    {
      path: '/auth',
      element: <Layout />, // No protection for auth routes
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Register /> },
      ],
    },
  ]);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={routes} />
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster position="bottom-right" />
        </CartProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;