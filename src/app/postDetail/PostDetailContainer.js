import React, { useContext, useEffect, useState } from "react";
import "./PostDetailContainer.scss";
import { getPostDataByPostId } from "../../services/api/PostData";
import { getUserDataById } from "../../services/api/getUserData";
import PostDetailAdmin from "./component/PostDetailAdmin";
import { Image } from "antd";
import AppContext from "../../AppContext";
import Chat from "../chat/Chat";
import { Button } from "antd";
import UserListPostModal from "../user/component/UserListPostModal";


const PostDetailContainer = (props) => {
    const { user } = useContext(AppContext)
    const [postData, setPostData] = useState([]);
    const [userData, setUserData] = useState({});
    const [additionalImages, setAdditionalImages] = useState([]);
    const [mainImage, setMainImage] = useState();
    const postId = props.match.params.postId;
    const [ownerId, setOwnerId] = useState();
    const [newPostModalVisible, setNewPostModalVisible] = useState(false)
    const [modalUserPostVisible, setModalUserPostVisible] = useState(false)
    const name = userData.username

    useEffect(() => {
        getPostData()
    }, [])

    const getPostData = async () => {
        const { data, success } = await getPostDataByPostId(postId)
        if (success) {
            setPostData(data.data);
            setMainImage(data.data.main_image);
            setAdditionalImages(data.data.image_url)
            setOwnerId(data.data.owner_id)
            getUserData(data.data.owner_id)
        }
    }

    const getUserData = async (id) => {
        const { data, success } = await getUserDataById(id)
        if (success) {
            setUserData(data.data)
        }
    }

    const showAdditionalImages = () => {
        return additionalImages.map(imgURL => {
            return (
                <Image className={"image-post-list"} src={imgURL} alt="" style={{ maxHeight: "200px" }} />
            )
        })
    }



    return (
        <div className={"post__detail container-fluid"}>
            <div className={"row"} style={{ display: "flex", justifyContent: "center" }}>
                <div className={"post__detail-content col-xl-10 col-11"}>

                    <div className="post__detail--header">
                        <div className="post__detail--header-title">
                            <h1 className="post__detail--header-title-1">
                                Chi ti???t s???n ph???m
                                <Button className={"post__detail--header-btn"} type="primary" htmlType="submit" size="default"
                                    onClick={() => { setModalUserPostVisible(true) }} style={user._id === userData._id ? { display: "none" } : { display: "inline-block" }}
                                >
                                    ?????i s???n ph???m
                                </Button>
                            </h1>
                            <div className="post__detail--header-title-2">
                                Th??ng tin t??? ch??? s???n ph???m ????ng t???i tr???c ti???p
                            </div>
                        </div>
                    </div>

                    <div className={"post__detail-container row"} >
                        <div className={"post__detail-container-image col-xl-6 col-12"}>
                            <div style={{ marginBottom: "10px" }}>
                                <strong>???nh ch??nh s???n ph???m:</strong>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <Image src={mainImage} alt="???nh" className={"post__detail-container-image-img"} />
                            </div>
                            {additionalImages.length >= 1 ? <div style={{ marginBottom: "10px" }}> <strong>???nh m?? t??? s???n ph???m:</strong> </div> : <div />}
                            <div style={{ marginBottom: "10px" }}> {showAdditionalImages()} </div>
                        </div>
                        <div className={"post__detail-container-content col-xl-6 col-12"}>
                            <div className={"post__detail-container-product col-xl-12 col-12"} >
                                <h5 style={{ paddingLeft: "15px" }}>Th??ng tin s???n ph???m</h5>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">T??n s???n ph???m:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.name}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Ph??n lo???i:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.type}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">H??ng s???n xu???t:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.brand}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">S??? l?????ng:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.amount}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">M?? t???:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.description}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Tr???ng th??i:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.status}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Ng??y ????ng:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.createdAt}</div>
                                </div>
                            </div>

                            <div className={"post__detail-form col-xl-12 col-12"} >
                                <div className={"post__detail-form-userInfo"}>
                                    <h5>Th??ng tin ch??? s???n ph???m</h5>
                                    <div>
                                        <span>T??n: </span> <span>{userData.username}</span>
                                    </div>
                                    <div>
                                        <span>Ng??y sinh: </span> <span>{userData.dateOfBirth}</span>
                                    </div>
                                    <div>
                                        <span>Gi???i t??nh: </span> <span>{userData.gender}</span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span>M?? ID: </span> <span>{userData._id}</span>
                                    </div>
                                    <div>
                                        <span>Email: </span> <span>{userData.email}</span>
                                    </div>
                                    <div>
                                        <span>S??? ??i???n tho???i: </span> <span>{userData.phoneNumber}</span>
                                    </div>

                                    <Chat name={name} visible={newPostModalVisible} setVisible={setNewPostModalVisible} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={"post__detail-trade mt-2 col-12"} >
                    {user._id === ownerId ? <PostDetailAdmin ownerPost={ownerId} props={props} /> : <div></div>}
                </div>
            </div>

            <UserListPostModal postIdTo={postId} userIdTo={userData._id} visible={modalUserPostVisible} setVisible={setModalUserPostVisible} user={user} />

        </div>
    )
}
export default PostDetailContainer