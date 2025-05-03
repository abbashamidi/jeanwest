export default function FooterItem({litext1,litext2,litext3,litext4,litext5}) {
    return(
        <div className="w-1/4 text-center mt-10">
        <ul className="flex flex-col gap-3">
            <li><b>{litext1}</b></li>
            <li className="text-gray-600 hover:text-black">{litext2}</li>
            <li className="text-gray-600 hover:text-black">{litext3}</li>
            <li className="text-gray-600 hover:text-black">{litext4}</li>
            <li className="text-gray-600 hover:text-black">{litext5}</li>
        </ul>
        </div>
    )
}