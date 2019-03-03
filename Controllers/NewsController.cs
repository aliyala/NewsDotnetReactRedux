using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactApp.Dto;

namespace ReactApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class NewsController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<NewsDto> Get()
        {
            var news = new List<NewsDto>();
            news.Add(new NewsDto { Title = "Заголовок очень интересной новости", Content = "Сенсация! Произошло такое!!!" });
            news.Add(new NewsDto { Title = "Обычная новость", Content = "Сегодня обычный день." });

            return news;
        }
    }
}