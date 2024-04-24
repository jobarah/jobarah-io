import './page.css'
import JobarahLogo from '../../public/jobarahLogo.svg';
import NewCodePlaylist from '../../public/blue-spot.svg';
import { FaEnvelope } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaAddressCard } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center p-24">
      <div className="record-wrapper flex-col md:flex-row">
        <div className="bio items-center md:justify-evenly">
          <h3>Josue Enamorado</h3>
          <p>
            Hi there, I&apos;ve been doing software development since 2013, but
            professionally since 2016. I&apos;ve done a lot of different things throughout my career.
            Started as a Frontend Developer, then moved to Backend, then Mobile and now I&apos;m a Fullstack Developer.
            So I guess it&apos;s safe to say: Started from the &lt;button /&gt; now we&apos;re here.
          </p>
          <NewCodePlaylist className="spotify-qr" />
        </div>
        <div className="visual-intro flex flex-col md:flex-row items-center">
          <div className="title">Software Developer</div>
          <div className="logo">
            <div className="je">
              <JobarahLogo className="je-logo"/>
            </div>
          </div>
          <div className="contact-me">
            <ul>
              <li>
                <FaLinkedin className='contact-item'/>
                <a href="https://www.linkedin.com/in/jobarah">linkedin.com/in/jobarah</a>
              </li>
              <li>
                <FaGithub className='contact-item'/>
                <a href="https://www.github.com/jobarah">github.com/jobarah</a>
              </li>
              <li>
                <FaTwitter className='contact-item'/>
                <a href="https://www.twitter.com/Jobarah01">twitter.com/jobarah01</a>
              </li>
              <li>
                <FaEnvelope className='contact-item'/>
                <a href="mailto:jobarah01@gmail.com">jobarah01@gmail.com</a>
              </li>
              <li>
                <FaAddressCard className='contact-item'/>
                <a href="https://drive.google.com/file/d/1sCwYUirrffqH3xGjl3ho8O0qQXTQhpEl/view">My Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
