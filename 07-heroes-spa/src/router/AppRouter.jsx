import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeoresRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>

                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}