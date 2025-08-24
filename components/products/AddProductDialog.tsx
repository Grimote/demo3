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
import { Plus, Upload } from "lucide-react"

const sectors = [
  {
    name: "Retailers",
    subSectors: [
      "Alimentos",
      "Bebidas",
      "Snacks",
      "Medicamentos",
      "Hogar",
      "Moda",
      "Joyas",
      "Tecnología",
      "Electrónica",
      "Juguetería",
      "Calzado",
      "Librería",
      "Ferretería",
      "Cosméticos y Belleza",
      "Ropa",
      "Equipamiento Deportivo",
      "Accesorios",
      "Vehículos",
      "Repuestos",
      "Lubricantes",
      "Herramientas",
      "Construcción",
      "Otros",
    ],
  },
  {
    name: "Distribuidoras",
    subSectors: [
      "Alimentos",
      "Bebidas",
      "Snacks",
      "Medicamentos",
      "Hogar",
      "Moda",
      "Joyas",
      "Tecnología",
      "Electrónica",
      "Juguetería",
      "Calzado",
      "Librería",
      "Ferretería",
      "Cosméticos y Belleza",
      "Ropa",
      "Equipamiento Deportivo",
      "Accesorios",
      "Vehículos",
      "Repuestos",
      "Lubricantes",
      "Herramientas",
      "Construcción",
      "Otros",
    ],
  },
  {
    name: "E-commerce",
    subSectors: [
      "Alimentos",
      "Bebidas",
      "Snacks",
      "Medicamentos",
      "Hogar",
      "Moda",
      "Joyas",
      "Tecnología",
      "Electrónica",
      "Juguetería",
      "Calzado",
      "Librería",
      "Ferretería",
      "Cosméticos y Belleza",
      "Ropa",
      "Equipamiento Deportivo",
      "Accesorios",
      "Vehículos",
      "Repuestos",
      "Lubricantes",
      "Herramientas",
      "Construcción",
      "Otros",
    ],
  },
  {
    name: "Mayoristas",
    subSectors: [
      "Alimentos",
      "Bebidas",
      "Snacks",
      "Medicamentos",
      "Hogar",
      "Moda",
      "Joyas",
      "Tecnología",
      "Electrónica",
      "Juguetería",
      "Calzado",
      "Librería",
      "Ferretería",
      "Cosméticos y Belleza",
      "Ropa",
      "Equipamiento Deportivo",
      "Accesorios",
      "Vehículos",
      "Repuestos",
      "Lubricantes",
      "Herramientas",
      "Construcción",
      "Otros",
    ],
  },
  {
    name: "Tiendas especializadas",
    subSectors: [
      "Alimentos",
      "Bebidas",
      "Snacks",
      "Medicamentos",
      "Hogar",
      "Moda",
      "Joyas",
      "Tecnología",
      "Electrónica",
      "Juguetería",
      "Calzado",
      "Librería",
      "Ferretería",
      "Cosméticos y Belleza",
      "Ropa",
      "Equipamiento Deportivo",
      "Accesorios",
      "Vehículos",
      "Repuestos",
      "Lubricantes",
      "Herramientas",
      "Construcción",
      "Otros",
    ],
  },
  { name: "Otros", subSectors: ["Otros"] },
]

export function AddProductDialog() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null)

  const handleSectorChange = (value: string) => {
    setSelectedSector(value)
  }

  const currentSubSectors =
    sectors.find((s) => s.name === selectedSector)?.subSectors || []

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Agregar Producto
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Añadir Nuevo Producto
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Complete la información para registrar un nuevo producto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Nombre del Producto</Label>
              <Input id="name" placeholder="Ej: Casco de Seguridad" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sector">Sector</Label>
              <Select onValueChange={handleSectorChange}>
                <SelectTrigger id="sector">
                  <SelectValue placeholder="Seleccione un sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((sector) => (
                    <SelectItem key={sector.name} value={sector.name}>
                      {sector.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sub-sector">Sub-Sector</Label>
              <Select disabled={!selectedSector}>
                <SelectTrigger id="sub-sector">
                  <SelectValue placeholder="Seleccione un sub-sector" />
                </SelectTrigger>
                <SelectContent>
                  {currentSubSectors.map((subSector) => (
                    <SelectItem key={subSector} value={subSector}>
                      {subSector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                <Label htmlFor="amount">Monto</Label>
                <Input id="amount" type="number" placeholder="Ej: 45.00" />
              </div>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              placeholder="Breve descripción del producto..."
              className="min-h-[80px]"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Imágenes</Label>
            <div className="flex items-center justify-center w-full">
              <Label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100"
              >
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-6 h-6 text-slate-500" />
                  <p className="text-xs text-slate-500 mt-1">
                    <span className="font-semibold">Click para subir</span> o arrastrar
                  </p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" multiple />
              </Label>
            </div>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Guardar Producto
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}