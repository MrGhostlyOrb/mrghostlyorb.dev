# Hosting Instructions

## SSL Certificates

### Locations
Certificates are generated automatically and stored in  the below locations:
Certificate is saved at: /etc/letsencrypt/live/mrghostlyorb.dev/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/mrghostlyorb.dev/privkey.pem

### Commands
Run the following commands to generate a new certificate:

```bash
certbot certonly --manual --preferred-challenges=dns --email ben.f.cooper@gmail.com --server https://acme-v02.api.letsencrypt.org/directory -d mrghostlyorb.dev -d *.mrghostlyorb.dev
```

## Running the Server
The server is run under crontab. using the following command:

```bash
@reboot /usr/bin/node /root/mrghostlyorb.dev/server.js
```

You can edit the crontab using the following command:

```bash
crontab -e
```

## Deploying the Server
The server is deployed using the following command:

```bash
cd /root/mrghostlyorb.dev
git pull
npm install
npm run build
```
