import {UserStore} from "../store/UserStore";
import {Routes,Navigate, Route} from "react-router-dom";
import {authRoutes,publicRoutes} from "../routes";
import store from "../store_redux/store";
import {MAIN_ROUTE} from "../utils/consts";

export const AppRouter = () => {
    const isAuth = UserStore(store=>store._isAuth);
    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({ path, Component }) => (

                    <Route key={path} path={path} element={<Component />} />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
        </Routes>
    );
};
