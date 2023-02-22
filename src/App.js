import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import './App.css';
import { addUsers,deleteUsers,updateName } from './features/Users';


function App() {
  const dispatch = useDispatch()
  const userList = useSelector((state)=> state.users.value)
  let [name,setName] = useState("")
  let [username,setUsername] = useState("")
  let [newusername,setNewUsername] = useState("")


  console.log(userList)
  return (
    <div className="App">
    {" "}
    <div className="addUser">
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value) }
      />
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value) }

      />
      <button
      onClick={()=> dispatch(addUsers({id:(userList.length) +1,name,username}))}
      >
        {" "}
        Add User
      </button>
    </div>
    <div className="displayUsers">
      {userList.map((user) => {
        return (
          <div>
            <h1> {user.name}</h1>
            <h1> {user.username}</h1>
            <input
              type="text"
              placeholder="New Username..."
              onChange={(e) => setNewUsername(e.target.value) }

            />
            <button
                  onClick={()=> dispatch(updateName({id:user.id,username:newusername}))}

            >
              {" "}
              Update Username
            </button>
            <button
             onClick={()=> dispatch(deleteUsers(user.id))}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default App;
