# Hosting Instructions

## SSL Certificates

## Running the Server
The server is run under crontab. using the following command:

```bash
@reboot go run main.go
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
```
