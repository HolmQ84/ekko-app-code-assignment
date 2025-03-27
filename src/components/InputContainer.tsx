import React, { useState } from "react";
import { UserProps } from "../models/users";

const InputContainer: React.FC<UserProps> = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleAddUser = () => {
        if (name.trim() && email.trim()) {
            onAdd!({ name: name, email: email })
            setName("");
            setEmail("");
        } else {
            alert("Alle felter skal være udfyldt.")
        }
    }

    return (
        <div style={styles.inputContainer}>
            <p style={styles.addUserText}>
                Tilføj bruger
            </p>
            <div style={styles.inputElement}>
                <label style={{ color: '#201E28'}}>Navn</label>
                <input
                    required
                    id='name'
                    type="text"
                    placeholder="Indtast navn..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.createInput}
                />
            </div>
            <div style={styles.inputElement}>
                <label style={{ color: '#201E28'}}>Email</label>
                <input
                    required
                    id='email'
                    type="email"
                    placeholder="Indtast email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.createInput}
                />
            </div>
            <button 
                onClick={() => handleAddUser()} 
                style={styles.addButton}
            >
                Tilføj Bruger
            </button>
        </div>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    addUserText: {
        color: '#9F0C5F',
        fontWeight: 700,
        fontSize: '1.3em',
        textAlign: 'left'
    },
    inputContainer: {
        flex: 0.4,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
        padding: '10px 20px 60px 20px',
        gap: 20
    },
    inputElement: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "flex-start",
        width: '100%',
        gap: 10
    },
    createInput: {
        width: "calc(100% - 30px)",
        maxWidth: '960px',
        padding: 15,
        paddingLeft: 10,
        fontSize: 'medium',
        border: "1px solid #ccc",
        borderRadius: 8
    },
    addButton: {
        padding: 12,
        border: "none",
        fontWeight: 700,
        fontSize: 'medium',
        backgroundColor: "#9F0C5F",
        color: "white",
        borderRadius: "20px",
        cursor: "pointer",
        marginTop: 20
    }
  };

export default InputContainer;