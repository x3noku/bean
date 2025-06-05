import { NuqsAdapter } from 'nuqs/adapters/next/app';

const NuqsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <NuqsAdapter>{children}</NuqsAdapter>;
};
NuqsProvider.displayName = 'NuqsProvider';

export { NuqsProvider };
