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
            news.Add(new NewsDto { Title = "Обычная новость", Content = "Сегодня обычный день. Какой-то очень большой текст. Текстище арррар авррвра оаопап ырар. рпрпр лплоп врва пвплу." });
            news.Add(new NewsDto { Title = "Новость 1", Content = "Сегодня обычный день." });
            news.Add(new NewsDto { Title = "новость", Content = "Сегодня обычный день." });

            return news;
        }
    }
}