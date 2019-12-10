FROM alpine:latest

RUN apk add --no-cache \
	bash \
	ca-certificates \
	coreutils \
	curl \
	jq

COPY playground.sh /usr/local/bin/playground

CMD ["playground"]
