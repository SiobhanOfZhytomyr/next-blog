import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import type { AppProps /*, AppContext */ } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
