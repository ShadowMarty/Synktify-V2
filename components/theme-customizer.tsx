"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

const colorPresets = [
  { name: "Default", primary: "#0ea5e9", secondary: "#7dd3fc" },
  { name: "Forest", primary: "#22c55e", secondary: "#86efac" },
  { name: "Sunset", primary: "#f97316", secondary: "#fdba74" },
  { name: "Lavender", primary: "#8b5cf6", secondary: "#c4b5fd" },
  { name: "Rose", primary: "#ec4899", secondary: "#fbcfe8" },
]

export function ThemeCustomizer() {
  const [primaryColor, setPrimaryColor] = useState("#0ea5e9")
  const [secondaryColor, setSecondaryColor] = useState("#7dd3fc")
  const [fontSize, setFontSize] = useState(16)
  const [darkMode, setDarkMode] = useState(false)

  const applyTheme = () => {
    document.documentElement.style.setProperty("--primary", primaryColor)
    document.documentElement.style.setProperty("--secondary", secondaryColor)
    document.documentElement.style.fontSize = `${fontSize}px`
    document.documentElement.classList.toggle("dark", darkMode)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Customize Theme</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Color Presets</h4>
            <div className="flex flex-wrap gap-2">
              {colorPresets.map((preset) => (
                <Button
                  key={preset.name}
                  variant="outline"
                  className="w-20 h-8"
                  style={{
                    backgroundColor: preset.primary,
                    color: "white",
                  }}
                  onClick={() => {
                    setPrimaryColor(preset.primary)
                    setSecondaryColor(preset.secondary)
                  }}
                >
                  {preset.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="primary-color">Primary Color</Label>
            <Input
              id="primary-color"
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondary-color">Secondary Color</Label>
            <Input
              id="secondary-color"
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="font-size">Font Size</Label>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
            />
            <div className="text-sm text-muted-foreground">{fontSize}px</div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
          <Button onClick={applyTheme}>Apply Theme</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

