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
import { Plus, Upload, FileText, Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const initialDocuments = [
    { id: 1, name: "Cuerpo del Contrato" },
    { id: 2, name: "Anexo A - Especificaciones" },
    { id: 3, name: "Anexo B - Cronograma" },
]

export function AddContractDialog() {
  const [date, setDate] = useState<Date>()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Contrato
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Registrar Nuevo Contrato
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Complete la información para registrar un nuevo contrato en el sistema.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="contract-title">Título del Contrato</Label>
              <Input id="contract-title" placeholder="Ej: Contrato de Construcción" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="client">Cliente</Label>
              <Input id="client" placeholder="Ej: Inmobiliaria Premium S.A.C." />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contract-id">ID del Contrato</Label>
              <Input id="contract-id" placeholder="Ej: C004" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="value">Valor del Contrato</Label>
              <Input id="value" type="number" placeholder="Ej: 2500000" />
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
              <Label htmlFor="date">Fecha de Firma</Label>
               <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Seleccione una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contract-type">Tipo de Contrato</Label>
              <Select>
                <SelectTrigger id="contract-type">
                  <SelectValue placeholder="Seleccione el tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="servicios">Servicios</SelectItem>
                  <SelectItem value="productos">Productos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="select-client">DNI</Label>
              <Select>
                <SelectTrigger id="select-client">
                  <SelectValue placeholder="Seleccione un cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cliente-1">Cliente 1</SelectItem>
                  <SelectItem value="cliente-2">Cliente 2</SelectItem>
                  <SelectItem value="cliente-3">Cliente 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="codigo">Código</Label>
              <Input id="codigo" placeholder="Ingrese el código" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cliente-text">Nombre del cliente</Label>
              <Input id="cliente-text" placeholder="Ingrese el cliente" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ruc">RUC</Label>
              <Input id="ruc" placeholder="Ingrese el RUC" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="valor-total">Valor Total</Label>
              <Input id="valor-total" type="number" placeholder="Ingrese el valor total" />
            </div>
             <div className="space-y-1.5">
                <Label htmlFor="status">Estado</Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Seleccione estado del contrato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-revision">En Revisión</SelectItem>
                    <SelectItem value="activo">Activo</SelectItem>
                    <SelectItem value="por-vencer">Por Vencer</SelectItem>
                    <SelectItem value="finalizado">Finalizado</SelectItem>
                  </SelectContent>
                </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">Descripción / Objeto del Contrato</Label>
            <Textarea
              id="description"
              placeholder="Breve descripción del objeto y alcance del contrato..."
              className="min-h-[100px]"
            />
          </div>
           <div className="space-y-3">
            <Label>Documentos del Contrato</Label>
            <div className="space-y-2">
              {initialDocuments.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-2 bg-slate-50/50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-700">{doc.name}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Label htmlFor={`doc-contract-${doc.id}`} className="cursor-pointer">
                      <Upload className="h-3 w-3 mr-1.5" />
                      Cargar
                      <Input id={`doc-contract-${doc.id}`} type="file" className="hidden" />
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
            Guardar Contrato
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}