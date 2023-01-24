const User = ({user, setUserPosts}) => {
    return (
        <div>
            <div>Id: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <button onClick={() => setUserPosts(user.id)}>click me</button>
            <hr/>
        </div>
    );
};

export {
    User
};