import { ErrorBoundary } from "react-error-boundary";
import MyErrorComponent from "./components/common/MyErrorComponent";
import MyRouter from "./MyRouter";

function App() {
  return (
    <ErrorBoundary fallback={<MyErrorComponent />}>
      <MyRouter />
    </ErrorBoundary>
  );
}

export default App;
