
import "./FirstDirect.scss"
import Footer from "../homepage/Footer"
import { Spring, animated } from 'react-spring'
import paths from "../../router/paths";
import { Input } from "antd";
const { Search } = Input;

const FirstDirect = (props) => {

    const onSearch = () => {
        window.location.href = paths.Login;
    }

    var counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 3000);

    return (
        <div>
            <div className="container-fluid basePage" >

                <div className="col-12 row" style={{ margin: "0" }}>
                    <div className="basePage__header--banner col-xl-4 col-12">
                        Đăng nhập tài khoản để bắt đầu trao đổi!
                    </div>
                    <div className="basePage__header--menu-list col-xl-7 col-12" >
                        <a href={"/login"} className="basePage__header--menu-list-item">Đăng nhập</a>
                        <a href={"/register"} className="basePage__header--menu-list-item">Đăng ký</a>
                        <a href={"/info"} className="basePage__header--menu-list-item">Tìm hiểu thêm</a>
                    </div>
                </div>

                <div className="basePage__header row" >
                    <div className="basePage__header--container col-12 col-xl-9 row">
                        <div className="basePage__header--title col-xl-2 col-3" >
                            <div className="basePage__header--title-logo"></div>
                        </div>

                        <div className="basePage__header--title-content col-xl-10 col-9" >
                            <Spring
                                loop
                                from={{ opacity: 0, color: '#000' }}
                                to={[
                                    { opacity: 1, color: 'red' },
                                    { opacity: 0, color: 'orange' },
                                ]}>
                                {styles => (
                                    <animated.div style={styles}>Trao đổi đồ cũ</animated.div>
                                )}
                            </Spring>
                            <Search className="basePage__header--search" enterButton="Tìm kiếm" placeholder="Tìm kiếm sản phẩm" allowClear
                                onSearch={() => onSearch()} size="large" />
                        </div>
                    </div>
                    <div className="basePage__header--navbar col-12">
                        <ul className="basePage__header--navbar-menu">
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Đồ điện tử</a>
                            </li>
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Đồ gia dụng</a>
                            </li>
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Phương tiện giao thông</a>
                            </li>
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Trang phục</a>
                            </li>
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Trang sức</a>
                            </li>
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Phụ kiện</a>
                            </li>
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Nhà ở - Phòng trọ</a>
                            </li>
                            <li className="basePage__header--navbar-menu-item">
                                <a href="/login" className="basePage__header--navbar-menu-item-link">Bất động sản</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="basePage__header--sliders col-xl-12 col-12">
                    <div className="basePage__header--sliders-1 col-xl-9 col-11 row">
                        <div className="basePage__header--slider col-xl-8 col-12">
                            <div className="basePage__header--slider-slides">
                                <input type="radio" name="radio-btn" id="radio1"></input>
                                <input type="radio" name="radio-btn" id="radio2"></input>
                                <input type="radio" name="radio-btn" id="radio3"></input>
                                <input type="radio" name="radio-btn" id="radio4"></input>

                                <div class="basePage__header--slider-slides-slide first">
                                    <div class="basePage__header--slider-slides-slide-1"></div>
                                </div>
                                <div class="basePage__header--slider-slides-slide">
                                    <div class="basePage__header--slider-slides-slide-2"></div>
                                </div>
                                <div class="basePage__header--slider-slides-slide">
                                    <div class="basePage__header--slider-slides-slide-3"></div>
                                </div>
                                <div class="basePage__header--slider-slides-slide">
                                    <div class="basePage__header--slider-slides-slide-4"></div>
                                </div>

                                <div class="basePage__header--slider-slides-navigation">
                                    <div class="basePage__header--slider-slides-navigation-btn1"></div>
                                    <div class="basePage__header--slider-slides-navigation-btn2"></div>
                                    <div class="basePage__header--slider-slides-navigation-btn3"></div>
                                    <div class="basePage__header--slider-slides-navigation-btn4"></div>
                                </div>
                            </div>
                        </div>
                        <div class="basePage__header--slider-image col-xl-4 col-12">
                            <div class="basePage__header--slider-image-1 col-12">
                                <div class="basePage__header--slider-image-1-img col-4"></div>
                                <div class="basePage__header--slider-image-1-title col-8">Điện thoại Iphone còn mới</div>
                            </div>
                            <div class="basePage__header--slider-image-2 col-xl-12">
                                <div class="basePage__header--slider-image-2-img col-4"></div>
                                <div class="basePage__header--slider-image-2-title col-8">Mô tô PKL Kawasaki còn bảo hành</div>
                            </div>
                            <div class="basePage__header--slider-image-3 col-12">
                                <div class="basePage__header--slider-image-3-img col-4"></div>
                                <div class="basePage__header--slider-image-3-title col-8">Giày jordan bản rep 1:1 mới mua</div>
                            </div>
                            <div class="basePage__header--slider-image-4 col-12">
                                <div class="basePage__header--slider-image-4-img col-4"></div>
                                <div class="basePage__header--slider-image-4-title col-8">Căn hộ cao cấp (Ảnh mô tả)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="basePage__container">
                    <div class="basePage__container--grid col-xl-9 col-11">
                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-2-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Laptop</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-1-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Bất động sản</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-3-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Phương tiện</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-4-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Trang phục</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-5-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Đồ gia dụng</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-6-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Đồ điện tử</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-7-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Trang sức</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-8-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Nhà ở</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-9-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Máy tính bảng</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-10-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Phụ kiện</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-11-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Máy tính bàn</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-12-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Máy in</div>
                        </div>
                    </div>
                </div>

                <div class="basePage__container">
                    <div class="basePage__container--grid2 col-xl-9 col-11">
                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-1-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">Tiết kiệm</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-2-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">An toàn</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-3-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">Bảo vệ môi trường</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-4-img"></div>
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">Hợp tác phát triển</div>
                        </div>
                    </div>
                </div>

                <div className="basePage__container">
                    <div className="basePage__container--footer col-xl-9 col-11">
                        <div className="basePage__container--footer-image1" onClick={() => onSearch()}></div>
                        <div className="basePage__container--footer-image2" onClick={() => onSearch()}></div>
                        <div className="basePage__container--footer-image3" onClick={() => onSearch()}></div>
                    </div>
                </div>
            </div>
            <div className="basePage__footer">
                <Footer />
            </div>
        </div>
    )
}
export default FirstDirect