import styled from 'styled-components';
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    flex: 1 0 auto;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: flex-start;
`;

export const ListItem = styled.li`
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid #4b59f7;
    }
`;

export const CommentItem = styled.li`

`
export const Header = styled.h1`
    margin-bottom: 18px;
    font-size: 18px;
    text-align: start;
    width: 80%;
    margin-bottom: 1rem;
    color: #242424;
`;
export const Link = styled.a`
    text-decoration: none;
    padding: 0.5rem 1rem;
    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
        cursor: pointer;
    }
`;

export const Paragraph = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
`;

export const CContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    flex: 1 0 auto;
    display:flex;
    flex-direction:column;
    justify-content:center
`;