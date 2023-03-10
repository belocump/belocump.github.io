import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
      <div className='flex justify-center'>
      <ul className="list">
        <li className=""><a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </a>
        </li>
  
        <li className="">
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
            <span className="">GitHub</span>
          </a>
        </li>
      </ul>
  
      </div>
    )
  }