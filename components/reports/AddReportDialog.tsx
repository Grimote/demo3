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
import { Plus, Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

export function AddReportDialog() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Generar Reporte
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Generar Nuevo Reporte
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Configure los parámetros para generar un nuevo reporte personalizado.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="report-title">Título del Reporte</Label>
              <Input id="report-title" placeholder="Ej: Reporte Mensual de Ventas" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="report-category">Categoría del Reporte</Label>
              <Select>
                <SelectTrigger id="report-category">
                  <SelectValue placeholder="Seleccione una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financiero">Financiero</SelectItem>
                  <SelectItem value="proyectos">De Proyectos</SelectItem>
                  <SelectItem value="inventario">De Inventario</SelectItem>
                  <SelectItem value="proveedores">De Proveedores</SelectItem>
                  <SelectItem value="personalizado">Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="period">Período</Label>
              <Input id="period" placeholder="Ej: Julio 2025, Q3 2025" />
            </div>
             <div className="space-y-1.5">
              <Label htmlFor="date-range">Rango de Fechas</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date-range"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} -{" "}
                          {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Seleccione un rango</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
             <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="generated-by">Generado Por</Label>
              <Input id="generated-by" placeholder="Ej: Juan Pérez, Equipo de Finanzas" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="criteria">Criterios y Filtros del Reporte</Label>
            <Textarea
              id="criteria"
              placeholder="Especifique los datos a incluir, filtros a aplicar, o cualquier otro criterio para la generación del reporte..."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Generar y Descargar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}