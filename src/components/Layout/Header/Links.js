import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";
import { links } from "../../../helpers/Links";
import * as s from './header.module.css'


const Links = ({ scroll }) => {

    return (
        <ul className={'flex uppercase gap-3 lg:gap-5 xl:gap-8 ml-auto'}>
            {links.map(link => <li key={'header' + link.name} className={[` opacity-70 text-[10px] lg:text-xs  ${scroll ? 'text-[#555]' : 'text-[#ffffffb3]'}`].join(' ')}>
                {!link.children
                    ? <Link to={link.path} className={`${scroll ? 'hover:!text-[#24d5d1]' : 'hover:text-white'}`} activeClassName={`${scroll ? 'text-[#24d5d1]' : 'text-white'}`}>{link.name}</Link>
                    : <span className={'relative'}>{link.name}</span>
                }

                {link.children &&
                    <div className={'absolute right-12 lg:right-24 xl:right-[240px] 2xl:right-[270px]'}>
                        <ul className={[`flex mt-1.5 text-[9px] lg:text-[13px] ${scroll ? 'bg-[#e4e4e4]' : 'bg-white bg-opacity-15'}`, s.arrow, scroll && s.scrolled].join(' ')}>
                            {link.children.map((child, index) => {
                                const isLast = index === link.children.length - 1
                                return <li key={'header' + child.name} className={`py-1 hover:text-white ${scroll && 'hover:bg-blue-500'}`}>
                                    <Link to={child.path} className={`px-2 border-r ${isLast ? 'border-r-transparent' : scroll ? 'border-r-[#555]' : 'border-r-white'}`} activeClassName={`text-white ${scroll && 'bg-blue-500'}`}>{child.name}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                }

            </li>
            )}
            <li className={[`text-[#ffffffb3] opacity-70 text-[10px] lg:text-xs hover:text-white ${scroll && '!text-[#555] hover:!text-[#24d5d1]'}`].join(' ')}><a href={route('skype')}>+1(720)951-9470</a></li>
        </ul>
    )
}

export default Links


