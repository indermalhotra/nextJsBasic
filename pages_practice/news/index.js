import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
    return(
        <Fragment>
        <h2>THis is news page</h2>
        <ul>
            <li><Link href="news/test1">Test1</Link></li>
            <li><Link href="news/test2">Test2</Link></li>
        </ul>
        </Fragment>
    )
}

export default NewsPage;