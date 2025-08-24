"use client"

import {
  Search,
  Filter,
  ChevronDown,
  Package,
  ShoppingCart,
  Eye,
  MoreHorizontal,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AddProductDialog } from "./AddProductDialog"

export function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Gestión de Productos</h2>
          <p className="text-slate-600 mt-1">Catálogo integral de productos y suministros</p>
        </div>
        <AddProductDialog />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input placeholder="Buscar productos por nombre, código o categoría..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
          <Filter className="h-4 w-4" />
          <span>Filtros</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Casco de Seguridad Industrial",
            category: "Seguridad",
            price: "S/ 45.00",
            stock: 150,
          },
          {
            name: "Taladro Percutor Profesional",
            category: "Herramientas",
            price: "S/ 320.00",
            stock: 25,
          },
          {
            name: "Cemento Portland Tipo I",
            category: "Construcción",
            price: "S/ 28.50",
            stock: 500,
          },
          {
            name: "Guantes de Seguridad",
            category: "Seguridad",
            price: "S/ 15.00",
            stock: 200,
          },
          {
            name: "Nivel Láser Profesional",
            category: "Herramientas",
            price: "S/ 450.00",
            stock: 12,
          },
          {
            name: "Varilla de Construcción",
            category: "Construcción",
            price: "S/ 35.00",
            stock: 300,
          },
        ].map((product, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
          >
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                <Package className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <span className="text-sm text-slate-600">Stock: {product.stock}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="flex-1">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}