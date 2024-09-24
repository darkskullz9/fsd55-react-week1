const User = () => {

    const info = {
        myName: 'Steven',
        myLastName: 'Prauca',
        myAge: 21,
    };

    const isAuthenticated = true;

    return (
        <>
            {isAuthenticated ? (
                <h1>Welcome {info.myName}!</h1>
            ) : (
                <h1>Please sign In</h1>
            )}
        </>
    );
}

export default User;