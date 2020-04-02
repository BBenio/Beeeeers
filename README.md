# Beeeeers
Follow some prices of beers and have some graphs.

# Please follow this to have the app
- (Not Mandatory) Create a `.env` here with this data :
````
    MONGO_URL_BEER=my_mongdb_url:my_port/collections
    APP_PORT_BEER=your_port
    IP_ADDR=your_ip
````

- Create `frontend/src/environments/environment.ts` with this data:
```
    export const environment = {
        production: false,
        apiUrl: 'your_ip:the_port_of_backend'
    };
```

_You can change all `your_ip` with localhost

### Run Server
- `cd backend`
- `npm i && npm run dev`

### Run App Angular
- `cd frontend`
- `npm i && npm run start`

    _If you want run the front in another port or ip, you can run :
    ``
    npm i && npm run start -- --host your_ip --port=your_port
    ``_

- And go to `your_ip:your_port`

## Run all with one line
#### `npm run dev` in this folder