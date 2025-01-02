import React from 'react'

export function NextArrow ({className, style, onClick}) {

    return (
        <div
            role={'presentation'}
            className={className + ' block absolute'}
            style={{
                ...style,
                right: `0!important`,
                zIndex: `1`,

            }}
            onClick={onClick}
        />
    )
}

export function PrevArrow ({className, style, onClick}) {

    return (
        <div
            role={'presentation'}
            className={className+ ' block absolute'}
            style={{
                ...style,
                left: `0!important`,
                zIndex: `1`,

            }}
            onClick={onClick}
        />
    )
}
