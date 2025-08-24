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
import { Plus, Upload } from "lucide-react"

export function AddSupportTicketDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Crear Ticket
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Crear Nuevo Ticket de Soporte
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Describa su problema o consulta y nuestro equipo le ayudará a la brevedad.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="space-y-1.5">
            <Label htmlFor="subject">Asunto</Label>
            <Input id="subject" placeholder="Ej: Error al generar reporte de ventas" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="category">Categoría del Problema</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Seleccione una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facturacion">Facturación y Pagos</SelectItem>
                  <SelectItem value="tecnico">Problema Técnico</SelectItem>
                  <SelectItem value="consulta">Consulta General</SelectItem>
                  <SelectItem value="inventario">Módulo de Inventario</SelectItem>
                  <SelectItem value="proyectos">Módulo de Proyectos</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="priority">Prioridad</Label>
              <Select>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Seleccione la prioridad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="baja">Baja</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="urgente">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">Descripción del Problema</Label>
            <Textarea
              id="description"
              placeholder="Por favor, describa el problema con el mayor detalle posible. Incluya pasos para reproducirlo si es aplicable."
              className="min-h-[120px]"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Adjuntar Archivos (Capturas de pantalla, etc.)</Label>
            <div className="flex items-center justify-center w-full">
              <Label
                htmlFor="dropzone-file-support"
                className="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100"
              >
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-6 h-6 text-slate-500" />
                  <p className="text-xs text-slate-500 mt-1">
                    <span className="font-semibold">Click para subir</span> o arrastrar
                  </p>
                </div>
                <Input id="dropzone-file-support" type="file" className="hidden" multiple />
              </Label>
            </div>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Enviar Ticket
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}