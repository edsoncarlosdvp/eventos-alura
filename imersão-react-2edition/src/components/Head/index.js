import Head from 'next/head'
import dbJson from '../../../db.json'

export default function MetaTags() {
    return (
        <div>
            <Head>
                <title>EdQuiz Alura</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    property="og:image"
                    content={dbJson.bg}
                />
            </Head>
        </div>
    )
}