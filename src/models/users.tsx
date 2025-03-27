export interface User {
    id?: number;
    name: string;
    email: string;
}

export interface UserProps {
    onAdd?: (user: User) => void;
    onUpdate?: (user: User) => void;
    onDelete?: (id: number) => void;
    users?: User[]
}