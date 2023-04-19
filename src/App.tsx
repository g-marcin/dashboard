import React,{useState} from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Sidebaritem from "./components/Sidebaritem";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card"
import Chart from "./components/Chart";
import Cleanchart from "./components/Cleanchart";
import Article from "./components/Article";
import "./style.css";
import Button from "./components/Button";
import Task from "./components/Task";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAdd, faCheckSquare, faCoffee, faSearch,faUser,faHourglassEnd, faFolderMinus, faSquare, faSquarePollHorizontal, faCalendarDay, faCommentDots, faGear, faPowerOff, faAngleDown, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import articles from "./mocks/articles";
import Submenu from "./components/Submenu";
import { Link } from "react-router-dom";
import { Router } from "react-router";
  

const App = () => {
  library.add(fab, faCheckSquare, faCoffee, faSearch,faAdd, faUser, faHourglassEnd,faFolderMinus,faSquarePollHorizontal, faCalendarDay, faCommentDots, faGear, faPowerOff,faAngleDown, faDotCircle)
  const[submenuToggle, setSubmenuToggle] = useState(false);
  const isSubmenuVisible=submenuToggle?"block":"none";

  return (
    <div className="wrapper__Outside">
      <Sidebar>
      <Sidebaritem icon={faHourglassEnd}wrapperClass={"logo__Sidebar"} iconClass={"outline__Bluecircle push-left"} ><span className="push">Todo list </span> </Sidebaritem>
        <Sidebaritem icon={faFolderMinus}>Your Folder <button style={{"background":"#323435" , "color":"#898a8b"}} onClick={()=>{setSubmenuToggle(!submenuToggle)}} className="push"> <FontAwesomeIcon icon={faAngleDown}/></button></Sidebaritem>
        <Submenu >
          {submenuToggle && <div>
            
           
            <Sidebaritem icon={faDotCircle}>War article</Sidebaritem>
            <Sidebaritem icon={faDotCircle}>Political articles</Sidebaritem>
            <Sidebaritem icon={faDotCircle}>Care articles</Sidebaritem>
            <Sidebaritem icon={faDotCircle}>Health articles</Sidebaritem>
           
          </div>}
        </Submenu>
        <Sidebaritem icon={faSquarePollHorizontal}>All your tasks</Sidebaritem>
        <Sidebaritem icon={faCalendarDay}>Calendar</Sidebaritem>
        <Sidebaritem icon={faCommentDots}>Message</Sidebaritem>
        <div className="push-down">
        <Sidebaritem icon={faGear}>Settings</Sidebaritem>
        <Sidebaritem icon={faPowerOff}>Logout</Sidebaritem>
        </div>
        


      </Sidebar>
      <div className="wrapper__Main">
      <Header>
      <Searchbar style={{"height":"28px"} } placeholder="Search Anything..." />
      <div className="wrapper__HeaderButtons push">
      <Button iconName={"search"} />
      <Button iconName={"plus"} />
      <Button iconName={"user"} />
      </div>
      
      
      </Header>
      <Main>
        <Card className={"card__Tasktable"} title={"Unfinished work list"} description={"Tick the work you have completed and let your friends know  "}>
        
        <table className="table__Tasktable">
          <tr><Task /></tr>
          <tr><Task/></tr>
          <tr><Task/></tr>
        </table>

        
       
        </Card>
        <Card className={"card__Timemanagement"} title={"Time management"} description={"manage your progress reports using graphs to make it easier"}>
        
        <Chart/>
        
       
       
        
        </Card>
        <Card className={"card__Timeline"} title={"Article design timeline"} description={"Manage your tasks and time in just one page"}>
        
        <Cleanchart/>
        
        </Card>
        <Card className={"card__Articles"} title={"Articles in folders"} description={"The progress of the article you are working on      "}>
        <div className="wrapper__Articles">
        {articles.map((article)=>{
          return <Article title={article.title} content={article.content} image={article.image} progress={article.progress} />
        })}
        </div>
        </Card>
      </Main>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if(!container){
  throw new Error("no container")
}
const root = createRoot(container);
root.render(<App />);
