FROM React:20 AS built 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run built
COPY --from=built /app/dirt /usr/share/nginx/html
EXPOSE 80
CMD [ "Nginx","-g","deamon off"; ]
