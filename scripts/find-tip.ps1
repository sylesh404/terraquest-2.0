Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\Sakthi sylesh\Downloads\terraquest 2.0\public\assets\stick.png")
$minY = 9999
$tipX = 0
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 100) {
            if ($y -lt $minY) {
                $minY = $y
                $tipX = $x
            }
        }
    }
}
$bmp.Dispose()
"Hotspot tip: X=$tipX, Y=$minY" | Out-File -FilePath "C:\Users\Sakthi sylesh\Downloads\terraquest 2.0\tip.txt"
