
```
# Deploy Next.js Application on IIS

This project is a Next.js application configured to run on IIS using `iisnode`. It is optimized for production and includes a basic server setup.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Routes](#routes)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (Ensure it's installed on your server)
- [IIS](https://www.iis.net/) (Internet Information Services)
- [iisnode](https://github.com/tjanczuk/iisnode) (Node.js integration for IIS)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install `cross-env` as a development dependency:

   ```bash
   npm install --save-dev cross-env
   ```

## Configuration

### `server.js`

The `server.js` file configures the Next.js server:

```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
```

### `web.config`

The `web.config` file contains the IIS configuration:

```xml
<configuration>
  <system.webServer>    
    <rewrite>
      <rules>
        <rule name="myapp">
          <match url="/*" />
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite>

    <iisnode node_env="production" nodeProcessCommandLine="&quot;C:\Program Files\nodejs\node.exe&quot;" interceptor="&quot;%programfiles%\iisnode\interceptor.js&quot;" />
  </system.webServer>
  <location path="" overrideMode="Deny">
      <system.webServer>
        <handlers>
          <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
        </handlers>
      </system.webServer>
  </location>
</configuration>
```

## Running the Application

1. Build the application for production:

   ```bash
   npm run build
   ```

2. Start the application:

   ```bash
   npm start
   ```

## Routes

This application currently supports the following routes:

- `/a` - Render the page associated with route `/a`.
- `/b` - Render the page associated with route `/b`.
- Other routes are handled by the Next.js request handler.

