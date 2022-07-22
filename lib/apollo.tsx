import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React, { PropsWithChildren } from 'react';


const GRAPHQL_ENDPOINT = 'http://127.0.0.1:8000/'

const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
    const client = new ApolloClient({
        uri: GRAPHQL_ENDPOINT,
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>
             {children}
            </ApolloProvider>

}

export default StrapiApolloProvider