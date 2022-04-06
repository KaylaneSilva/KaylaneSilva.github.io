import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../css/Home.css'

function Contat() {

  return (
    <div id='contat'>
      <h3>Contato</h3>
      <section className='sectionLinks'>
      <a
        className='linkContat'
        href='mailto:kaylaners.silva@gmail.com?Subject=Título%20da%20mensagem'
        style={{ color: 'black', textDecoration: 'none'}}
      >
        <EmailIcon />
        <p>Meu Email</p>
      </a>
      <a
        href='https://api.whatsapp.com/send?phone=5512996201143&text=Ol%C3%A1!!!%20Escreva%20aqui%20o%20seu%20contato'
        className='linkContat'
        style={{ color: 'black', textDecoration: 'none'}}
      >
        <WhatsAppIcon />
        <p>Meu Whatsapp</p>
      </a>
      </section>
    </div>
  )
}

export default Contat;

// Nome, email, assunto, número de telefone