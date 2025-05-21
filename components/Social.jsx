import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
    {icon : <FaGithub />, path: 'http://github.com/ruge23'},
    {icon : <FaLinkedin />, path: 'https://www.linkedin.com/in/rodrigo-ruiz-gerez-a41584155/'}
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
