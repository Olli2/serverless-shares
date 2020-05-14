import React from 'react';
import { getStatus } from '../../utils/get-status/getStatus';
import { isNil } from 'lodash';

export const Share = ({share}) => {
    return isNil(share) ? (
        <></>
    ) : (
        <div className={`share ${getStatus(share.performance)}`}>
            <p className="share__title" >{share.name}</p>
            <p className="share__info">{share.performance}</p>
        </div>
    )
}