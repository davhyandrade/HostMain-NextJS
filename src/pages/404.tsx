import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head";

export default function NotFound() {
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/cadastrar');
            setTimeout(() => {
                window.location.reload();
            }, 200)
        }, 3000);
    }, [])

    return(
        <>
            <Head>
                <title>HostMain | NotFound</title>
            </Head>
            <div className="field-notfound">
                <h1>404</h1>
                <h1><span>Opps!</span> Page not found</h1>
                <p>The page you're looking for doesn't exist</p>
                <p>so you will be redirected to the home handle</p>
            </div>
        </>
    )
}