
const basePath = '/u'

const paths = {
    FirstDirect: '/',
    Information: '/info',
    HomePage: `${basePath}`,
    Product: `${basePath}/products`,
    UserPage: (userId) => `${basePath}/user_page/${userId || ":userId"}`,
    UserInfo: `${basePath}/myInfo`,
    UserList: `${basePath}/user_list`,
    Login: '/login',
    Register: '/register',
    PostDetail: (postId) => `${basePath}/post_detail/${postId || ":postId"}`
}
export default paths