import React from "react";

const MobileApp = () => {

    const advantages = [
        'Operations with memory, control of memory leaks;',
        'The intensity of energy consumption should not drain a battery;',
        'Use of disk space, stability in condition of limited space on the disk, registration, work with memory cards;',
        'Support of different screen resolutions, portrait and landscape modes;',
        'Use of optimal Internet connection: Active Sync, USB, GPRS, Wi-Fi, work under unstable connection;',
        'Application resistance to the incoming/outgoing calls, sending and receiving SMS/MMS;',
        'Correct application installation and removing from the device\'s memory and memory card;',
        'Proper localization;',
        'Stable work in stressful conditions, crash recovery.'
    ]

    return (
        <div className={'mb-10'}>
            <h4 className={'text-[21px] sm:text-[24px] text-[#22bfb7] font-bold uppercase mb-2 sm:mb-5'}>For mobile applications:</h4>
            <p className={'text-[16px] sm:text-[14px] mb-5'}>Besides the common types of testing, following peculiarities are taken into account in addition to mobile platforms:</p>
            <ul className={'space-y-1'}>
                {advantages.map((advantage, index) => {
                    return <li key={'for mobile app' + index} className={'relative before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:bg-[#747474] before:rounded-full text-[16px] sm:text-[14px] text-[#3A3A3A] pl-4'}>
                        {advantage}
                    </li>
                })}
            </ul>

        </div>
    )
}

export default MobileApp