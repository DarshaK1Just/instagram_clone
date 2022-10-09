import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
    return ( <
        div className = "bg-gray-50 h-screen overflow-y-scroll scrollbar-hide " >
        <
        Head >
        <
        title > Instagram 2.0 Darshak < /title>    <
        link rel = "icon"
        href = "/favicon.ico" / >
        <
        /Head>

        <
        h1 > This is the INSTAGRAM 2.0 BUILD < /h1> { / * Header * /}    <
        Header / >
        <
        Feed / >
        <
        Modal / >

        <
        /div>
    )
}