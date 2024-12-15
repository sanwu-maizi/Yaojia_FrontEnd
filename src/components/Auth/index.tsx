import { Navigate } from "react-router-dom";
import { getStore } from "../../utils/store";

interface Props {
  children: React.ReactElement;
}
export const AuthGuard = ({ children }: Props) => {
  const store = getStore();
  const isAuthenticated = store.token !== null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};