import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrTask } from "react-icons/gr";
import { MdOutlineLiveTv } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { MdReportGmailerrorred } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import "../../../Admin/AdminCSS.css";
import "../../../Admin/AdminJS.js";
const StudentSidebar = () => {
  return (
    <>
      <Link to="/student" className="brand-link">
        <img
          src="/assets/img/logo/logo.png"
          alt="AdminLTE Logo"
          className="logo-super-admin"
        />
      </Link>

      {/* <!-- Sidebar --> */}
      <div className="sidebar">
        <div className="user-panel mt-2 pb-2 mb-3 d-flex">
          <div className="image image-user">
            <img
              src="/assets/backend-img/user.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link to="#" className="d-block">
              Abc Student
            </Link>
            <Link to="#" className="d-block">
              IIT
            </Link>
          </div>
        </div>
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview">
              <Link to="/student/studentDashboard" className="nav-link">
                <MdOutlineDashboard className=" nav-icon" />
                <p>Dashboard Module</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/student/myProfile" className="nav-link">
                <FaUserCircle className=" nav-icon" />

                <p>My Profile</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/student/myCourses" className="nav-link">
                <FaGraduationCap className=" nav-icon" />
                <p>My Courses</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/student/study" className="nav-link">
                <FaBookOpenReader className=" nav-icon" />
                <p>
                  Study Material
                  {/* <span className="right badge badge-danger">New</span> */}
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/student/practice_questions" className="nav-link">
                <IoIosPaper className=" nav-icon" />
                <p>
                  Practice Questions
                  {/* <i className="fas fa-angle-left right"></i>
                  <span className="badge badge-info right">6</span> */}
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <FaPeopleGroup className=" nav-icon" />
                <p>
                  Doubt Discussion
                  {/* <i className="right fas fa-angle-left"></i> */}
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/student/assignments" className="nav-link">
                <GrTask className=" nav-icon" />
                <p>Assignments</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="" className="nav-link">
                <MdOutlineLiveTv className=" nav-icon" />
                <p>Live Class</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/student/tests" className="nav-link">
                <SiSpeedtest className=" nav-icon" />
                <p>Tests</p>
              </Link>
            </li>

            <li className="nav-item has-treeview">
              <Link to="" className="nav-link">
                <MdReportGmailerrorred className=" nav-icon" />

                <p>Results/Reports</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <!-- /.sidebar-menu --> */}
      </div>
      {/* <!-- /.sidebar --> */}
    </>
  );
};

export default StudentSidebar;
