"use client"

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
import { Plus } from "lucide-react"

export function AddMonitoringDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Monitoreo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Registrar Nuevo Monitoreo de Proyecto
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Actualice el estado y progreso de un proyecto existente.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="space-y-1.5">
            <Label htmlFor="project">Proyecto</Label>
            <Select>
              <SelectTrigger id="project">
                <SelectValue placeholder="Seleccione un proyecto a monitorear" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="torre-empresarial">Construcción Torre Empresarial</SelectItem>
                <SelectItem value="sistema-logistico">Sistema Logístico Integrado</SelectItem>
                <SelectItem value="modernizacion-infra">Modernización Infraestructura</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phase">Fase Actual</Label>
              <Select>
                <SelectTrigger id="phase">
                  <SelectValue placeholder="Seleccione la fase" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="planificacion">Planificación</SelectItem>
                  <SelectItem value="ejecucion">Ejecución</SelectItem>
                  <SelectItem value="control">Control</SelectItem>
                  <SelectItem value="cierre">Cierre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="status">Estado General</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Seleccione el estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="on-track">A Tiempo (On Track)</SelectItem>
                  <SelectItem value="at-risk">En Riesgo (At Risk)</SelectItem>
                  <SelectItem value="off-track">Retrasado (Off Track)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="progress">Progreso (%)</Label>
              <Input id="progress" type="number" placeholder="Ej: 75" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="compliance">Cumplimiento (%)</Label>
              <Input id="compliance" type="number" placeholder="Ej: 95" />
            </div>
             <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="spent">Monto Gastado Acumulado</Label>
              <Input id="spent" type="number" placeholder="Ej: 1800000" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="summary">Resumen / Notas de Monitoreo</Label>
            <Textarea
              id="summary"
              placeholder="Añadir un resumen del estado actual, hitos alcanzados, problemas encontrados, etc."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Guardar Monitoreo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}