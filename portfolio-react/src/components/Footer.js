import Link from '@mui/material/Link';
import '../css/Home.css';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className='Footer'>
      <section className='divIcons'>
      <Link href='https://github.com/KaylaneSilva'>< GitHub /></Link>
      <Link href='https://www.instagram.com/kaylane_rss/'><Instagram /></Link>
      <Link href='https://www.linkedin.com/in/kaylane-silva/'><LinkedIn /></Link>
      </section>
      <p>Copyright ©2020 All rights reserved</p>
    </div>
  )
}