import React, { useEffect, useState } from "react";
import { Switch, List, Avatar, Button, Modal as ModalAntd, notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import Modal from "../../../Modal/Modal";
import AddUserForm from "../AddUserForm/AddUserForm";
import EditUserForm from "../EditUserForm";
import { getAvatarApi, activateUserApi, deleteUserApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import './ListUsers.scss';

const { confirm } = ModalAntd;

export default function ListUsers(props){
    const { usersActive, usersInactive, setReloadUsers } = props;
    const [viewUsersActives, setViewUsersActives] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
    const addUserModal = () => {
        setIsVisibleModal(true)
        setModalTitle("Creando Nuevo Usuario")
        setModalContent(
            <AddUserForm setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} />
        )
    }

    return (
        <div className="list-users">
            <div className="list-users__header">
                <div className="list-users__header-switch">
                    <Switch
                        defaultChecked
                        onChange={() => setViewUsersActives(!viewUsersActives)} />
                    <span>
                        {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                    </span>
                </div>
                <Button type="primary" onClick={addUserModal}>
                    Nuevo Usuario
                </Button>
            </div>            

            {viewUsersActives ? 
            <UsersActive 
                usersActive = {usersActive} 
                setModalTitle = {setModalTitle} 
                setModalContent = {setModalContent}
                setIsVisibleModal = {setIsVisibleModal}
                setReloadUsers = {setReloadUsers}/> : 
            <UsersInactive usersInactive = {usersInactive}
                setReloadUsers = {setReloadUsers}/>}

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}>
                
                {modalContent}
            </Modal>
        </div>
    )
}

function UsersActive(props){
    const { usersActive, setIsVisibleModal, setModalTitle, setModalContent, setReloadUsers } = props;
    const editUser = user => {
        setIsVisibleModal(true)
        setModalTitle(`Editar ${user.name ? user.name : "..."} 
            ${user.lastname ? user.lastname : "..."}`)
        setModalContent(
            <EditUserForm user={user} setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} />
        )
    }
    
    return(
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => <UserActive user={user} editUser={editUser} setReloadUsers={setReloadUsers}/>}
        />
    )
}

function UserActive(props){
    const {user, editUser, setReloadUsers} = props
    const[avatar, setAvatar] = useState(null)
    
    useEffect(() => {
        if(user.avatar){
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response)
            })
        } else {
            setAvatar(null)
        }
    }, [user])

    const desactivateUser = () => {
        const accesToken = getAccessTokenApi()

        activateUserApi(accesToken, user._id, false)
            .then( response => {
                notification.success({
                    message: response
                });
                setReloadUsers(true)
            })
            .catch(err => {
                notification.error({
                    message: err
                })
            })
    }

    const showDeleteConfirm = () => {
        const accesToken = getAccessTokenApi()

        confirm({
            title: "Eliminando Usuario",
            content: `??Estas seguro que quieres eliminar a ${user.email}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteUserApi(accesToken, user._id)
                    .then(response => {
                        notification.success({
                            message: response
                        });
                        setReloadUsers(true);
                    })
                    .catch(err => {
                        notification.error({
                            message: err
                        })
                    })
            }
        })
    }

    return (
        <List.Item 
            actions={[
                <Button type="primary"
                onClick={() => editUser(user)}>
                    <EditOutlined /> Editar
                </Button>,

                <Button type="danger"
                onClick={desactivateUser}>
                    <CloseCircleOutlined /> Desactivar
                </Button>,

                <Button type="danger"
                onClick={showDeleteConfirm}>
                    <DeleteOutlined /> Borrar
                </Button>
            ]}
        >
            <List.Item.Meta 
                avatar={<Avatar src={avatar ? avatar : NoAvatar} />}  
                title={
                    `${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}`
                }
                description={user.email}  
            />
        </List.Item>
    )
}

function UsersInactive(props){
    const { usersInactive, setReloadUsers } = props;

    return(
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user => <UserInactive user={user} setReloadUsers={setReloadUsers} />}
        />
    )
}

function UserInactive(props){
    const { user, setReloadUsers } = props
    const[avatar, setAvatar] = useState(null)
    
    useEffect(() => {
        if(user.avatar){
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response)
            })
        } else {
            setAvatar(null)
        }
    }, [user])

    const showDeleteConfirm = () => {
        const accesToken = getAccessTokenApi()

        confirm({
            title: "Eliminando Usuario",
            content: `??Estas seguro que quieres eliminar a ${user.email}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteUserApi(accesToken, user._id)
                    .then(response => {
                        notification.success({
                            message: response
                        });
                        setReloadUsers(true);
                    })
                    .catch(err => {
                        notification.error({
                            message: err
                        })
                    })
            }
        })
    }

    const activateUser = () => {
        const accesToken = getAccessTokenApi()

        activateUserApi(accesToken, user._id, true)
            .then( response => {
                notification.success({
                    message: response
                });
                setReloadUsers(true)
            })
            .catch(err => {
                notification.error({
                    message: err
                })
            })
    }

    return (
        <List.Item 
            actions={[
                <Button type="primary"
                onClick={activateUser}>
                    <CheckCircleOutlined /> Activar
                </Button>,

                <Button type="danger"
                onClick={showDeleteConfirm}>
                    <DeleteOutlined /> Borrar
                </Button>
            ]}
        >
            <List.Item.Meta 
                avatar={<Avatar src={avatar ? avatar : NoAvatar} />}  
                title={
                    `${user.name ? user.name : '...'}
                        ${user.lastname ? user.lastname : '...'}`
                }
                description={user.email}  
            />
        </List.Item>
    )
}