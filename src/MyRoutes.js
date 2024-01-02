import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from './context/AuthContext';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Reset from "./screens/Reset";
import Profile from "./screens/Profile.js";
import Drive from "./screens/Drive";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./screens/UpdateProfile";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/reset' element={<Reset />} />
                    <Route path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }>
                    </Route>
                    <Route path="/drive"
                        element={
                            <PrivateRoute>
                                <Drive />
                            </PrivateRoute>
                        }>
                    </Route>
                    <Route path="/update-profile"
                        element={
                            <PrivateRoute>
                                <UpdateProfile />
                            </PrivateRoute>
                        }>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
