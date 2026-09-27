Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Sakthi sylesh\Downloads\terraquest 2.0\dist\assets\stick.png"
$orig = [System.Drawing.Image]::FromFile($srcPath)
Write-Host "Original Dimensions: $($orig.Width) x $($orig.Height)"

# Keep 32px width version for cursor
$newWidth = 32
$newHeight = [int][Math]::Round($orig.Height * ($newWidth / $orig.Width))
Write-Host "New Dimensions: $newWidth x $newHeight"

$bmp = New-Object System.Drawing.Bitmap $newWidth, $newHeight
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($orig, 0, 0, $newWidth, $newHeight)

$orig.Dispose()
$g.Dispose()

# Save original backup
Copy-Item $srcPath "C:\Users\Sakthi sylesh\Downloads\terraquest 2.0\public\assets\stick-original.png" -Force

# Save resized 32px cursor to public and src
$bmp.Save("C:\Users\Sakthi sylesh\Downloads\terraquest 2.0\public\assets\stick.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save("C:\Users\Sakthi sylesh\Downloads\terraquest 2.0\src\assets\stick.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Saved 32px stick.png successfully!"
