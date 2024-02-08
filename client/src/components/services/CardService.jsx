import React from 'react'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { CgBrowser } from "react-icons/cg";
import { PiWechatLogoBold } from "react-icons/pi";
import { AiOutlineNotification } from "react-icons/ai";

const CardService = ({ title }) => {
    function iconByTitle() {
        if (title === 'SEO Services') {
            return <MdOutlineScreenSearchDesktop size={40} />
        }
        if (title === 'Web Design') {
            return <CgBrowser size={40} />
        }
        if (title === 'Social Engagement') {
            return <PiWechatLogoBold size={40} />
        }
        if (title === 'Content Marketing') {
            return <AiOutlineNotification size={40} />
        }
    }
    
    return (
        <>
            <div className="card w-64 bg-slate-100 shadow-lg rounded-xl text-black">
                <div className="card-body items-center text-center">
                    {iconByTitle()}
                    <h2 className="card-title font-semibold">{title}</h2>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <div className="card-actions justify-end mt-2">
                        <button className="btn bg-yellow-400 border-none rounded-full text-white">Learn it more</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardService