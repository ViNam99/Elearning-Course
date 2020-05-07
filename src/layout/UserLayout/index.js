import React from 'react'
import Header from '../HeaderDefault'

const UserLayout = (props) => {
    return (
        <>  
            <Header/>
            {props.children}
        </>
    )
}

export default UserLayout
