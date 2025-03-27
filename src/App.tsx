import React, { useState } from 'react';
import { User } from './models/users';

import ListContainer from './components/ListContainer';
import InputContainer from './components/InputContainer';

import './App.css';

function App() {
    const [users, setUsers] = useState<User[]>([
        { 
            id: Date.now() + 1, 
            name: 'Martin Holmqvist', 
            email: 'martin@test.dk' 
        },
        { 
            id: Date.now() + 2, 
            name: 'Peter Christensen', 
            email: 'peter@test.dk' 
        },
        { 
            id: Date.now() + 3, 
            name: 'Henning Petersen', 
            email: 'henning@test.dk' 
        }
    ]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check for mobile view.

    const handleAddUser = (user: User) => {
        if (user.name.trim() && user.email.trim()) {
            let newUser = {
                id: Date.now(),
                name: user.name,
                email: user.email
            }
            setUsers([ ...users, newUser ]);
        } else {
            alert("Alle felter skal være udfyldt.")
        }
    };
  
    const handleRemoveUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };
        
    const handleUpdateUser = (updateUser: User) => {
        const userList = [...users];
        const currentUser = userList.find(x => x.id === updateUser.id);
        if (currentUser) {
            currentUser.name = updateUser.name
            currentUser.email = updateUser.email
        }
        setUsers(userList);
    };

    return (
        <div className="App">
            <div style={styles.container}>
                <ListContainer 
                    users={users} 
                    onUpdate={handleUpdateUser} 
                    onDelete={handleRemoveUser} 
                />
                <InputContainer 
                    onAdd={handleAddUser} 
                />
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        fontFamily: 'Open Sans, sans-serif',
        margin: '0 auto',
        justifyContent: 'center',
        maxWidth: '1000px'
    }
}
export default App;
