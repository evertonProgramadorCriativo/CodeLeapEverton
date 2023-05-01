import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;



export const Content = styled.div`

  width: 100%;
  
  background-color: white;
  border:solid 1px black;
  max-width: 800px;
  position: relative;
  border-radius: 5px;
`;

export const MedioContent = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
 position: relative;
  background-color: #fff;
  max-width: 700px;
  padding: 20px;
  border-radius: 5px;
`;

export const SmallContent = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: start;
  color:#fff;
  width: 100%;
  position: relative;

  background-color: #7695EC;
  max-width: 800px;
  padding: 20px;
  border-radius: 5px;
`;


export const MainLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #FFF;
`;
export const SubLabel = styled.label`
   font-size: 16px;
   margin-right:36rem;
  font-weight: 600;
  color: #676767;
`;
export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
