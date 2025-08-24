"use client"

import {
  Plus,
  Truck,
  MapPin,
  Package,
  Warehouse,
  ShoppingCart,
  Route,
  Network,
  Eye,
  Edit,
  Clock,
  Home,
  Globe,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AddLogisticServiceDialog } from "./AddLogisticServiceDialog"

const logisticsServices = [
  { name: "Gestión y Coordinación de Carga-Descarga", icon: Truck, status: "Activo", orders: 45 },
  { name: "Recojo a Domicilio - Paquetería", icon: MapPin, status: "Activo", orders: 128 },
  { name: "Servicio de Empaquetamiento", icon: Package, status: "Activo", orders: 67 },
  { name: "Almacenaje", icon: Warehouse, status: "Activo", orders: 234 },
  { name: "Gestión de Compras y Envíos", icon: ShoppingCart, status: "Activo", orders: 89 },
  { name: "Distribución de Mercadería", icon: Route, status: "Activo", orders: 156 },
  { name: "Sub Contrata de Servicios", icon: Network, status: "Activo", orders: 23 },
]

export function LogisticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Gestión Logística Integral</h2>
          <p className="text-slate-600 mt-1">Servicios exclusivos de logística - Todo en un solo lugar</p>
        </div>
        <AddLogisticServiceDialog />
      </div>

      {/* Logistics Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {logisticsServices.map((service, index) => {
          const Icon = service.icon
          return (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="default">{service.status}</Badge>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{service.name}</h3>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Órdenes activas:</span>
                  <span className="font-semibold text-blue-600">{service.orders}</span>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <Button size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalles
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Logistics Chain Process */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Cadena de Distribución</CardTitle>
          <CardDescription>Proceso optimizado de envío y entrega</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { step: 1, title: "Envío Lima - Huaraz", description: "Transporte principal", icon: Truck },
              { step: 2, title: "Recojo en Agencia", description: "Coordinación local", icon: MapPin },
              { step: 3, title: "Tiempo de Espera", description: "Optimización de tiempos", icon: Clock },
              { step: 4, title: "Retorno a Domicilio", description: "Entrega final", icon: Home },
              { step: 5, title: "Conexión Interagencias", description: "Red de distribución", icon: Network },
              { step: 6, title: "Recojo en Provincia", description: "Cobertura nacional", icon: Globe },
            ].map((process, index) => {
              const Icon = process.icon
              return (
                <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50/50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 text-sm">{process.title}</h4>
                    <p className="text-xs text-slate-600">{process.description}</p>
                  </div>
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}