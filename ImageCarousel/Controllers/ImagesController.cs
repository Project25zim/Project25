using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace ImageCarousel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        [HttpGet("carousel")]
        public IActionResult GetCarouselImages()
        {
            // Path to the images folder
            var carouselFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", "carousel");

            if (!Directory.Exists(carouselFolder))
            {
                return NotFound(new { message = "Carousel folder not found." });
            }

            // Get all image files
            var imageFiles = Directory.GetFiles(carouselFolder, "*.*")
                .Where(file => file.EndsWith(".jpg", StringComparison.OrdinalIgnoreCase) ||
                               file.EndsWith(".jpeg", StringComparison.OrdinalIgnoreCase) ||
                               file.EndsWith(".png", StringComparison.OrdinalIgnoreCase) ||
                               file.EndsWith(".gif", StringComparison.OrdinalIgnoreCase) ||
                               file.EndsWith(".webp", StringComparison.OrdinalIgnoreCase))
                .Select(file => $"ImageCarousel/wwwroot/images/carousel/{Path.GetFileName(file)}");

            return Ok(imageFiles);
        }
    }
}