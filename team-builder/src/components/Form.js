import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
display:flex;
justify-content: center;
margin: 2rem;
`

const NameDiv = styled.div`
margin: 1rem;
`

const EmailDiv = styled.div`
margin: 1rem;
`

const RoleDIv = styled.div`
margin:1rem;
`

const Buttn = styled.button`
margin:1rem;
`

//
export default function Form(props){
    const {update, value, submit} = props

    const onChange = e => {
        const{name, value} = e.target
        update(name,value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return(
        <MainDiv>

            <NameDiv>
                <form onSubmit={onSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input 
                    id='name'
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    value={value.name}
                    onChange={onChange}/>
                </form>
            </NameDiv>

            <EmailDiv>
                <form onSubmit={onSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input 
                    id='email'
                    type='text'
                    placeholder='Enter your email'
                    name='email'
                    value={value.email}
                    onChange={onChange}/>
                </form>
            </EmailDiv>

            <RoleDIv>
                <form onSubmit={onSubmit}>
                    <label htmlFor='role'>Role</label>
                    <select id='role' name='role' value={value.role} onChange={onChange}>
                        <option value=''>Select a role</option>
                        <option value='o1'>option 1</option>
                        <option value='o2'>option 2</option>
                    </select> 
                    <Buttn>Submit</Buttn>                
                </form>
            </RoleDIv>
        </MainDiv>
    )
}