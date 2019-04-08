using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactApp.Dto;

namespace ReactApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private static ConcurrentDictionary<Guid, NewsDto> _newsColection = new ConcurrentDictionary<Guid, NewsDto>();

        public NewsController()
        {
            if (_newsColection.Count == 0)
            {
                _newsColection.TryAdd(Guid.NewGuid(), new NewsDto { Title = "Заголовок очень интересной новости", Content = "Сенсация! Произошло такое!!!" });
                _newsColection.TryAdd(Guid.NewGuid(), new NewsDto { Title = "Обычная новость", Content = "Сегодня обычный день. Какой-то очень большой текст. Текстище арррар авррвра оаопап ырар. рпрпр лплоп врва пвплу." });
                _newsColection.TryAdd(Guid.NewGuid(), new NewsDto { Title = "Новость 1", Content = "Сегодня обычный день." });
                _newsColection.TryAdd(Guid.NewGuid(), new NewsDto { Title = "новость", Content = "Сегодня обычный день." });
            }
        }

        [HttpGet]
        public IEnumerable<NewsDto> Get()
        {
            return _newsColection.Values;
        }

        [HttpPost]
        public IActionResult Post(NewsDto news)
        {
            if (_newsColection.TryAdd(Guid.NewGuid(), news))
                return Ok();
            else
                return BadRequest();
        }
    }
}