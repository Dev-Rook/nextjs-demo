import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Styles from "../styles/Page-Styles/Page.module.css";

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [router])


  return (
    <div className={Styles.Page}>
        <h1>Page Not Found...</h1>
        <Link href={"/"}>
            Return To Home
        </Link>
    </div>
  )
}

export default NotFound