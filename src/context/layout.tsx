import 'react-toastify/dist/ReactToastify.css';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Menu from '../components/Menu';
import Header from '../components/Header';
import { useRouter } from 'next/router';

interface IContext {
  setIsActiveToggleMenu?: any;
  isActiveToggleMenu?: boolean | undefined;
  handleChangeData?: any;
  data?: any;
  setData?: any;
  setEditAlunos?: any; 
  editAlunos?: object;
  setEditDisciplinas?: any; 
  editDisciplinas?: object
  setEditCursos?: any;
  editCursos?: object
}

export const Context = createContext<IContext>({});

type ComponentProps = {
  children: ReactNode;
};

export default function Layout({ children }: ComponentProps) {
  const router = useRouter();

  const [editAlunos, setEditAlunos] = useState<any>({
    [0]: {
      Matricula: '',
      Nome: '',
      Endereco: '',
      Cidade: '',
      CodCurso: '',
    },
  });

  const [editDisciplinas, setEditDisciplinas] = useState<any>({
    [0]: {
      CodCurso: '',
      CodDisciplina: '',
      Nome_Disciplina: '',
    },
  });

  const [editCursos, setEditCursos] = useState<any>({
    [0]: {
      CodCurso: '',
      Nome: '',
      CodDisc1: '',
      CodDisc2: '',
      CodDisc3: '',
    },
  });

  const [data, setData] = useState({});
  
  const handleChangeData = (data: any) => {
    setData((prevData) => ({
      ...prevData,
      [data.target.name]: data.target.value,
    }));
  };

  if (typeof window !== 'undefined') {
    let url = window.location.href;

    let domain = 'https://hostmain.vercel.app';

    if (url === `${domain}/edit/curso`) {
      if (typeof editCursos[0] === 'undefined') {
        alert('404 error: not found - Código inexistente');
        setTimeout(() => {
          router.push('/edit');
          window.location.reload();
        });
      }
    } else if (url === `${domain}/edit/aluno`) {
      if (typeof editAlunos[0] === 'undefined') {
        alert('404 error: not found - Matricula inexistente');
        setTimeout(() => {
          router.push('/edit');
          window.location.reload();
        });
      }
    } else if (url === `${domain}/edit/disciplina`) {
      if (typeof editDisciplinas[0] === 'undefined') {
        alert('404 error: not found - Código inexistente');
        setTimeout(() => {
          router.push('/edit');
          window.location.reload();
        });
      }
    }
  }

  const [isActiveToggleMenu, setIsActiveToggleMenu] = useState<boolean>(false); // enable menu mobile

  return (
    <>
      <Context.Provider
        value={{
          handleChangeData,
          data,
          setData, 
          setEditAlunos, 
          editAlunos, 
          setEditDisciplinas, 
          editDisciplinas,
          setEditCursos,
          editCursos,
          setIsActiveToggleMenu,
          isActiveToggleMenu,
        }}
      >
        <Menu />
        <main>
          <div className="position-section">
            <Header />
            {children}
          </div>
        </main>
        <ToastContainer />
      </Context.Provider>
    </>
  );
}
