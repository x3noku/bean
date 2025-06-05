import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import { createORPCReactQueryUtils } from '@orpc/react-query';
import type { RouterUtils } from '@orpc/react-query';
import type { RouterClient } from '@orpc/server';
import { createContext, use } from 'react';
import { env } from '~/env';
import type { appRouter } from '../../server/src/routers';
import { createQueryClient } from './query-client';

type ORPCReactUtils = RouterUtils<RouterClient<typeof appRouter>>;

export const queryClient = createQueryClient();

export const link = new RPCLink({
    url: `${env.NEXT_PUBLIC_SERVER_URL}/rpc`,
    fetch(url, options) {
        return fetch(url, {
            ...options,
            credentials: 'include',
        });
    },
});

export const client: RouterClient<typeof appRouter> = createORPCClient(link);

export const orpc = createORPCReactQueryUtils(client);

export const ORPCContext = createContext<ORPCReactUtils | undefined>(undefined);

export const useORPC = (): ORPCReactUtils => {
    const orpc = use(ORPCContext);

    if (!orpc) {
        throw new Error('ORPCContext is not set up properly');
    }

    return orpc;
};
