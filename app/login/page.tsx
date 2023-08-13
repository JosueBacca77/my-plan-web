import Link from 'next/link'
import styled from 'styled-components';
import Card from '../components/Card/Card';
import Input, { InputVersion } from '../components/Input/Input';
import { useState } from 'react';
import Button from '../components/Button/Button';


const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20vh;
`;

const LoginForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export default function Login() {

  const [user, setUser] = useState<string>('');

  const handleChangeUer =(value: string)=>{
    setUser(value);
  };

  const [password, setPassword] = useState<string>('');

  const handleChangePassword =(value: string)=>{
    setPassword(value);
  }

  return (
    <LoginWrapper>
        <LoginForm>
          <Input
            version={InputVersion.PRIMARY}
            placeholder='Usuario'
            onChange={handleChangeUer}
          />
          <Input
            version={InputVersion.PRIMARY}
            placeholder='Contraseña'
            onChange={handleChangePassword}
          />
          <Button
            text='Ingresar'
            onClick={()=>console.log('pressed')}
          />
        </LoginForm>
    </LoginWrapper>
  )
}