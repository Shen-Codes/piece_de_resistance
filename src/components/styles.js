import styled from 'styled-components';
export const StyledCard = styled.div `
   display: block;
   background-color: #fff;
   border-radius: 3px;
   box-shadow: 0 1px 1px #e6e6e6, 0 2px 4px #e6e6e6;
   transition: 0.5s all;
   width: 100%;
   height: 100%;
   overflow: hidden;

   &:hover {
      transform: translate3d(0, -5px, 0);
      box-shadow: 0 1px 1px #ccc, 0 4px 4px #ccc;
   }
`;
