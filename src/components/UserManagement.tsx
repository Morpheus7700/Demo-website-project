
"use client";

import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const UserManagement = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/api/admin/users');
                if (res.ok) {
                    const data = await res.json();
                    setUsers(data);
                }
            } catch (error) {
                console.error("Failed to fetch users", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleRoleChange = async (userId: number, newRole: string) => {
        try {
            const res = await fetch('/api/admin/users/update-role', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, role: newRole }),
            });

            if (res.ok) {
                setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
            } else {
                const data = await res.json();
                alert(data.message || 'Failed to update role');
            }
        } catch (err) {
            alert('An error occurred. Please try again.');
        }
    };

    if (loading) {
        return <div>Loading users...</div>;
    }

    return (
        <div className="shadow-lg rounded-lg overflow-x-auto border border-gray-200 bg-white mt-16">
            <h2 className="text-2xl font-bold text-gray-900 p-6">User Management</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                                <select 
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                    className="p-1 border rounded"
                                >
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
