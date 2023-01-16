import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={()=> setShowModalCreateUser(true)}><FcPlus/> Add new</button>
        </div>
        <div className="table-user-container">table</div>
        <ModalCreateUser 
          setShow = {setShowModalCreateUser}
         show={showModalCreateUser} />
      </div>
    </div>
  );
};

export default ManageUser;
