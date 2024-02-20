import Router from '@/navigation/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactDOM from 'react-dom/client';

import dayjs from 'dayjs';
import React from 'react';

import './index.css';

dayjs.extend(relativeTime);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
);
