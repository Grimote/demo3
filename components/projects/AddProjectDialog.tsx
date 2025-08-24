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

const initialDocuments = [
    { id: 1, name: "Acta de Constitución" },
    { id: 2, name: "Plan de Proyecto" },
    { id: 3, name: "Estudio de Viabilidad" },
    { id: 4, name: "Contrato Principal" },
]

export function AddProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Iniciar Proyecto
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Iniciar Nuevo Proyecto
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Complete la información para dar inicio a un nuevo proyecto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="project-name">Nombre del Proyecto</Label>
              <Input id="project-name" placeholder="Ej: Construcción Torre Empresarial" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="project-id">ID del Proyecto</Label>
              <Input id="project-id" placeholder="Ej: P004" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="budget">Presupuesto</Label>
              <Input id="budget" type="number" placeholder="Ej: 2500000" />
            </div>
             <div className="space-y-1.5">
              <Label htmlFor="currency">Moneda</Label>
              <Select>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Moneda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PEN">Soles (PEN)</SelectItem>
                  <SelectItem value="USD">Dólares (USD)</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="space-y-1.5">
                <Label htmlFor="status">Estado Inicial</Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Seleccione estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planificacion">Planificación</SelectItem>
                    <SelectItem value="en-progreso">En Progreso</SelectItem>
                    <SelectItem value="monitoreo">Monitoreo</SelectItem>
                     <SelectItem value="completado">Completado</SelectItem>
                  </SelectContent>
                </Select>
            </div>
             <div className="space-y-1.5">
              <Label htmlFor="progress">Progreso Inicial (%)</Label>
              <Input id="progress" type="number" placeholder="Ej: 5" defaultValue={5} />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">Descripción del Proyecto</Label>
            <Textarea
              id="description"
              placeholder="Breve descripción de los objetivos y alcance del proyecto..."
              className="min-h-[100px]"
            />
          </div>
           <div className="space-y-3">
            <Label>Documentos Iniciales</Label>
            <div className="space-y-2">
              {initialDocuments.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-2 bg-slate-50/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-700">{doc.name}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Label htmlFor={`doc-project-${doc.id}`} className="cursor-pointer">
                      <Upload className="h-3 w-3 mr-1.5" />
                      Cargar
                      <Input id={`doc-project-${doc.id}`} type="file" className="hidden" />
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
            Guardar Proyecto
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}