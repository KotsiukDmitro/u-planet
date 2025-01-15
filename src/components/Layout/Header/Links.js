import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";
import { links } from "../../../helpers/Links";
import * as s from './header.module.css'


const Links = ({ scroll }) => {


    return (
        <ul className={'flex uppercase gap-3 lg:gap-5 xl:gap-8 ml-auto'}>
            {links.map(link => <li key={'header' + link.name} className={[` opacity-70 text-[10px] lg:text-xs  ${scroll ? 'text-[#555]' : 'text-slate-200'}`].join(' ')}>
                {!link.children
                    ? <Link to={link.path} className={`${scroll ? 'hover:!text-[#24d5d1]' : 'hover:text-white'}`} activeClassName={'text-[#24d5d1]'}>{link.name}</Link>
                    : <span className={'relative'}>{link.name}</span>
                }

                {link.children &&
                    <div className={'absolute right-24 xl:right-[210px] 2xl:right-[235px]'}>
                        <ul className={[`flex mt-1.5 text-[13px] ${scroll ? 'bg-[#e4e4e4]' : 'bg-white bg-opacity-15'} [&>*:last-child]:border-r-transparent`, s.arrow, scroll && s.scrolled].join(' ')}>
                            {link.children.map(child => {
                                return <li key={'header' + child.name} className={`py-1 px-2 hover:text-white ${scroll ? 'hover:bg-blue-500 border-r border-r-[#555]' : 'border-r border-r-white'}`}>
                                    <Link to={child.path}>{child.name}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                }

            </li>
            )}
            <li className={[`text-slate-100 opacity-70 text-[10px] lg:text-xs hover:text-white ${scroll && '!text-[#555] hover:!text-[#24d5d1]'}`].join(' ')}><a href={route('skype')}>+1(720)951-9470</a></li>
        </ul>
    )
}

export default Links


