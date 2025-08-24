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
import { Plus, Trash2, Calendar as CalendarIcon, Upload, FileText } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

interface OrderItem {
  id: number
  name: string
  quantity: number
  unitPrice: number
}

interface UploadedFile {
  name: string;
  dateTime: string;
}

export function AddPurchaseOrderDialog() {
  const [date, setDate] = useState<Date>()
  const [items, setItems] = useState<OrderItem[]>([
    { id: 1, name: "", quantity: 1, unitPrice: 0 },
  ])
  const [selectedArea, setSelectedArea] = useState<string>("")
  const [documentType, setDocumentType] = useState<string>("")
  const [documentNumber, setDocumentNumber] = useState<string>("")
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const currentDateTime = format(new Date(), "dd/MM/yyyy HH:mm")
      setUploadedFile({ name: file.name, dateTime: currentDateTime })
    }
  }

  const handleAddItem = () => {
    setItems([...items, { id: Date.now(), name: "", quantity: 1, unitPrice: 0 }])
  }

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="h-4 w-4 mr-2" />
          Nueva Orden de Compra
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[90%] bg-white/90 backdrop-blur-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Crear Nueva Orden de Compra
          </DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Complete la información para generar una nueva orden de compra.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4 max-h-[70vh] overflow-y-auto pr-6 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="supplier">Proveedor</Label>
              <Select>
                <SelectTrigger id="supplier">
                  <SelectValue placeholder="Seleccione un proveedor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distribuidora-central">Distribuidora Central S.A.C.</SelectItem>
                  <SelectItem value="mayorista-industrial">Mayorista Industrial E.I.R.L.</SelectItem>
                  <SelectItem value="suministros-globales">Suministros Globales S.R.L.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="date">Fecha de Emisión</Label>
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
                <Label htmlFor="status">Estado</Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Seleccione estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aprobada">Aprobada</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="en-proceso">En Proceso</SelectItem>
                  </SelectContent>
                </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Contratos de Compras</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg bg-slate-50/50">
              <div className="space-y-1.5">
                <Label htmlFor="destination-area">Área de Destino</Label>
                <Select onValueChange={setSelectedArea} value={selectedArea}>
                  <SelectTrigger id="destination-area">
                    <SelectValue placeholder="Seleccione un área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="administracion">Administración</SelectItem>
                    <SelectItem value="logistica">Logística</SelectItem>
                    <SelectItem value="contabilidad">Contabilidad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="document-type">Tipo de Documento</Label>
                <Select onValueChange={setDocumentType} value={documentType} disabled={!selectedArea}>
                  <SelectTrigger id="document-type">
                    <SelectValue placeholder="Seleccione un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="boleta">BOLETA</SelectItem>
                    <SelectItem value="factura">FACTURA</SelectItem>
                    <SelectItem value="guia-remision">GUÍA DE REMISIÓN</SelectItem>
                    <SelectItem value="orden-compra">ORDEN DE COMPRA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="document-number">Número de Comprobante</Label>
                <Input
                  id="document-number"
                  placeholder="Ingrese el número"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  disabled={!selectedArea}
                />
              </div>
            </div>
            <div className="mt-2">
              <Button asChild variant="outline" disabled={!selectedArea || !documentType || !documentNumber}>
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  Cargar Documento
                  <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                </Label>
              </Button>
            </div>
            {uploadedFile && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                <p className="font-semibold text-green-800">Archivo Cargado:</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-slate-700">{uploadedFile.name}</span>
                  <span className="text-slate-500">{uploadedFile.dateTime}</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-3 mt-4">
            <Label>Items de la Orden</Label>
            <div className="space-y-2">
              {items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-5">
                    <Input placeholder="Nombre del Producto/Servicio" />
                  </div>
                  <div className="col-span-2">
                    <Input type="number" placeholder="Cant." defaultValue={1} />
                  </div>
                  <div className="col-span-2">
                     <Input type="number" placeholder="P. Unit." />
                  </div>
                   <div className="col-span-2">
                     <Input readOnly placeholder="Total" value={(item.quantity * item.unitPrice).toFixed(2)} />
                  </div>
                  <div className="col-span-1">
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              Añadir Item
            </Button>
          </div>

          <div className="flex justify-end mt-4">
            <div className="w-1/3">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>S/ {totalAmount.toFixed(2)}</span>
                </div>
            </div>
          </div>

        </div>
        <DialogFooter className="pt-4">
          <Button type="submit" className="w-full">
            Guardar Orden de Compra
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}