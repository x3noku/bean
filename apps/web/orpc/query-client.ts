import { QueryCache, QueryClient } from '@tanstack/react-query';

export const createQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                // With SSR, we usually want to set some default staleTime
                // above 0 to avoid refetching immediately on the client
                staleTime: 30 * 1000,
            },
        },
        queryCache: new QueryCache({
            // onError: error => {
            //     toast.error(`Error: ${error.message}`, {
            //         action: {
            //             label: 'retry',
            //             onClick: () => {
            //                 queryClient.invalidateQueries();
            //             },
            //         },
            //     });
            // },
        }),
    });
