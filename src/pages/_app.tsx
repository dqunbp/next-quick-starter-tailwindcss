import "../styles/globals.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import LanguageProvider from "lib/language-provider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
