import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
margin:1rem;
`

const TeamDiv = styled.div`
margin:1rem;
`

export default function Team(props){
    return(
        <MainDiv>
            {props.team.map((teamm) => (
                <TeamDiv>
                    <p>{teamm.name}</p>
                    <p>{teamm.role}</p>
                    <p>{teamm.email}</p>
                </TeamDiv>
            ))}
        </MainDiv>
    )
}