import { useState, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LoadingSpinner from './components/LoadingSpinner';
import UserProvider from './context/userContext/user.context';
import CartProvider from './context/cartContext/cart.context';

function App({ children }) {
  const [queryClient] = useState(() =>
    new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
          retry: 1,
        },
      },
    })
  );

  return (
    
    <QueryClientProvider client={queryClient}>
      {}
      <UserProvider>
        <CartProvider>
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster position="bottom-right" />
        </CartProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;