import { NuqsProvider } from './NuqsProvider';
import { ORPCProvider } from './ORPCProvider';
import { RwdotProvider } from './RwdotProvider';
import { ToastProvider } from './ToastProvider';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <ToastProvider>
            <RwdotProvider>
                <NuqsProvider>
                    <ORPCProvider>{children}</ORPCProvider>
                </NuqsProvider>
            </RwdotProvider>
        </ToastProvider>
    );
};
Providers.displayName = 'Providers';

export { Providers };
