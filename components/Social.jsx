import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
    //{icon : <FaGithub />, path: 'http://github.com/ruge23'},
    {icon : <FaLinkedin />, path: 'https://www.linkedin.com/in/daniel-maximiliano-quinteros-769213203/'}
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
export default Social
