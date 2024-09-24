const User = ({name, lastName, image}) => {

    const isAuthenticated = true;

    return (
        <>
            {isAuthenticated ? (
                <>
                    <h1>{name} {lastName}</h1>
                    <img src = {image}/>
                </>
            ) : (
                <h1>Please sign In</h1>
            )}
        </>
    );
}

export default User;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            