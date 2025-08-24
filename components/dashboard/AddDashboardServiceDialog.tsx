"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Upload, FileText } from "lucide-react"

const dashboardServices = [
  "Análisis Ejecutivo",
  "Monitoreo de KPIs",
  "Gestión de Proyectos",
  "Seguimiento Financiero",
  "Control de Inventario",
  "Gestión de Recursos Humanos",
  "Análisis de Ventas",
  "Monitoreo de Operaciones",
  "Gestión de Clientes",
  "Análisis de Mercado",
  "Planificación Estratégica",
  "Otros",
]

const initialDocuments = [
    { id: 1, name: "Informe Ejecutivo" },
    { id: 2, name: "Reporte de KPIs" },
    { id: 3, name: "Plan de Acción" },
    { id: 4, name: "Análisis de Datos" },
]

export function AddDashboardServiceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Servicio
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Añadir Nuevo Servicio de Dashboard
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Complete la información para registrar un nuevo servicio en el dashboard ejecutivo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[65vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="service-type">Tipo de Servicio</Label>
              <Select>
                <SelectTrigger id="service-type">
                  <SelectValue placeholder="Seleccione un tipo de servicio" />
                </SelectTrigger>
                <SelectContent>
                  {dashboardServices.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
             <div className="space-y-1.5">
              <Label htmlFor="name">Nombre Específico</Label>
              <Input id="name" placeholder="Ej: Dashboard de Ventas Mensuales" />
            </div>
            <div className="space-y-1.5">
                <Label htmlFor="status">Estado</Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Seleccione estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="activo">Activo</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="cerrado">Cerrado</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="active-orders">Indicadores Activos</Label>
              <Input id="active-orders" type="number" placeholder="Ej: 12" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="currency">Moneda</Label>
              <Select>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Moneda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PEN">PEN</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="amount">Presupuesto</Label>
              <Input id="amount" type="number" placeholder="Ej: 5000.00" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              placeholder="Breve descripción del servicio de dashboard..."
              className="min-h-[80px]"
            />
          </div>
          <div className="space-y-3">
            <Label>Documentos</Label>
            <div className="space-y-2">
              {initialDocuments.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-2 bg-slate-50/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-700">{doc.name}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Label htmlFor={`doc-dashboard-${doc.id}`} className="cursor-pointer">
                      <Upload className="h-3 w-3 mr-1.5" />
                      Cargar
                      <Input id={`doc-dashboard-${doc.id}`} type="file" className="hidden" />
                    </Label>
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="link" size="sm" className="p-0 h-auto">
              + Añadir otro documento
            </Button>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Guardar Servicio de Dashboard
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}