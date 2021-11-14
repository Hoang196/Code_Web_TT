import App from "../App";
import paths from "./paths";
import FirstDirect from "../app/FirstDirect/FirstDirect";
import infoContainer from "../app/information/infoContainer";
import loginContainer from "../app/login/LoginContainer";
import DefaultContainer from "../app/DefaultContainer";
import registerContainer from "../app/register/RegisterContainer";
import UserListContainer from "../app/userList/UserListContainer";
import HomePageContainer from "../app/homepage/HomePageContainer";
import ProductContainer from "../app/products/ProductContainer";
import UserPageContainer from "../app/user/UserPageContainer";
import PostDetailContainer from "../app/postDetail/PostDetailContainer";
import UserRecordContainer from "../app/userRecord/UserRecordContainer";


const router = [
    {
        component: App,
        routes: [
            {
                path: paths.FirstDirect,
                exact: true,
                component: FirstDirect
            },
            {
                path: paths.Information,
                exact: true,
                component: infoContainer
            },
            {
                path: paths.Login,
                exact: true,
                component: loginContainer
            },
            {
                path: paths.HomePage,
                component: DefaultContainer,
                routes: [
                    {
                        path: paths.HomePage,
                        exact: true,
                        component: HomePageContainer
                    },
                    {
                        path: paths.Product,
                        exact: true,
                        component: ProductContainer
                    },
                    {
                        path: paths.UserPage(),
                        exact: true,
                        component: UserPageContainer
                    },
                    {
                        path: paths.UserInfo,
                        exact: true,
                        component: UserRecordContainer
                    },
                    {
                        path: paths.PostDetail(),
                        exact: true,
                        component: PostDetailContainer
                    },
                    {
                        path: paths.UserList,
                        exact: true,
                        component: UserListContainer
                    },
                ]
            },
            {
                path: paths.Register,
                exact: true,
                component: registerContainer
            }
        ]
    }
]
export default router