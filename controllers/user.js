import { UserModel } from "../models/UserModel.js";


export const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const account = await UserModel.findOne({ _id: id });
        account.password = "";
        res.status(200).json(account);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}
export const editUserData = async (req, res, next) => {
    try {
        const newUser = req.body;
        const email = newUser.email.trim();
        const username = newUser.username.trim();
        const phoneNumber = newUser.phoneNumber.trim();
        const password = newUser.password.trim();
        const { _id, ...user } = newUser;
        const userUpdate = { ...user, email, username, password, phoneNumber }
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const checkUser = await UserModel.findOne({ _id: _id })

        if (regex.test(email)) {
            if (checkUser.email !== email) {
                const checkEmail = await UserModel.findOne({ email: email })
                if (checkEmail) {
                    return res.status(500).json({ detail: "Email đã tồn tại!" });
                }
            }
        } else {
            return res.status(500).json({ detail: "Vui lòng nhập email hợp lệ!" });
        }

        if (checkUser.username !== username) {
            const checkUserName = await UserModel.findOne({ username: username })
            if (checkUserName) {
                return res.status(500).json({ detail: "Username đã tồn tại!" });
            }
        }

        if (password.length < 6) {
            return res.status(500).json({ detail: "Mật khẩu phải có ít nhất 6 kí tự!" });
        }

        await UserModel.findByIdAndUpdate(_id, userUpdate)

        const UserAfter = await UserModel.findOne({ _id: _id })
        UserAfter.password = "";

        res.status(200).json({
            user: UserAfter,
            status_code: 200,
            detail: "Sửa thông tin thành công!"
        });

    } catch (err) {
        res.status(500).json({ detail: "Sửa thông tin không thành công!" });
    }
}
