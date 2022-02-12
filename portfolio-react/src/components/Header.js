import Link from '@mui/material/Link'
import '../css/Home.css';

export default function Header () {
  return (
    < >
      <header className='Header'>
          <h1>Kaylane Silva</h1>
          <div>
            <Link
              href='/'
              style={ {
                color: 'black',
                textDecorationColor: 'black'  
              } }
            >
              Home
            </Link>
            <Link 
              href='/'
              style={ {
                color: 'black',
                textDecorationColor: 'black'  
              } }
            >
                Projetos
            </Link>
            <Link
              href='/'
              style={ {
                color: 'black',
                textDecorationColor: 'black'  
              } }
            >
              Contato
            </Link>
          </div>
        </header>
    </>
  )
}