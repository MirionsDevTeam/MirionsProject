
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Planificador de Eventos

Con esta aplicación podrás llevar a cabo la planificación y la gestión de cualquier evento que quieras crear, desde la lista de invitados, la cantidad y tipo de comida, la lista de música para el evento, las actividades...

Podrás interactuar con tus invitados realizando encuestas para descubrir sus preferencias en cuanto a horario, duración, lugar, tener en cuenta alergias, fobias...

Todos los invitados estarán al tanto de tu evento con un sistema de notificaciones por si cambian las características del evento.


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Roadmap

- Additional browser support

- Add more integrations


## License

[MIT](https://choosealicense.com/licenses/mit/)

