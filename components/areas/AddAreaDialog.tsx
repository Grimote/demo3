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
import { Plus, Target, Users, Activity, Calculator, Monitor, Shield } from "lucide-react"

export function AddAreaDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Agregar Área
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Agregar Nueva Área Interna
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Complete la información para registrar una nueva área en el organigrama.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="area-name">Nombre del Área</Label>
              <Input id="area-name" placeholder="Ej: Marketing Digital" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="staff-count">Número de Personas</Label>
              <Input id="staff-count" type="number" placeholder="Ej: 10" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">Descripción de Funciones</Label>
            <Textarea
              id="description"
              placeholder="Describa las principales funciones y responsabilidades del área..."
              className="min-h-[100px]"
            />
          </div>
           <div className="space-y-1.5">
              <Label htmlFor="icon">Icono Representativo</Label>
              <Select>
                <SelectTrigger id="icon">
                  <SelectValue placeholder="Seleccione un icono" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="target">Estrategia (Target)</SelectItem>
                  <SelectItem value="users">Personal (Users)</SelectItem>
                  <SelectItem value="activity">Operaciones (Activity)</SelectItem>
                  <SelectItem value="calculator">Finanzas (Calculator)</SelectItem>
                  <SelectItem value="monitor">Tecnología (Monitor)</SelectItem>
                  <SelectItem value="shield">Legal (Shield)</SelectItem>
                </SelectContent>
              </Select>
            </div>
        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Guardar Área
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}