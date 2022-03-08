import styled from 'styled-components';

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const ListProjects = styled.ul`
        margin: 10px;
        padding: 0;
        list-style: none;
        display: flex;

`

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

`

export const Item = styled.div`
        width: 220px;
        height: 150px;
        border-radius: 20px;
        border: 1px solid grey;
        margin: 10px 20px ;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: relative;
        transition: all .8s ease-in-out;
        cursor: pointer;
        &:hover{
            background-color:rgb(3, 51, 51) ;}

`
export const ImgProject = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
z-index: 1;

`

export const ItemTitle = styled.h3`
position: absolute;
font-size: 20px;

`