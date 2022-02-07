import React from "react";
import { Link } from "react-router-dom";
import { List, Button, Modal, notification } from "antd";
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePostApi } from "../../../../api/post";

import "./PostList.scss";

const { confirm } = Modal;

export default function PostList(props){
    const { post, setReloadPosts, editPost } = props;

    const deletePost = post => {
        const accesToken = getAccessTokenApi();      

        confirm({
            title: "Eliminando póst",
            content: `Estas seguro de eliminar el post ${post.title}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk(){
                deletePostApi(accesToken, post._id)
                    .then(response => {
                        if(response.code === 200){
                            notification.success({
                                message: response.message
                            })
                        } else {
                            notification.warning({
                                message: response.message
                            })
                        }
                        setReloadPosts(true)
                    })
                    .catch(err => {
                        notification.error({
                            message: "Error del servidor"
                        })
                    })
            }
        })
    }

    return (
        <div className="post-list">
            <List 
                dataSource={post.docs}
                renderItem={post => <Post post={post} deletePost={deletePost} setReloadPost={setReloadPosts} editPost={editPost}/>}
            />
        </div>
    )
}

function Post(props){
    const { post, deletePost, editPost } = props;
    return (
        <List.Item
            actions={[
                <Link to={`/blog/${post.url}`} target={"_blank"}>
                    <Button 
                        type="primary" >
                        Ojo
                    </Button>
                </Link>,
                <Button 
                    onClick={() => editPost(post)}
                    type="primary" >
                        Editar
                 </Button>,
                 <Button 
                    onClick={() => deletePost(post)}
                    type="danger" >
                    Eliminar
                </Button>
            ]}
        >
            <List.Item.Meta title={post.title}></List.Item.Meta>
        </List.Item>
    )
}