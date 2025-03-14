import React from "react";


const Advantages = () => {

    const owner = [
        "Access to marketing information, the possibility of sending personalized offers/messages to visitors",
        "Analytical information about customers' behavior (where theyspend more/less time, most popular objects)",
        "Logistical information, such as movement of visitors, goods andequipment",
        "Upgrade the status of its premises by introducing moderntechnologies and get additional revenue indirectly",
        "Possibility of using additional advertising spots in the application",
        "Renting devices (tablets) with a pre-installed system",
        "Generate leads & build up relationships with your customers",
        "Reduce workloads at information desks",
    ]
    const titleOwen = 'For the owner'
    const subTitleOwen = '(owner of the system/premises):'

    const visitor = [
        "Navigation inside the premises",
        "Making the route to the object found in the database or on the scheme",
        "Getting the quickest route to a desired object",
        "Information or notifications about the object which the user ispassing by",
        "Text search for objects in the application database",
        "Receiving detailed multimedia information about facilities and objects",
        "Minimize waiting time at an information desk",
        "Total saved time",
    ]
    const titleVisitor = 'For the visitor'
    const subTitleVisitor = '(user of the system):'

    return (
        <div className={'container mx-auto mb-28 px-5'}>
            <h1 className={'relative mb-20 text-[23px] xl:text-[40px] font-light text-[#48494e] after:absolute after:w-14 after:h-[3px] after:bg-greenCustom after:left-0  after:-bottom-8'}>Advantages</h1>
            <div className={'grid md:grid-cols-2 gap-12 md:gap-20'}>
                <TemplateItem advantages={owner} title={titleOwen} subTitle={subTitleOwen} />
                <TemplateItem advantages={visitor} title={titleVisitor} subTitle={subTitleVisitor} />
            </div>

        </div>
    )
}

const TemplateItem = ({ advantages, title, subTitle }) => {
    return (
        <div>
            <h2 className={'text-greenCustom font-bold uppercase mb-1 text-[22px] md:text-[17px] xl:text-[26px]'}>{title}</h2>
            <p className={'text-[#515151] font-bold mb-5 md:mb-10 text-[16px] md:ext-[11px] xl:text-[16px]'}>{subTitle}</p>
            <ol className={'list-decimal pl-4 xl:pl-6 text-[#515151] text-[16px] md:text-[11px] xl:text-[16px] leading-7 tracking-wide'}>
                {advantages.map(item => {
                    return (
                        <li key={item} className={'mb-3 md:mb-0 xl:mb-3'}>{item}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Advantages