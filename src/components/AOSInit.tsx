'use client'
import { useEffect } from 'react'
// import AOS from 'aos';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function AOSInit() {
    useEffect(() => {
        Aos.init({ duration: 800, once: true })
    }, [])

    return null
}
