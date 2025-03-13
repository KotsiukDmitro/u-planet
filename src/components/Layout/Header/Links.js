import React from "react";
import { useScrollContext } from "../../../hooks/useScrollContext";
import { Link } from "gatsby";
import { route } from "../../../routes";
import { links } from "../../../helpers/Links";
import * as s from './header.module.css'


const Links = () => {

    const { scroll, isTransparent } = useScrollContext()
    const isScrolled = scroll || isTransparent

    return (
        <ul className={'flex uppercase gap-2.5 lg:gap-5 xl:gap-7 2xl:gap-8 ml-auto'}>
            {links.map(link =>
                <li key={'header' + link.name}
                    className={`opacity-70 text-[10px] lg:text-xs ${isScrolled ? 'text-[#555]' : 'text-[#ffffffb3]'}`}>
                    {!link.children
                        ? <Link to={link.path}
                            className={`hover:${isScrolled ? 'text-greenCustom' : 'text-white'}`}
                            activeClassName={`${isScrolled ? 'text-greenCustom' : 'text-white'}`}
                        >{link.name}</Link>
                        : <span className={'relative'}>{link.name}</span>
                    }

                    {link.children &&
                        <div className={'absolute right-12 lg:right-24 xl:right-[240px] 2xl:right-[270px]'}>
                            <ul className={`flex mt-1.5 text-[9px] lg:text-[13px] ${isScrolled ? 'bg-[#e4e4e4]' : 'bg-white bg-opacity-15'} ${s.arrow} ${isScrolled ? s.scrolled : ''}`}>
                                {link.children.map((child, index) => {
                                    const isLast = index === link.children.length - 1
                                    return <li key={'header' + child.name} className={'py-1'}>
                                        <Link to={child.path}
                                            className={`py-1 hover:text-white ${isScrolled ? 'hover:bg-blue-500' : ''} px-2 border-r ${isLast ? 'border-r-transparent' : isScrolled ? 'border-r-[#555]' : 'border-r-white'}`}
                                            activeClassName={`text-white ${isScrolled ? 'py-1 bg-blue-500' : ''}`}>{child.name}</Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    }

                </li>
            )}
            {/* <li className={[`text-[#ffffffb3] opacity-70 text-[10px] lg:text-xs hover:text-white ${isScrolled && '!text-[#555] hover:!text-greenCustom'}`].join(' ')}><a href={route('skype')}>+1(720)951-9470</a></li> */}
            <li className={`text-[#ffffffb3] opacity-70 text-[10px] lg:text-xs hover:text-white ${isScrolled ? '!text-[#555] hover:!text-greenCustom' : ''}`}>
                <Link to={route('blog')} activeClassName={`${isScrolled ? 'text-greenCustom' : 'text-white'}`}>blog</Link>
            </li>
        </ul>
    )
}

export default Links


