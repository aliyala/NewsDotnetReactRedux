using System;

namespace ReactApp.Dto
{
    /// <summary>
    /// Новость
    /// </summary>
    public class NewsDto
    {
        /// <summary>
        /// Заголовок новости
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Контент новости (текст, картинки)
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Дата и время публикации
        /// </summary>
        public DateTime PublicationDate { get; set; }
    }
}
