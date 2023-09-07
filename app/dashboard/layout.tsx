'use client';
import SideBar from "@/infraestructure/layout/sideBar/SideBar"
import { DashboardContainer } from "../../infraestructure/features/dashboard/styled"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <DashboardContainer>
        <SideBar/>
        <section>{children}</section>
    </DashboardContainer>
    )
  }