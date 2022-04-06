import '../css/Home.css'
import Header from './Header'
import Footer from './Footer'
import { Link, Box } from '@mui/material'
import { Image } from 'mui-image'
import Contat from '../components/Contat'

export default function Teste() {
  return (
    <div className='container'>
      <Header />
      <main>
        <div className='divProfile'>
          <div className='div-image'>
            <img
              src='https://cdn.discordapp.com/attachments/935207613543624835/938216634542354462/minha-foto.jpg'
              alt="Foto de perfil - Kaylane"
              className="img-profile"
              fadein
            />
          </div>
          <section className='descriptionText'>
            <h3>
              Olá, eu sou a Kaylane! Desenvolvedora Front-End.
            </h3>
            <section className='aboutMe'>
              <p>
                Tenho 19 anos, moro em Taubaté/SP.
                Gosto muito de ouvir músicas, ler, assistir séries e filmes e sou apaixonada por tecnologia.<br />
                Atualmente sou estudante de Desenvolvimento Web na {' '}
                {
                  <Link
                    href='https://www.betrybe.com/'
                    style={{
                      color: 'black',
                      textDecorationColor: 'black'
                    }}
                  >Trybe</Link>
                }.
              </p>
            </section>
            <div>
              <a
                href="https://drive.google.com/file/d/1v-BL8YADR0YpxxVUvmhZ2ifkz1-BfG02/view?usp=sharing"
                download="Currículo.pdf"
                target='_blank'
                rel='noreferrer'
              >
                <button
                  type='button'
                  className="waves-effect waves-light btn-small"
                >
                  Download Resumo!
                </button>
              </a>
            </div>
          </section>
        </div>
        <div className='divSkills'>
          <section className='habilidades'>
            <h6>Habilidades</h6>
          </section>
          <section className='contentSkill'>
            <section className='divListSkills'>
              <p className='titleSkills'> Hard Skills</p>
              <ul className='listSkills'>
                <li>
                  <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='Icone Html' />
                  Html
                </li>
                <li>
                  <img src="https://img.icons8.com/color/48/000000/css3.png" alt='Icone Css'/>
                  Css
                </li>
                <li>
                  <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt='Icone JS' />
                  Javascript
                </li>
                <li>
                  <img 
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    alt='Icone React.js'
                  />
                  React.js
                </li>
                <li>
                  <img
                    src='https://cdn.discordapp.com/attachments/935207613543624835/942505940396179476/nextjs_icon_132160.png'
                    alt='Icone Next.js'
                    width={ 40 }
                  /> 
                  Next.js
                </li>
                <li>
                <img src="https://img.icons8.com/color/48/000000/git.png" alt='Icone Git'/>
                  Git
                </li>
                <li style={ { fontWeigth: 700 } } >
                  Metodologia Ágil
                </li>
              </ul>
            </section>
            <section className='divListSkills'>
              <p className='titleSkills'>Others Skills</p>
              <ul className='listSkills other-skills'>
                <li>
                  <img src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png" alt='Icone Photoshop'/>
                  Photoshop
                </li>
                <li>
                <img src="https://img.icons8.com/color/48/000000/adobe-premiere-pro--v1.png" alt='Icone Premiere'/>
                  Adobe Premiere
                </li>
                <li>
                <img src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png" alt='Icone Illustrator'/>
                  Adobe Illustrator
                </li>
                <li>
                  <img
                    src='https://cdn.discordapp.com/attachments/935207613543624835/942505685118242846/iconeCorelDrwa.png'
                    alt='Icone CorelDraw'
                  />
                  Corel Draw
                </li>
              </ul>
            </section>
          </section>
        </div>
        <div className='divProjects' id='projects'>
          <Box
            component="div"
            fullwidth
            className='project'
          >
            <Image
              src='https://cdn.discordapp.com/attachments/935207613543624835/937783973541728326/Captura_de_tela_de_2022-01-31_15-56-55.png'
              alt="Página de início da AluraCord"
              width={ 300 }
              style={{
                borderRadius: 10,
                marginTop: '2vh',
              }}
            />
            <Box
              component="div"
              className='div-content-project'
            >
              <Box
                component='h3'
                style={{ fontSize: '230%', fontWeight: 700 }}
              >AluraCord - Ocean</Box>
              <button
                type='button'
                className='button-project'
              >
                2022
              </button>
              <Box
                component='p'
                style={{
                  fontSize: '90%',
                  textAlign: 'justify'
                }}
              >
                Site web onde você consegue trocar mensagens ao mesmo tempo com seus colegas, usando o mesmo servidor. <br />
                Tecnologias usadas:
                <Box
                  component='span'
                  style={{
                    fontWeight: 500,
                    color: 'black',
                  }}
                >
                  {'       '} React, Next.js, Html, CSS, Javascript, StyledComponents, Supabase
                </Box> <br />
                Link para o repositório:
                <Link
                  href='https://github.com/KaylaneSilva/Aluracord---Ocean'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 600
                  }}
                > {' '} Github</Link> <br />
                Acesse o site: <Link
                  href=''
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 600
                  }}
                > {' '} Clique Aqui</Link>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: 'black'
            }}
            width='90vw'
            height={2}
          />
          <Box
            component="div"
            fullwidth
            className='project'
          >
            <Image
              src='https://cdn.discordapp.com/attachments/935207613543624835/941470242922704897/Captura_de_tela_de_2022-02-10_17-15-08.png'
              alt="Página da carteira do MyWallet"
              width={ 300 }
            />
            <Box
              component="div"
              className='div-content-project'
            >
              <Box
                component='h3'
                style={{ fontSize: '230%', fontWeight: 700 }}
              >My Wallet</Box>
              <button
                type='button'
                className='button-project'
              >
                2022
              </button>
              <Box
                component='p'
                style={{
                  fontSize: '90%',
                  textAlign: 'justify'
                }}
              >
                Site web onde você consegue incluir suas despesas em outras moedas e fazer os calculos de seus gastos convertidos em R$. <br />
                Tecnologias usadas:
                <Box
                  component='span'
                  style={{
                    fontWeight: 500,
                    color: 'black',
                  }}
                >
                  {'       '} React, Html, CSS, Javascript, Bootstrap, Redux
                </Box> <br />
                Link para o repositório:
                <Link
                  href='https://github.com/KaylaneSilva/MyWallet'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 600
                  }}
                > {'         '} Github</Link> <br />
                Acesse o site: <Link
                  href=''
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 600
                  }}
                > {'         '} Clique Aqui</Link>
              </Box>
            </Box>
          </Box>
        </div>
        <Contat />
        <Footer />
      </main>
    </div>
  )
}
