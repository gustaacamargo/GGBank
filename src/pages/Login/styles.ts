import styled from 'styled-components';

export const Header = styled.div`
    height: 60px;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    color: #FFF;
    padding: 0 30px;
`;