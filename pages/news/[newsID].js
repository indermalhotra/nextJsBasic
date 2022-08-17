

import {useRouter} from 'next/router';

import { Fragment } from 'react';

const NewsDetail = () => {
    const router = useRouter();
    console.log(router.query.newsID);
    return(
        <Fragment>
            <h2>This is news Detail</h2>
            <h2>{router.query.newsID}</h2>
            
        </Fragment>
    )
}

export default NewsDetail;

