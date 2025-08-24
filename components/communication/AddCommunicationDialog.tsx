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
import { Input } from "@/components/ui/input"

export function AddCommunicationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Nueva Comunicación
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Iniciar Nueva Comunicación
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Comparta una actualización, propuesta o feedback con el equipo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="area">Área / Departamento</Label>
              <Select>
                <SelectTrigger id="area">
                  <SelectValue placeholder="Seleccione su área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="operaciones">Operaciones</SelectItem>
                  <SelectItem value="logistica">Logística</SelectItem>
                  <SelectItem value="finanzas">Finanzas</SelectItem>
                  <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                  <SelectItem value="gerencia">Gerencia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="type">Tipo de Comunicación</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Seleccione el tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="propuesta">Propuesta</SelectItem>
                  <SelectItem value="actualizacion">Actualización</SelectItem>
                  <SelectItem value="reporte">Reporte</SelectItem>
                  <SelectItem value="capacitacion">Capacitación</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Escriba su mensaje aquí..."
              className="min-h-[120px]"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Adjuntar Archivo (Opcional)</Label>
            <div className="flex items-center justify-center w-full">
              <Label
                htmlFor="dropzone-file-comm"
                className="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100"
              >
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-6 h-6 text-slate-500" />
                  <p className="text-xs text-slate-500 mt-1">
                    <span className="font-semibold">Click para subir</span> o arrastrar
                  </p>
                </div>
                <Input id="dropzone-file-comm" type="file" className="hidden" />
              </Label>
            </div>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Enviar Comunicación
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}