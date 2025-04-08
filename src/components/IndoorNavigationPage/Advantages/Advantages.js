import React from "react";


const Advantages = () => {

    const advantagesData = [
        {
            title: "For the owner",
            subtitle: "(owner of the system/premises):",
            items: [
                "Access to marketing information, the possibility of sending personalized offers/messages to visitors",
                "Analytical information about customers' behavior (where they spend more/less time, most popular objects)",
                "Logistical information, such as movement of visitors, goods and equipment",
                "Upgrade the status of its premises by introducing modern technologies and get additional revenue indirectly",
                "Possibility of using additional advertising spots in the application",
                "Renting devices (tablets) with a pre-installed system",
                "Generate leads & build up relationships with your customers",
                "Reduce workloads at information desks",
            ],
        },
        {
            title: "For the visitor",
            subtitle: "(user of the system):",
            items: [
                "Navigation inside the premises",
                "Making the route to the object found in the database or on the scheme",
                "Getting the quickest route to a desired object",
                "Information or notifications about the object which the user is passing by",
                "Text search for objects in the application database",
                "Receiving detailed multimedia information about facilities and objects",
                "Minimize waiting time at an information desk",
                "Total saved time",
            ],
        },
    ]

    return (
        <div className={'container mx-auto mb-28 px-5'}>
            <h1 className={'relative mb-20 text-[23px] xl:text-[40px] font-light text-[#48494e] after:absolute after:w-14 after:h-[3px] after:bg-greenCustom after:left-0  after:-bottom-8'}>Advantages</h1>
            <div className={'grid md:grid-cols-2 gap-12 md:gap-20'}>
                {advantagesData.map((item, index) => (
                    <TemplateItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        items={item.items}
                    />
                ))}
            </div>
        </div>
    )
}

const TemplateItem = ({ items, title, subTitle }) => {
    return (
        <div>
            <h2 className={'text-greenCustom font-bold uppercase mb-1 text-[22px] md:text-[17px] xl:text-[26px]'}>{title}</h2>
            <p className={'text-[#515151] font-bold mb-5 md:mb-10 text-[16px] md:text-[11px] xl:text-[16px]'}>{subTitle}</p>
            <ol className={'list-decimal pl-4 xl:pl-6 text-[#515151] text-[16px] md:text-[11px] xl:text-[16px] leading-7 tracking-wide'}>
                {items.map(item => {
                    return (
                        <li key={item} className={'mb-3 md:mb-0 xl:mb-3'}>{item}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Advantages