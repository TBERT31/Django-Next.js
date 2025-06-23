"use client"

import { useAuth } from "../../components/authProvider"
import fetcher from "../../lib/fetcher"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import useSWR from "swr"


const WAITLIST_API_URL = "/api/waitlists/"


export default function WaitlistTable() {
    const router = useRouter()
    const {data, error, isLoading} = useSWR(WAITLIST_API_URL, fetcher)
    const auth = useAuth()
    useEffect(()=>{
      if (error?.status === 401) {
        auth.loginRequiredRedirect()
      }
    }, [auth, error])
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
  }