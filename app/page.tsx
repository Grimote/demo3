"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Sidebar } from "@/components/layout/Sidebar"
import { DashboardPage } from "@/components/dashboard/DashboardPage"
import { LogisticsPage } from "@/components/logistics/LogisticsPage"
import { InventoryPage } from "@/components/inventory/InventoryPage"
import { ProductsPage } from "@/components/products/ProductsPage"
import { SuppliersPage } from "@/components/suppliers/SuppliersPage"
import { ServicesPage } from "@/components/services/ServicesPage"
import { PurchasesPage } from "@/components/purchases/PurchasesPage"
import { ContractsPage } from "@/components/contracts/ContractsPage"
import { ProjectsPage } from "@/components/projects/ProjectsPage"
import { PaymentsPage } from "@/components/payments/PaymentsPage"
import { CommunicationPage } from "@/components/communication/CommunicationPage"
import { AreasPage } from "@/components/areas/AreasPage"
import { MonitoringPage } from "@/components/monitoring/MonitoringPage"
import { ReportsPage } from "@/components/reports/ReportsPage"
import { SupportPage } from "@/components/support/SupportPage"

export default function Home() {
  const [activeModule, setActiveModule] = useState("dashboard")

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <DashboardPage />
      case "logistics":
        return <LogisticsPage />
      case "inventory":
        return <InventoryPage />
      case "products":
        return <ProductsPage />
      case "suppliers":
        return <SuppliersPage />
      case "services":
        return <ServicesPage />
      case "purchases":
        return <PurchasesPage />
      case "contracts":
        return <ContractsPage />
      case "projects":
        return <ProjectsPage />
      case "payments":
        return <PaymentsPage />
      case "communication":
        return <CommunicationPage />
      case "areas":
        return <AreasPage />
      case "monitoring":
        return <MonitoringPage />
      case "reports":
        return <ReportsPage />
      case "support":
        return <SupportPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-72 p-8">
          {renderActiveModule()}
        </main>
      </div>
    </div>
  )
}