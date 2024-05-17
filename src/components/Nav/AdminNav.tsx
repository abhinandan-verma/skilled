"use client"

import * as React from "react"
import AdminNavItem from "./AdminNavItem"


export default function AdminNav() {
  return (
    <div className="w-full bg-blue-400 bg-opacity-50 px-4 py-3 flex gap-4 items-center justify-start">
        <AdminNavItem text="Upload" href="/upload-course"/>
        <AdminNavItem text="Delete" href="/delete-course"/>
        <AdminNavItem text="Update" href="/update-course"/>
        <AdminNavItem text="All courses" href="/"/>
    </div>
  )
}

