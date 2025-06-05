'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ORPCContext, orpc, queryClient } from '~/orpc';

const ORPCProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ORPCContext.Provider value={orpc}>{children}</ORPCContext.Provider>
            {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
    );
};
ORPCProvider.displayName = 'ORPCProvider';

export { ORPCProvider };
