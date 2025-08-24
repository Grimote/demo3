"use client"

import {
  Plus,
  Users,
  Activity,
  FileText,
  Filter,
  Download,
  Eye,
  Edit,
  MoreHorizontal,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AddSupplierDialog } from "./AddSupplierDialog"

export function SuppliersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Red de Proveedores</h2>
          <p className="text-slate-600 mt-1">Gestión integral de relaciones comerciales</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Pedir
          </Button>
          <AddSupplierDialog />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Proveedores</p>
                <p className="text-3xl font-bold mt-1">156</p>
              </div>
              <Users className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100">Proveedores Activos</p>
                <p className="text-3xl font-bold mt-1">142</p>
              </div>
              <Activity className="h-8 w-8 text-emerald-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Evaluaciones Pendientes</p>
                <p className="text-3xl font-bold mt-1">8</p>
              </div>
              <FileText className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Directorio de Proveedores</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Constructora Moderna S.A.C.",
                ruc: "20547896321",
                status: "Activo",
                rating: 4.8,
                initials: "CM",
              },
              {
                name: "Suministros Industriales E.I.R.L.",
                ruc: "10456789123",
                status: "Activo",
                rating: 4.6,
                initials: "SI",
              },
              {
                name: "Tecnología Avanzada S.R.L.",
                ruc: "20987654321",
                status: "Pendiente",
                rating: 4.2,
                initials: "TA",
              },
            ].map((supplier, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-semibold">
                      {supplier.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-slate-900">{supplier.name}</h3>
                    <p className="text-sm text-slate-600">RUC: {supplier.ruc}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={supplier.status === "Activo" ? "default" : "secondary"}>
                        {supplier.status}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-slate-600">Rating:</span>
                        <span className="text-sm font-semibold text-yellow-600">{supplier.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}