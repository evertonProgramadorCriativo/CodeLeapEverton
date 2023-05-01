import React, { useState } from "react";
import Input from "../../Input";
 
import SmallButton from "../../../components/SmallButton";
import * as C from "./styles";
import { Link } from "react-router-dom";
 

const Metodos = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
    
  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    
  
  };

  return (
    <C.Container>
       
      <C.Content>
      <C.SmallContent>
           <C.MainLabel>CodeLeap Network</C.MainLabel>

            </C.SmallContent>
      <C.MedioContent>
      <C.SubLabel>Title</C.SubLabel>
        <Input
          type="text"
          placeholder="Hello World"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
          <C.SubLabel>Content</C.SubLabel>
        <Input
          type="text"
          placeholder="Contetn here"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        
        <C.labelError>{error}</C.labelError>
        <SmallButton Text="Create"   />
        </C.MedioContent>
      </C.Content>
    </C.Container>
  );
};

export default Metodos;
