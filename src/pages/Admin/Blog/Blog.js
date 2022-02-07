import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import Modal from "../../../components/Modal";
import queryString from "query-string";
import { getPostsApi } from "../../../api/post";
import Pagination from "../../../components/Pagination";
import PostList from "../../../components/Admin/Blog/PostList";
import AddEditFormPost from "../../../components/Admin/Blog/AddEditPostForm";

import "./Blog.scss";

function Blog(props){
    const { location, history } = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null)
    const [post, setPost] = useState(null)
    const [reloadPosts, setReloadPosts] = useState(false)
    const { page = 1 } = queryString.parse(location.search);

    //Obetener valores de parametros
    //console.log(location)
    //console.log(queryString.parse(location.search).page)

    useEffect(() => {
        getPostsApi(12, page)
            .then(response => {
                if(response?.code !== 200){
                    notification.warning({
                        message: response.message
                    })
                } else {
                    setPost(response.posts)
                }
            })
            .catch(() => {
                notification.error({
                    message: "Error del servidor"
                })
            })
            setReloadPosts(false)
    }, [page, reloadPosts])

    const addPost = () => {
        setIsVisibleModal(true)
        setModalTitle("Creando nuevo Post")
        setModalContent(
            <AddEditFormPost 
                setIsVisibleModal={setIsVisibleModal}
                setReloadPosts={setReloadPosts}
                post={null}
            />)
    }

    const editPost = post => {
        setIsVisibleModal(true)
        setModalTitle("Editar Post")
        setModalContent(
            <AddEditFormPost 
            setIsVisibleModal={setIsVisibleModal}
            setReloadPosts={setReloadPosts}
            post={post}
        />)
    }

    if(!post){
        return null;
    }

    return (
        <div className="blog">
            <div className="blog__add-post">
                <Button type="primary" onClick={addPost}>
                    Nuevo post
                </Button>
            </div>

            <PostList 
                setReloadPosts={setReloadPosts}
                post={post}
                editPost={editPost}
            />
            <Pagination 
                posts={post}
                location={location}
                history={history}
            />

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width="50%"
            >
                {modalContent}
            </Modal>
        </div>
    )
}

export default withRouter(Blog)