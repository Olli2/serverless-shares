import React from 'react'
import {Share} from '../share/Share'

export const SharesList = ({ shares }) => {
    return (
        <div className="shares-list shares-list--animated">
            {shares.map(share => (
                <Share share={share} key={share.id}/>                
            ))}
        </div>
    )
}