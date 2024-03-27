import Router from '@/navigation/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactDOM from 'react-dom/client';

import dayjs from 'dayjs';
import React from 'react';

import { Toaster } from '@/components/ui/toaster';

import './index.css';

dayjs.extend(relativeTime);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
			<Toaster />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
);
