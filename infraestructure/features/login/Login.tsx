import Link from 'next/link'
import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Button from '@/infraestructure/components/Button/Button';
import Input, { InputVersion } from '@/infraestructure/components/Input/Input';


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

  const router = useRouter()

  const handleLogin =()=>{
    router.push('/dashboard')
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
            onClick={handleLogin}
          />
        </LoginForm>
    </LoginWrapper>
  )
}