import React, { useState } from "react";
import { User, UserProps } from "../models/users";

const ListContainer: React.FC<UserProps> = ({users, onUpdate, onDelete}) => {

    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");

    const handleEditUser = (user: User) => {
        setEditingUserId(user.id!);
        setEditName(user.name);
        setEditEmail(user.email);
    };

    const handleCancelEdit = () => {
        setEditingUserId(null);
    };

    const handleUpdateUser = (id: number) => {
        onUpdate!({id: id, name: editName, email: editEmail })
        setEditingUserId(null);
        setEditEmail("");
        setEditName("");
    }

    return (
        <div style={styles.listContainer}>
            <div style={styles.list}>
            {users!.length > 0 
            ? 
            users!.map(user => (
                <div key={user.id} style={styles.userBox}>
                {editingUserId === user.id ? (
                    // Edit user in list
                    <div style={styles.editContainer}>
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            style={{ ...styles.editInput, ...styles.listName }}
                        />
                        <input
                            type="email"
                            value={editEmail}
                            onChange={(e) => setEditEmail(e.target.value)}
                            style={{ ...styles.editInput, ...styles.listMail }}
                        />
                        <div style={styles.buttonGroup}>
                            <button 
                                onClick={() => handleCancelEdit()} 
                                style={styles.invertedButton}
                            >
                                Annullér
                            </button>
                            <button 
                                onClick={() => handleUpdateUser(user.id!)} 
                                style={styles.button}
                            >
                                Gem
                            </button>
                        </div>
                    
                    </div>
                ) : (
                    // Show user in list
                    <>
                        <div>
                            <p style={styles.listName}>{user.name}</p>
                            <p style={styles.listMail}>{user.email}</p>
                        </div>
                        <div style={styles.buttonGroup}>
                            <button onClick={() => handleEditUser(user)} style={styles.invertedButton}>Rediger</button>
                            <button onClick={() => onDelete!(user.id!)} style={styles.invertedButton}>Slet</button>
                        </div>
                    </>
                )}
                </div>
            )) 
            : 
            <p style={styles.noUsersText}>Ingen brugere tilføjet endnu...</p>
            }
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    listContainer: {
        flex: 0.6,
        overflow: 'hidden',
        borderBottom: '1px solid #ccc',
        padding: 10
    },
    list: {
        overflowY: 'auto',
        height: '100%',
    },
    userBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        border: '1px solid #ccc',
        borderRadius: 10,
        textAlign: 'left',
        padding: '10px 20px'
    },
    editContainer: {
        width: '100%',
    },
    listName: {
        color: '#9F0C5F',
        fontWeight: 700,
        marginBottom: 5
    },
    listMail: {
        color: '#747088',
        marginTop: 5
    },
    noUsersText: {
        paddingTop: 50,
        color: '#747088'
    },
    editInput: {
        width: "calc(100% - 20px)",
        maxWidth: '960px',
        padding: 10,
        paddingLeft: 10,
        margin: '5px 0px 10px 0px',
        fontSize: 'medium',
        border: "1px solid #ccc",
        borderRadius: 8
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right',
        gap: 15
    },
    button: {
        padding: "5px 15px",
        border: "1px solid #E2E2E2",
        backgroundColor: "#9F0C5F",
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: 'medium',
        borderRadius: "15px",
        cursor: "pointer",
        minWidth: 80
    },
    invertedButton: {
        padding: "5px 15px",
        border: "1px solid #E2E2E2",
        backgroundColor: "#FFFFFF",
        color: "#9F0C5F",
        fontWeight: 700,
        fontSize: 'medium',
        borderRadius: "15px",
        cursor: "pointer",
        minWidth: 80
    },
  };

export default ListContainer;