import { AccountModel } from "../models/AccountModel.js";


export const getAllUsers = async (req, res, next) => {
    try {
        const accounts = await AccountModel.find();
        for (let i = 0; i < accounts.length; i++) {
            accounts[i].password = "";
        }
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const createAccount = async (req, res, next) => {
    try {
        const newUser = req.body;

        newUser.email = newUser.email.trim();
        const email = newUser.email;

        newUser.username = newUser.username.trim();
        const username = newUser.username;

        newUser.password = newUser.password.trim();
        const password = newUser.password;

        newUser.phoneNumber = newUser.phoneNumber.trim();

        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (regex.test(email)) {
            const checkEmail = await AccountModel.findOne({ email: email })
            if (checkEmail) {
                return res.status(500).json({ detail: "Email đã tồn tại!" });
            }
        } else {
            return res.status(500).json({ detail: "Vui lòng nhập email hợp lệ!" });
        }

        const checkUser = await AccountModel.findOne({ username: username })
        if (checkUser) {
            return res.status(500).json({ detail: "Username đã tồn tại!" });
        }

        if (password.length < 6) {
            return res.status(500).json({ detail: "Mật khẩu phải có ít nhất 6 kí tự!" });
        }

        const account = new AccountModel(newUser);
        await account.save();
        res.status(200).json({
            status_code: 200,
            detail: "Đăng ký thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Đăng ký không thành công!" });
    }
}
