# Beeeeers
This is an application based on Angular and Node.Js. 
It is a CRUD app. Its purpose is to add, list, modify and delete items (here they are brands of beers.)

### How to get this app
- (Not Mandatory) Create a `.env` file in this repository with this data :
````
    MONGO_URL_BEER=your_mongdb_url:your_port/collections
    APP_PORT_BEER=your_backend_port
    IP_ADDR=your_ip
````

- Create `frontend/src/environments/environment.ts` with this data:
```
    export const environment = {
        production: false,
        apiUrl: 'your_ip:your_backend_port'
    };f
```

_You can change all `your_ip` with localhost

### Run Server
- `cd backend`
- `npm i && npm run dev`

### Run Angular App
- `cd frontend`
- `npm i && npm run start`

    _If you want run the front in another port or ip, you can run :
    ``
    npm i && npm run start -- --host your_ip --port=your_port
    ``_

- And go to `your_ip:your_port`

## Run all with one line
#### `npm run dev` in this folder

_This is a personal project, to learn Angular and Node.Js.
