import '../css/Home.css'
import Header from './Header'
import Footer from './Footer'
import { Link, Box } from '@mui/material'
import { Image } from 'mui-image'

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
              <button
                type='button'
                className="waves-effect waves-light btn-small"
              >
                Download Resumo!
              </button>
            </div>
          </section>
        </div>
        <div className='divSkills'>
          Habilidades
          <section className='contentSkill'>
            <section className='divListSkills'>
              <p className='titleSkills'> Hard Skills</p>
              <ul className='listSkills'>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Git</li>
                <li>Metodologia Ágil</li>
              </ul>
            </section>
            <section className='divListSkills'>
              <p className='titleSkills'> Hard Skills</p>
              <ul className='listSkills'>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Git</li>
                <li>Metodologia Ágil</li>
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
              alt="Foto de perfil - Kaylane"
              width={380}
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
            sx={ {
              backgroundColor: 'black'
            }}
            width= '90vw'
            height={ 2 }
          />
          <Box
            component="div"
            fullwidth
            className='project'
          >
            <Image
              src='https://cdn.discordapp.com/attachments/935207613543624835/941470242922704897/Captura_de_tela_de_2022-02-10_17-15-08.png'
              alt="Foto de perfil - Kaylane"
              width={380} 
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
        <Footer />
      </main>
    </div>
  )
}
