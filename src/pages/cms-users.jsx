// src/pages/cms-users.js

import Sidebar from '../components/cms-users/Sidebar-users';
import TableUsers from '../components/cms-users/TableUsers';
import FormsUsers from '../components/cms-users/FormsUsers';
import { EditProvider } from "../components/cms-global/cms-edit";

import "../styles/Awards.css";

export default function Users() {
    return (
        <div className="cms-awards">
          <Sidebar/>
          <main className="col-2 col-10 px-md-4 main-content">
          <h1 className='awards-title'>USERS</h1>
            <FormsUsers />
            <EditProvider>
            <TableUsers />
            </EditProvider>
          </main>
        </div>
      );
}