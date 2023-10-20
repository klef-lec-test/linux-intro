FROM archlinux

LABEL version="0.1.0"
LABEL maintainer="haru"
LABEL name="timetable-frontend-next"

RUN pacman -Syu --noconfirm
RUN pacman -S --noconfirm nodejs
RUN pacman -S --noconfirm npm
RUN pacman -S --noconfirm yarn
RUN pacman -S --noconfirm git

VOLUME /app
WORKDIR /app