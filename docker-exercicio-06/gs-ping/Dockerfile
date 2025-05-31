#1: Builder
FROM golang:1.24-alpine AS builder

WORKDIR /app

COPY . .

RUN go build -o gs-ping

#2: Imagem final reduzida
FROM alpine:latest

WORKDIR /root/

COPY --from=builder /app/gs-ping .

EXPOSE 8080

CMD ["./gs-ping"]
