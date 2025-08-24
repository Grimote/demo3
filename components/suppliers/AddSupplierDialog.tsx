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
import { Plus, Upload, FileText } from "lucide-react"

const sectors = [
  { name: "Sector Primario", subSectors: ["Agricultura", "Ganadería", "Minería", "Pesca", "Areneras", "Silvicultura", "Piscicultura", "Apicultura", "Caza", "Petroleó", "Acuicultura", "Otros"] },
  { name: "Sector Secundario", subSectors: ["Artesanía", "Construcción", "Industria Textil", "Producción Energética", "Refinería", "Agroindustria", "Industria Manufacturera", "Otros"] },
  { name: "Sector Terciario", subSectors: ["Comercio", "Turismo y Hotelería", "Restaurantes", "Salud", "Educación", "Finanzas", "Transporte", "Comunicación", "Entretenimiento", "Servicios Personales", "Administración publica", "Publicidad y Marketing", "Distribución Editorial", "Tiendas por Apartamento", "Servicios de Limpieza", "Servicios Legales", "Recursos Humanos", "Servicios Técnicos", "Combustible", "Otros"] },
  { name: "Sector Cuarto", subSectors: ["Empresas certificadoras", "Cooperativas sociales", "Startups de Impacto", "Fundaciones", "Instituciones Hibridas", "Otros"] },
  { name: "Sector Quinto", subSectors: ["Trabajo Doméstico No Remunerado", "Servicios Publico Sin fines de Lucro", "Educación Publica", "ONGs", "Otros"] },
  { name: "Otros", subSectors: ["Opción a crear su propio sector"] },
]

const initialDocuments = [
  { id: 1, name: "FICHA RUC" },
  { id: 2, name: "COPIA LITERAL" },
  { id: 3, name: "ANEXO 2" },
  { id: 4, name: "ANEXO 3" },
  { id: 5, name: "DECLARACION JURADA" },
]

export function AddSupplierDialog() {
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
          Nuevo Proveedor
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Añadir Nuevo Proveedor
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Complete la información para registrar un nuevo proveedor.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="razon-social">Razón Social</Label>
              <Input id="razon-social" placeholder="Ej: Constructora Moderna S.A.C." />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ruc">RUC</Label>
              <Input id="ruc" placeholder="Ej: 20547896321" />
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
          </div>
          <div className="space-y-1.5">
            <Label>Imágen de Referencia</Label>
            <div className="flex items-center justify-center w-full">
              <Label
                htmlFor="dropzone-file-supplier"
                className="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100"
              >
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-6 h-6 text-slate-500" />
                  <p className="text-xs text-slate-500 mt-1">
                    <span className="font-semibold">Click para subir</span> o arrastrar
                  </p>
                </div>
                <Input id="dropzone-file-supplier" type="file" className="hidden" />
              </Label>
            </div>
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
                    <Label htmlFor={`doc-${doc.id}`} className="cursor-pointer">
                      <Upload className="h-3 w-3 mr-1.5" />
                      Cargar
                      <Input id={`doc-${doc.id}`} type="file" className="hidden" />
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
            Guardar Proveedor
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}