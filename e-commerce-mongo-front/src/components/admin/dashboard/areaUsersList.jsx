async function getUsers() {
    try {
        const res = await fetch('https://apigenerator.dronahq.com/api/9PdhJb9d/users');


        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return []; // Ensure UI does not break
    }
}

export default async function AreaUsersList() {
    const users = await getUsers(); // Fetch users

    return (
        <div className="card">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <img src={user.avatar} width="40" height="40" style={{ borderRadius: "50%" }} alt={`${user.name}'s Avatar`} />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === "admin" ? (
                                        <span className="badge bg-pink-500 text-white">{user.role}</span>
                                    ) : (
                                        <span className="badge bg-green-500 text-white">{user.role}</span>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                                No users found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
