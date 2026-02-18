# Podcast Maneger

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes epsodios de podcasts
separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os epsódios em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar epsodios por nome de podcast  

## Como

#### Feature:
Listar os episódios podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma api rest {json} com o nome podcast, nome do episódio, imagem de capa, link, categoria

```js
[
    {
        podcastName: "flow",
        videoId: "pQSuQmUfS30",
        episode: "CBUM - Flow #319",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://ww.youtube.com/watch?v=pQSuQmUfS30"
        category: ["fitness", "saude"]
    },
    {
        podcastName: "flow",
        videoId: "4KDGTdiOV4I",
        episode: "RUBENS BARRICHELLO - Flow #339",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://ww.youtube.com/watch?v=4KDGTdiOV4I"
        categories: ["esporte", "corrida"]
    },    
]
```