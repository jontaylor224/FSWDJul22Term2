import style from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section>
        <h6>Contact Info</h6>
        <a className={style.link} href="mailto:someemail@domain.com">Email Us</a>
        <Link className={style.link} to="/some/url">Leave a Comment</Link>
      </section>
      <section>
        <h6>Careers</h6>
        <Link className={style.link} to="/some/url">Prospective Employees</Link>
        <Link className={style.link} to="/some/url">Hiring Managers</Link>
      </section>
    </footer>
  )
}

export default Footer