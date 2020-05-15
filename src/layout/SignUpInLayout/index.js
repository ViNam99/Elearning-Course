import React from 'react'
import HeaderReference from '../HeaderReference'

const SignUpInLayout = (props) => {    
    return (
        <>
            <HeaderReference/>
            {props.children}
        </>
    )
}

export default SignUpInLayout
