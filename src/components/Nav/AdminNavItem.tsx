"use client"

import * as React from "react"

import { Button } from '../ui/button'
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from "next/navigation";

function AdminNavItem({text, href} : {
    text: string;
    href: string;
}) {

    const router = useRouter()

  return (
    <div className="">
        <Button onClick={
            () => {
                router.push("/skilledup/courses" + href)
            }
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {text}
        </Button>
    </div>
  )
}

export default AdminNavItem