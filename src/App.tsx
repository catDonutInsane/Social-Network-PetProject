import './App.css';
import { AllUsersPage } from './components/AllUsersPage/AllUsersPage';
import { LogInForm } from './components/LogInForm/LogInForm';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { LeftMenu } from './components/LeftMenu/LeftMenu';
import { Chat } from './components/Chat/Chat';
import { UserPageById } from './components/UserProfileInfo/UserPageById/UserPageById';
import { Routes, Route } from 'react-router-dom';
const App:React.FC=()=> {
 
  return (
    <div>
     <Header/>
     <div className='menu-content-wrapper'>
        <LeftMenu/>
    <Routes >
        <Route path='/' element={<Chat/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<LogInForm/>}/>
        <Route path='/alluser' element={<AllUsersPage/>}/>
        <Route path='/user/:id' element={<UserPageById/>}/>
    </Routes> 
        
      </div>
    </div>
  );
}

export default App;
