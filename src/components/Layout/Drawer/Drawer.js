import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";
import HeaderLogoWhite from "../../common/Logo/HeaderLogoWhite";
import facebook from '../../../assets/images/social/facebook.svg'
import twitter from '../../../assets/images/social/twitter.svg'
import linkedin from '../../../assets/images/social/linkedin.svg'
import contact from '../../../assets/images/social/contact.svg'
import { links } from "../../../helpers/Links";


const Drawer = ({ isOpen, toggleOpen }) => {


    const socialLinks = [
        { name: 'facebook', image: facebook, path: route('facebook') },
        { name: 'twitter', image: twitter, path: route('twitter') },
        { name: 'linkedin', image: linkedin, path: route('linkedin') },
        { name: 'contact', image: contact, path: route('home.contact-us') },
    ]

    return (
        <div className={`fixed h-full w-full touch-none ${isOpen ? 'visible' : 'invisible'}`} style={{ zIndex: 100 }}>
            <div role={'presentation'} onClick={toggleOpen} className={'absolute h-full w-full overflow-hidden'} style={{ background: 'rgba(12, 25, 61, 0.8)' }} />

            <div className={'flex flex-col items-start h-full overflow-auto transition-all duration-300 py-7'}
                style={{
                    width: 340,
                    backgroundColor: `#1943b9`,
                    transform: `translateX(-${!isOpen ? 340 : 0}px)`
                }}>
                <button onClick={toggleOpen} className={`absolute right-4 top-4 z-10`} aria-label="button open">
                    <div className='text-greenCustom'>
                        <svg width="25" height="25" viewBox="0 0 25 25">
                            <g>
                                <path d="M5.39502 18.5876L6.80923 20.0019L19.5372 7.27394L18.1229 5.85972L5.39502 18.5876Z" fill="currentColor" />
                                <path d="M19.5371 18.5876L18.1229 20.0019L5.39497 7.27394L6.80919 5.85972L19.5371 18.5876Z" fill="currentColor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1413_2358">
                                    <rect width="24" height="24" fill="currentColor" transform="translate(0.466064 0.930664)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </button>
                <div className={'w-32 ml-10 mb-10'}>
                    <HeaderLogoWhite />
                </div>
                <div className={'w-full mb-5'}>
                    <ul className={'flex flex-col uppercase gap-5 text-white text-[17px]'}>
                        {links.map(link => {
                            return <li key={'drawer' + link.name} className={['px-10', link.children && 'border-2 border-y-[#4665d6] border-x-0 py-5'].join(' ')}>
                                {!link.children
                                    ? <Link onClick={toggleOpen} to={link.path}>{link.name}</Link>
                                    : <span>{link.name}</span>
                                }
                                {link.children &&
                                    <ul className={'pl-5 flex flex-col gap-3 mt-3 text-[13px]'}>
                                        {link.children.map(child => {
                                            return <li key={'drawer' + child.name}><Link onClick={toggleOpen} to={child.path}>{child.name}</Link></li>
                                        })}
                                    </ul>
                                }
                            </li>
                        })}
                    </ul>
                </div>
                <div className={'ml-10'}>
                    <hr className={"w-5 h-0.5 bg-white mb-5"}></hr>
                    <div className="flex items-center gap-10">
                        {socialLinks.map(link => {
                            return <a href={link.path} key={'socialLink:' + link.name}>
                                <img src={link.image} alt={link.name} />
                            </a>
                        })}
                    </div>
                    <hr className={'w-5 h-0.5 bg-white mt-5 mb-5'}></hr>
                    <a href={route('skype')} className={'text-greenCustom font-semibold'}>+1(720)951-9470</a>
                </div>
            </div>
        </div>
    )
}

export default Drawer