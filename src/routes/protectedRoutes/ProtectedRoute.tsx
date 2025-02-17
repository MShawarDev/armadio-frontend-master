import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { IRootState } from '../../redux/store';
import Main from '../../layout/Main';

const ProtectedRoute: FC = () => {
  const authToken: string | undefined = useSelector(
    (state: IRootState) => state?.Auth?.accessToken,
  );

  const isLoggedIn: boolean = !!authToken ? true : false;

  const location = useLocation();

  // Redirect them to the / page, but save the current location they were
  return isLoggedIn ? (
    <Main />
  ) : (
    <Navigate to={'/'} replace state={{ location }} />
  );
};

export default ProtectedRoute;
